var express = require('express');
var hbs = require('express-handlebars');
var path = require('path');
var body_parser =  require('body-parser');
var validator = require('express-validator');
var util = require('util');

// custom module imports
var parser = require(path.join(__dirname, 'parser'));
var area = require(path.join(__dirname, 'calc_area'));

var app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
app.use(validator());

app.use(express.static(path.join(__dirname + '/public/')));

app.engine('handlebars', hbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

// Basic routes
app.get('/', function(req, res, next){
  res.render('1');
});

app.post('/2', function(req, res, next){
  req.assert('shape', 'Please select a shape to proceed to step - 2').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    res.status(400).send('Please select a shape to proceed to step - 2' + util.inspect(errors));
    return;
  }

  // Go ahead to parse the selected option for shape and render step - 2
  var shape = req.body.shape;
  var context = parser.parse_shape(shape);
  res.render('2', context);
});


app.post('/3', function(req, res, next){
  var shape = req.body.shape;

  keys = Object.keys(req.body);
  keys.pop('shape'); //We do not need shape key from the request

  // Before proceeding to render validate for empty or non-numeric inputs
  for (var i = 0; i < keys.length; i++){
    req.assert(keys[i], 'Please enter a numeric value').notEmpty().isDecimal();
  }
  var errors = req.validationErrors();
  if(errors){
    res.status(400).send('Please enter numeric values to calculate the area' + util.inspect(errors));
    return;
  }

  var context = area.calculate_area(shape.toLowerCase(), req.body);
  res.render('3', context);
});

// Redirection to other Routes
app.get('/1', function(req, res, next){
  res.redirect('/');
});

//Start Listening on Port 3000
app.listen(3000);
