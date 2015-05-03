var router = require('express').Router();
var Page = require('../models/page');
var errorHandler = require('../utils').errorHandler;
var isEmpty = require('../utils').isEmpty;

router.get('/:userID/pages', function(req, res) {
  Page.find({ userID: req.params.userID }, function(err, data) {
    if (err) {
      errorHandler(res)(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
