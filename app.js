var express = require('express');
var hbs = require('express-handlebars');
var path = require('path');

var parser = require(path.join(__dirname, 'parser'));
var body_parser =  require('body-parser');

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

// app.param('shape', function(req, res, next){
//   var shape = req.param.shape;
//   console.log(shape);
//   if(!shape){
//     alert('Please select a shape to proceed with calculations');
//   }
//
//   next();
// });

app.post('/2', function(req, res, next){
  var shape = req.body.shape;
  var context = parser.parse_shape(shape);

  console.log(context);
  res.render('2', context);
});

// need to validation param middleware to handle no selection

app.post('/3', function(req, res, next){
  res.render('3');
});

// Redirection to other Routes
app.get('/1', function(req, res, next){
  res.redirect('/');
});

//Start Listening on Port 3000
app.listen(3000);
