/* Fill out these functions using Mongoose queries*/

var Listing = require('./ListingSchema.js');
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('./config');
    mongoose.connect('mongodb://listingdb:listing@ds121464.mlab.com:21464/lisitngdb');
    /*
      Instantiate a mongoose model for each listing object in the JSON file,
      and then save it to your Mongo database
     */

    var connection = mongoose.connection;
    connection.on("connected", function(){

    });
  //  console.log("start");
var findLibraryWest = function() {

  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
  Listing.find({name : 'Library West'},function (err,listingI)
 {
   console.log(listingI);

 });
 };


var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */

   Listing.findOneAndRemove({ code: 'CABL'}, function(err){
     if (err) throw err;
});
};


var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {$set: {address: '102 Phelps Lab, Gainesville, FL 32611' }}, function(err,listingI){
     if(err) throw err;
    console.log('Listing successfully updated!');
  });
};


var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, listingI) {
  if (err) throw err;

  // object of all the users
  console.log(listingI);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
