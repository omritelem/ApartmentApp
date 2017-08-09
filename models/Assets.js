"use strict"

var mongoose = require('mongoose');

var assettsSchema = mongoose.Schema({
  "asset" : Number,
  "type" : String
});

var Assets = mongoose.model('assets', assettsSchema);
module.exports = Assets;
