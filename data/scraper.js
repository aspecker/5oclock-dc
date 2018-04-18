// dependancies used 
const axios = require('axios');
const fs = require('fs');
const util = require('util')
// 
const keys =  require('./apiKeys.js');
const bars = require('./newBars.json');


// API Keys - import and define
const {yelpID, yelpAPIKey, fourSqID, fourSqSecret, gMapsAPIKey,ypAPIKey} = keys;

// console.log(yelpID, yelpAPIKey, fourSqID, fourSqSecret, gMapsAPIKey, ypAPIkey)

const yelp = require('yelp-fusion');
const client = yelp.client(yelpAPIKey);

const testArr = [{name: 'J. Pauls'},{name: 'Old Glory BBQ'},{name: 'Pizzeria Paradiso'},{name: 'J. Pauls'},{name: 'Old Glory BBQ'},{name: 'Pizzeria Paradiso'},{name: 'J. Pauls'},{name: 'Old Glory BBQ'},{name: 'Pizzeria Paradiso'}]

const query =(bar)=> {
    return client.search({
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
        return console.log(barObj);
        fs.appendFile('barDump.json',barObj)
    })
    .catch(err=>{
        console.log(err); 
    });
}

let sendQuery = util.promisify(query);

// using set interval
function queryAll(array) {
    return new Promise((resolve,reject)=>{
        let index = 0;
        let timer = setInterval(function(){
            if (index<array.length){
                sendQuery(array[index++]).catch(()=>{
                    clearInterval(timer);
                    reject();
                });
            } else {
                clearInterval(timer);
                resolve()
            }
        }, 3000);
    })
}

queryAll(testArr);


function delay(t, data) {
    return new Promise(resolve => {
        setTimeout(resolve.bind(null, data), t);
    });
}

//using reduce  -  only queries once and quits
// testArr.reduce(function(p, bar) {
//     return p.then(() => {
//         return sendQuery(bar).then(delay.bind(null, 100));
//     });
// }, Promise.resolve()).then(() => {

// }).catch(err => {
 
// });

// using async away - still gets 429 error
// const promises = testArr.map(async function(bar) {
//     await sendQuery(bar).then(delay.bind(null, 5000));
// });
// Promise.all(promises).then(() => {

// }).catch(err => {

// });

