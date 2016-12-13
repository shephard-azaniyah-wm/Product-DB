
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/productsDB';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  mongoose.Promise = global.Promise;


  console.log("Connected correctly to the server!");
});


var express = require('express');
var expressRouter = require('express-router');
var bodyParser = require('body-parser');
var users = require('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressRouter());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.get('/', function(req, res){
  res.send('It Works!');
});

app.get('/products', function(req, res){
  console.log('fetching Products...');
});

db.products.find(function(err, docs){
  if(err){
    res.send(err);
  } else {
    console.log('Sending Products...');
    res.json(docs);
  }
});

app.get('/products/:id', function(req, res){
  console.log('Fetching Product...');
});

app.delete('/products/:id', function(req, res){
    console.log('Fetching Product...');
    db.products.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, doc){
        if(err){
            res.send(err)
        }
    })
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;