var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Proxy
var httpProxy = require('http-proxy');

var app = express();

// Proxy To Api
const apiProxy = httpProxy.createProxyServer({
  target:'http://localhost:3001'
});

app.use('/api', function(req, res){
  apiProxy.web(req, res);
})

// Proxy To Api
const apiProxy2 = httpProxy.createProxyServer({
  target:'http://localhost:3002'
});

app.use('/api2', function(req, res){
  apiProxy2.web(req, res);
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.locals.title = 'omri';

module.exports = app;
