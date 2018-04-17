const axios = require('axios');
const fs = require('fs');
const keys =  require('./apiKeys.js');
// API Keys - import and define
const {yelpID, yelpAPIKey, fourSqID, fourSqSecret, gMapsAPIKey} = keys;

console.log(yelpID, yelpAPIKey, fourSqID, fourSqSecret, gMapsAPIKey)

// NOTES
// YELP 
// - is basic but easy to use
// - could fetch simple information about bars and populate a list of bars

// FOURSQUARE
// has access to images, 'tips'
// paywall of $500/month for start-up tier applications

// GOOGLE MAPS
// has wide variety of extra features
// possible legal and 


// TEST CALLS
//foursquare

// axios.get('https://api.foursquare.com/v2/venues/search/?near="washington, DC"?limit=50')
// .then((response)=>{
//     fs.appendFile('./barDump.json', response)
// })
// .catch((err)=>{
//     console.log(err);
// })

axios.get('https://api.yelp.com/v3/businesses/search/categories=bars')
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err);
})