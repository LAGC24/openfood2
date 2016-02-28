/**
 * Created by Edmundo on 2/28/2016.
 */
"use strict";

var mongo = require('mongodb');
var client = mongo.MongoClient;
var _db;

module.exports = {
  connect: function() {
    // Check if running on Heroku (Mongo uri env. var. is set), otherwise connect locally.
    var mongoUri = process.env.mongolab_uri || 'mongodb://localhost:27000/munchie';

    client.connect(mongoUri, function(err, db) {
      if(err) {
        console.log("Error connecting to Mongo - check mongod connection");
        //Todo handle when there is no connection to DB.
        // process.exit(1);
      }

      _db = db;
      console.log("Connected to Mongo");
    });
  },

  getCategories: function (){
    return _db.collection('categories');
  },

  getRestaurants: function (){
    return _db.collection('restaurants');
  }
};
