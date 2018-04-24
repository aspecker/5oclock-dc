const mongoose = require('mongoose');
const db = require ('../models');
mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/5oClock",
);
const barList=require('./barList.json')
// console.log (barList[0], barList[70])
db.Bars
.remove({})
.then(barList=>(
 db.Bars.insertMany(barList, { ordered: false })
))
.then(data=>{
    // console.log(data.insertedIds.length)
    process.exit(0)
})
.catch(err=>{
    console.log(err);
    process.exit(1)
});
