// dependancies used 
const axios = require('axios');
const fs = require('fs');
const util = require('util')
// 
const keys =  require('./apiKeys.js');
const bars = require('./newBars.json');
const barInfo = require('./barDump.json')


// API Keys - import and define
const {yelpID, yelpAPIKey, fourSqID, fourSqSecret, gMapsAPIKey,ypAPIKey} = keys;

// console.log(yelpID, yelpAPIKey, fourSqID, fourSqSecret, gMapsAPIKey, ypAPIkey)

const yelp = require('yelp-fusion');
const client = yelp.client(yelpAPIKey);

const testArr = [{name: 'J. Pauls'},{name: 'Old Glory BBQ'},{name: 'Pizzeria Paradiso'},{name: 'J. Pauls'},{name: 'Old Glory BBQ'},{name: 'Pizzeria Paradiso'},{name: 'J. Pauls'},{name: 'Old Glory BBQ'},{name: 'Pizzeria Paradiso'}]

const query =(bar,index,arrayLength)=> {
    return client.search({
        term: bar.name,
        location: 'Washington, DC'
    }).then(response=>{
        let queryRes = response.jsonBody.businesses[0];
        let barObj = {
            name: queryRes.name,
            address: queryRes.location.address1,
            ZIP: parseInt(queryRes.location.zip_code),
            phone: queryRes.display_phone,
            coords: queryRes.coordinates,
            image: queryRes.image_url
        }
        console.log(barObj);
        switch(index){
            case 1: 
                return fs.appendFileSync('./barDump.json',`[${JSON.stringify(barObj)},\n`);
            case arrayLength:
                return fs.appendFileSync('./barDump.json',`${JSON.stringify(barObj)}\n ]`);
            default:
                return fs.appendFileSync('./barDump.json',`${JSON.stringify(barObj)},\n`);
        }
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
                sendQuery(array[index++],index,array.length).catch(()=>{
                    clearInterval(timer);
                    reject();
                });
            } else {
                clearInterval(timer);
                resolve();
            }
        }, 1000);
    })
}

// queryAll(bars);


// client.search({
//     term: `Hank's Oyster Bar`,
//     location: 'Washington, DC'
// })
// .then(res =>{
//     console.log(res.jsonBody.businesses[0])
// })
// .catch(err=>{
//     console.log(err)
// })

function mergeLists (bars,barInfo){
    let newList = [];
    for (let i =0; i<bars.length;i++){
        let newBar = barInfo[i];
        let newObj = {
            ...bars[i], 
            address: newBar.address,
            ZIP: newBar.ZIP,
            phone: newBar.phone,
            coords: newBar.coords,
            image: newBar.image

        }
        newList.push(JSON.stringify(newObj));
    }
    fs.writeFile('barList.json',newList);
}


mergeLists(bars,barInfo);
