"use strict"

var mongoose = require('mongoose');

var apartmentsSchema = mongoose.Schema({
  // _id: String,
  user_id: mongoose.Schema.Types.ObjectId,
  apartmentType: Number,
  assetType :Number,
  settlement : Number,
  street : Number,
  houseNumber : Number,
  apartmentFloor : Number,
  numberOfFloors : Number,
  meterSquare : Number,
  numberOfRooms : Number,
  numberOfPorches : Number,
  meterSquareGarden : Number,
  buildingOnPillar : Boolean,
  airConditionare : Boolean,
  bars : Boolean,
  elevator : Boolean,
  renovated : Boolean,
  warehouse : Boolean,
  furniture : Boolean,
  forPartners : Boolean,
  parking : Boolean,
  disabledAccess : Boolean,
  sunTerrace : Boolean,
  protectedSpace : Boolean,
  pandorDoors : Boolean,
  animals : Boolean,
  ImmediateEntrance : Boolean,
  longTerm : Boolean,
  price : Number,
  entranceDate : Date,
  numberOfPayments : Number,
  taxPerTwoMonths : Number,
  houseCommittee : Number,
  priceType : Number,
  location: {
    type: { type: String },
    coordinates: { type: [Number], index: '2dsphere'}
  },
  profileImage : String,
  images : [String],
  createdtime : Date,
  isActive : Boolean,
  Description : String,
  contactInfo : [{
    name: String,
    phone: String,
    email: String
  }]
});

var Apartments = mongoose.model('apartments', apartmentsSchema);
module.exports = Apartments;
