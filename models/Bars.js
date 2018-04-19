const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BarsSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type: String,
        required: true
    },
    ZIP :{
        type: Number,
        required: true
    },
    neighborhood:{
        type:String,
        required: true
    },
    hours:{
        type: String,
        //consider a different datatype
        required:true
    },
    price:{
        type:Number,
        required: true
    },
    cuisine:{
        type:String
    },
    image:{
        type:String
    },
    website:{
        type: String
    },
    phone:{
        type:String
    }
})
var Bars= mongoose.model("Bars", BarsSchema);

module.exports=Bars;