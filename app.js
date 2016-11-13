var express = require('express');
var hbs = require('express-handlebars');
var path = require('path');
var body_parser =  require('body-parser');

// custom module imports
var parser = require(path.join(__dirname, 'parser'));
var area = require(path.join(__dirname, 'calc_area'));

var app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/public/')));

app.engine('handlebars', hbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

// Basic routes
app.get('/', function(req, res, next){
  res.render('1');
});

// need to validation param middleware to handle no selection

app.post('/2', function(req, res, next){
  var shape = req.body.shape;
  var context = parser.parse_shape(shape);
  res.render('2', context);
});

// need to validation param middleware to handle no selection

app.post('/3', function(req, res, next){
  var shape = req.body.shape;
  var context = area.calculate_area(shape.toLowerCase(), req.body);
  res.render('3', context);
});

// Redirection to other Routes
app.get('/1', function(req, res, next){
  res.redirect('/');
});

//Start Listening on Port 3000
app.listen(3000);
