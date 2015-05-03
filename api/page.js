var router = require('express').Router();
var Page = require('../models/page');
var User = require('../models/user');
var errorHandler = require('../utils').errorHandler;
var isEmpty = require('../utils').isEmpty;

router.get('/:id', function(req, res) {
  Page.getById(req.params.id, function(err, data) {
    if (err) {
      errorHandler(res)(err);
    } else {
      res.send(data);
    }
  });
});

router.post('/', function(req, res) {
  var data = {
    id: req.body.id,
    user: req.body.user
  };
  var page = new Page(data);
  page.save(function (err) {
    if (err) {
      errorHandler(res)(err);
    } else {
      res.send(page);
    }
  });
});

module.exports = router;
