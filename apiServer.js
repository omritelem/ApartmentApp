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

var Apartments = require('./models/Apartments.js');

//------>>>> Get Apartments <<<<---------
app.get('/Apartments', (req, res) => {
    Apartments.find()
    .then((Apartments) => {
      return res.json(Apartments);
    })
    .catch((err) => {
      console.log(" # API GET APARTMENTS ", err);
    })
})

//------>>>> Get Apartment by _id <<<<---------
app.get('/Apartments/:_id', (req, res) => {
    Apartments.findById(req.params._id)
    .then((apartment) => {
      return res.json(apartment);
    })
    .catch((err) => {
      console.log(" # API GET APARTMENT ", err);
    })
})

//------>>>> Get Apartment by user_id <<<<---------
app.get('/Apartments/user/:_id', (req, res) => {
    Apartments.find({"user_id" : req.params._id })
    .then((apartments) => {
      return res.json(apartments);
    })
    .catch((err) => {
      console.log(" # API GET APARTMENT ", err);
    })
})

//------>>>> Post Apartment <<<<---------
app.post('/Apartments', (req, res) => {
  var apartment = req.body;
  Apartments.create(apartment)
  .then((newApartment) => {
    return res.json(newApartment);
  })
  .catch((err) => {
    console.log(" # API POST APARTMENT ", err);
  });
});

//------>>>> Delete Apartment <<<<---------
app.delete('/Apartments/:_id', (req, res) => {
  let query = {_id: req.params._id};

  Apartments.remove(query)
  .then((deletedApartment) => {
    return res.json(deletedApartment);
  })
  .catch((err) => {
    console.log(" # API DELETE APARTMENT: ", err);
  })
})

//*****************************************************************// End Api's

app.listen(3001, ((err) => {
    if (err) {
      conole.log(err);
    }
    console.log('API server is listening on http://localhost:3001');
  })
);

// module.exports = app;
