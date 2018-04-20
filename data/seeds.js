const mongoose = require('mongoose');
const db = require ('../models');
mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_UR || "mongodb://localhost/5oClock",
);
const barList=require('./barList.json')

db.Bars
.remove({})
.then(()=>
 db.Bars.collection.insertMany(barList, { ordered: false })
)
.then(data=>{
    // console.log(data.insertedIds.length)
    process.exit(0)
})
.catch(err=>{
    console.log(err);
    process.exit(1)
});