'use strict';

var fs = require('fs');
var log = require('npmlog');
var versioning = require('./util/versioning.js');
var s3_setup = require('./util/s3_setup.js');
var url = require('url');
var config = require('rc')("node_pre_gyp", {
  acl: "public-read"
});

var configure = require('./configure.js');
var compile = require('./util/compile.js');
var handle_gyp_opts = require('./util/handle_gyp_opts.js');

var createTarball = require('./package');

var AWS;
try {
  AWS = require('aws-sdk');
} catch (e) {
  log.error('publish-maybe', 'aws-sdk not installed');
}

function rebuild(gyp, argv, done) {
  compile.run_gyp(['clean'], {}, function(err) {
    if (err) return done(err);

    configure(gyp, argv, function(err) {
      if (err) return done(err);

      handle_gyp_opts(gyp, argv, function(err, result) {
        var final_args = ['build'].concat(result.gyp).concat(result.pre);
        if (result.unparsed.length > 0) {
          final_args = final_args.
          concat(['--']).
          concat(result.unparsed);
        }
        compile.run_gyp(final_args, result.opts, function(err) {
          return done(err);
        });
      });
    });
  });
}

function PublishMaybe(gyp, argv, done) {
  if (!(this instanceof PublishMaybe)) return new PublishMaybe(gyp, argv, done);
  if (AWS) {
    var pkg = JSON.parse(fs.readFileSync('./package.json'));
    this.state = versioning.evaluate(pkg, gyp.opts);
    s3_setup.detect(this.state.hosted_path, config);
    AWS.config.update(config);

    this.state.s3_bucket = config.bucket || pkg.binary.bucket;
    this.state.s3_key = url.resolve(config.prefix, this.state.package_name);

    log.info('publish-maybe', 'loaded state: ' + JSON.stringify(this.state));

    if (!this.state.s3_bucket) {
      throw new Error('Could not detect s3 bucket automatically and not set in config.');
    }

    this.s3 = new AWS.S3();
  }
  var self = this;
  this.prepublish(function(err, ok) {
    if (err) return done(err);
    if (!ok) {
      return done();
    }
    self.publish(gyp, argv, done);
  });
}

PublishMaybe.prototype.publish = function(gyp, argv, done) {
  var self = this;
  rebuild(gyp, argv, function(err) {
    if (err) return done(err);

    createTarball(gyp, argv, function(err) {
      if (err) return done(err);

      var opts = {
        ACL: config.acl,
        Body: fs.createReadStream(self.state.staged_tarball),
        Bucket: self.state.s3_bucket,
        Key: self.state.s3_key
      };

      log.info('publish-maybe', 'Putting object');
      self.s3.putObject(opts, function(err, resp) {
        if (err) {
          log.info('publish', 's3 putObject error: "' + err + '"');
          return done(err);
        }
        if (resp) {
          log.info('publish-maybe', 's3 putObject response: "' + JSON.stringify(resp) + '"');
        }
        console.log('[' + self.state.name + '] published to ' + self.state.hosted_tarball);
        return done();
      });
    });
  });
};

PublishMaybe.prototype.prepublish = function(done) {
  var self = this;

  self.canPublish(function(err) {
    if (err) return done(err);

    self.shouldPublish(done);
  });
};

PublishMaybe.prototype.canPublish = function(fn) {
  if (!AWS) {
    return fn(new Error('aws-sdk not installed.  run `npm install -g aws-sdk and try again.`'));
  }
  fn();
};

PublishMaybe.prototype.shouldPublish = function(fn) {
  var opts = {
    Bucket: this.state.s3_bucket,
    Key: this.state.s3_key
  };

  log.info('publish-maybe', 'Checking for existing binary on S3 ' + JSON.stringify(opts));
  this.s3.headObject(opts, function(err) {
    if (err) {
      if (err.code == 'NotFound') {
        log.info('publish-maybe', 'OK binary does not exist so we should publish');
        return fn(null, true);
      }
      log.error('publish-maybe', 'Unexpected error: ' + err.stack);
      return fn(err);
    }
    log.info('publish-maybe', 'Binary already exists so we do not need to publish');
    return fn(null, false);
  });
};

module.exports = PublishMaybe;
module.exports.usage = 'Publishes pre-built binary if one does not exist (requires aws-sdk)';
