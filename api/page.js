var router = require('express').Router();
var Page = require('../models/page');
var errorHandler = require('../utils').errorHandler;
var isEmpty = require('../utils').isEmpty;

router.get('/:pageID', function(req, res) {
  Page.findOne({ pageID: req.params.pageID }, function(err, data) {
    if (err) {
      errorHandler(res)(err);
    } else {
      res.send(data);
    }
  });
});

router.post('/', function(req, res) {
  Page.findOneAndUpdate({ pageID: req.body.pageID }, { $set: req.body }, function(err, data) {
    if (err) {
      errorHandler(res)(err);
    } else if (!data) {
      var page = new Page(req.body);
      page.save(function(err) {
        if (err) {
          errorHandler(res)(err);
        } else {
          res.send(page);
        }
      })
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
