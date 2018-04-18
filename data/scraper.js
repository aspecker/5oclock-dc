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

const testArr = [{name: 'J. Pauls'},{name: 'Old Glory BBQ'},{name: 'Pizzeria Paradiso'},{name: 'fourz'},{name: 'fivez'},{name: 'sixez'},{name: 'J. Pauls'},{name: 'Old Glory BBQ'},{name: 'Pizzeria Paradiso'},{name: 'fourz'},{name: 'fivez'},{name: 'sixez'}]

// const combined = (array) =>{
// array.map(bar=>{
//     setInterval(function(){
    // return client.search({
    //     term: bar.name,
    //     location: 'Washington, DC'
    // }).then(response=>{
    //     let queryRes = response.jsonBody.businesses[0];
    //     let barObj = {
    //         name: queryRes.name,
    //         address: queryRes.location.address1,
    //         ZIP: queryRes.location.zip_code,
    //         phone: queryRes.display_phone
    //     }
    //     return console.log(barObj);
    //     // fs.appendFileSync('barDump.json',barObj)
    // })
    // .catch(err=>{
    //     console.log(err); 
    // });
//     },20000);
// })
// }

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
        // fs.appendFileSync('barDump.json',barObj)
    })
    .catch(err=>{
        console.log(err); 
    });
}

let sendQuery = util.promisify(query);

function delay(t, data){
    return new Promise(resolve =>{
        setTimeout(resolve.bind(null, data), t);
    });
};

const promises = testArr.map(async function(bar){
    await sendQuery(bar).then(delay.bind(null,20000));
});

Promise.all(promises).then(()=>{

}).catch(err=>{
    console.log(err);
})


// testArr.reduce(function(p,bar){
//     return p.then(()=>{
//         return sendQuery
//     })
// })



function apiCall (bar) {
    client.search({
        term: bar.name,
        location: 'Washington, DC'
    })
}

function processResponse (response){
    let queryRes = response.jsonBody.businesses[0];
    let barObj = {
        name: queryRes.name,
        address: queryRes.location.address1,
        ZIP: queryRes.location.zip_code,
        phone: queryRes.display_phone
    }
    console.log(barObj);
    fs.appendFileSync('barDump.json',barObj)
}


// const mapBars = (array) =>{
//     array.map(bar => {
//         limiter.schedule(apiCall(bar))
//         .then((result)=>{
//         processResponse(result);
//     })
//     .catch(err=>{
//         console.log(err);
//     })


//     })
// }



// let scrape = promisify(apiCall);

// function delay(t,data){
//     return new Promise(resolve =>{
//         setTimeout(resolve.bind(null,data),t);
//     });
// }

// function scrapeAll (array){
//     let index=0;
//     function next () {
//         if (index<array.length) {
//             return scrape(array[index++]).then(function () {
//                 return delay(100).then(next)
//             });
//         }
//     }
//     return Promise.resolve().then(next);
// }

// scrapeAll(testArr).then(()=>{

// }).catch(err=>{
//     console.log(err);
// })

const sleep = (duration) =>{
    return function(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve();
            },duration)
        })
    }
}

const testSleep = (array) =>{
    array.map(bar =>{
        client.search({
            term: bar.name,
            location: 'Washington, DC'
        })
        .then(response=>{
            processResponse(response)
        })
        .then(sleep(100000))
            // return apiCall();
        })//end of map
}

// testSleep(bars);
