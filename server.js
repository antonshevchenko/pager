var express = require('express');
var morgan = require('morgan');
var consolidate = require('consolidate');
var errorHandler = require('./utils').errorHandler;
var generateSlug = require('./utils').generateSlug;
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var app = express();


//- DATABASE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pager');


//- SETUP
app.set('env', 'dev');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));
app.engine('html', consolidate.ejs);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


//- ROUTES
app.get('/', function(req, res) {
  res.render('index');
});

var apiPage = require('./api/page');
var apiUser = require('./api/user');
app.use('/api/v1/page', apiPage);
app.use('/api/v1/user', apiUser);


// var server = app.listen(process.env.port, function() {
var server = app.listen(3000, function() {
  console.log('Listening on port: %s',
  	server.address().port);
});
