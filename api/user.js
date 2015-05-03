var router = require('express').Router();
var User = require('../models/user');
var errorHandler = require('../utils').errorHandler;
var isEmpty = require('../utils').isEmpty;

router.get('/:id', function(req, res) {
  User.findById(id, function(err, data) {
    if (err) {
      errorHandler(res)(err);
    } else {
      res.send(data);
    }
  });
});

router.put('/:id', function(req, res) {
  var data = {
    accessToken: req.body.accessToken
  };
  User.findOneAndUpdate({ userID: req.params.id }, { $set: data }, function(err, data) {
    if (err) {
      errorHandler(res)(err);
    } else {
      res.send(data);
    }
  });
});

router.post('/', function(req, res) {
  var data = {
    userID: req.body.id,
    accessToken: req.body.accessToken
  };
  var user = new User(data);
  user.save(function(err) {
    if (err) {
      errorHandler(res)(err);
    } else {
      res.send(user);
    }
  });
});

module.exports = router;
