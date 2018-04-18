// dependancies used 
const axios = require('axios');
const fs = require('fs');
const {promisify} = require('util')

// 
const keys =  require('./apiKeys.js');
const bars = require('./newBars.json');


// API Keys - import and define
const {yelpID, yelpAPIKey, fourSqID, fourSqSecret, gMapsAPIKey,ypAPIKey} = keys;

// console.log(yelpID, yelpAPIKey, fourSqID, fourSqSecret, gMapsAPIKey, ypAPIkey)

const yelp = require('yelp-fusion');
const client = yelp.client(yelpAPIKey);

const testArr = [{name: 'J. Pauls'},{name: 'Old Glory BBQ'},{name: 'Pizzeria Paradiso'}]


const apiCall = (bar) =>{
    client.search({
        term: bar.name,
        location: 'Washington, DC'
    }).then(response=>{
        let queryRes = response.jsonBody.businesses[0];
        let barObj = {
            name: queryRes.name,
            address: queryRes.location.address1,
            ZIP: queryRes.location.zip_code,
            phone: queryRes.display_phone
        }
        console.log(barObj);
        fs.appendFileSync('barDump.json',barObj)
    })
    .catch(err=>{
        console.log(err); 
    })
}

let scrape = promisify(apiCall);


function delay(t,data){
    return new Promise(resolve =>{
        setTimeout(resolve.bind(null,data),t);
    });
}

function scrapeAll (array){
    let index=0;
    function next () {
        if (index<array.length) {
            return scrape(array[index++]).then(function () {
                return delay(100).then(next)
            });
        }
    }
    return Promise.resolve().then(next);
}

scrapeAll(testArr).then(()=>{

}).catch(err=>{
    console.log(err);
})