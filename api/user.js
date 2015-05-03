var router = require('express').Router();
var User = require('../models/user');
var errorHandler = require('../utils').errorHandler;
var isEmpty = require('../utils').isEmpty;

router.get('/:id', function(req, res) {
  res.send({});
});

router.put('/:id', function(req, res) {
  res.send({});
});

router.post('/', function(req, res) {
  res.send({});
});

module.exports = router;
