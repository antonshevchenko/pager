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
app.use(express.static(__dirname + '/public'));
app.engine('html', consolidate.ejs);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


//- ROUTES
app.get('/', function(req, res) {
  res.render('index');
});


//- POST-ROUTES
app.use(function(err, req, res, next){ //error catcher
	console.error(err.stack.toString().red);
	res.status(500).send(err.message);
});


var server = app.listen(process.env.port, function(){
		console.log('Listening at http://%s:%s',
			server.address().address,
			server.address().port);
});
