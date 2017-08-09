var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//********************************************************************// Api's
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/bookshop');
mongoose.connect('mongodb://localhost:27017/ApartmentsRent');


var db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB - connection error: '));

var Assets = require('./models/Assets.js');

//------>>>> Get Assets <<<<---------
app.get('/Assets', (req, res) => {
    Assets.find()
    .then((Assets) => {
      return res.json(Assets);
    })
    .catch((err) => {
      console.log(" # API GET ASSETS ", err);
    })
})

//*****************************************************************// End Api's

app.listen(3002, ((err) => {
    if (err) {
      conole.log(err);
    }
    console.log('API server is listening on http://localhost:3002');
  })
);

// module.exports = app;
