'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */

mongoose.connect('mongodb://listingdb:listing@ds121464.mlab.com:21464/lisitngdb');
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

var connection = mongoose.connection;
connection.on("connected", function(){
  //  console.log("ConnectedAF");
})
var listingData;
fs.readFile('listings.json', 'utf8', function(err, data) {
      if (err) throw err;
      listingData = JSON.parse(data).entries;

var size= listingData.length;
 //console.log(listingData);
for(var i = 0; i < size; i++){
  var ListingItem = new Listing(listingData[i]);
ListingItem.save(function(err){
    if (err) throw err;
});
  }
  });




/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
