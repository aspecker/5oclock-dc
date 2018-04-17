const axios = require('axios');
const fs = require('fs');
const keys =  require('./apiKeys.js');
// API Keys - import and define
const {yelpID, yelpAPIKey, fourSqID, fourSqSecret, gMapsAPIKey,ypAPIKey} = keys;

// console.log(yelpID, yelpAPIKey, fourSqID, fourSqSecret, gMapsAPIKey, ypAPIkey)

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

let ypQuery = `http://api2.yp.com/listings/v1/search?term=rocket+bar&format=json&key=${ypAPIKey}`

axios.get(ypQuery)
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err);
})