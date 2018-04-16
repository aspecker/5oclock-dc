const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BarsSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    addressStreet:{
        type:String,
        required:true,
        unique:true        
    },
    addressCityZip:{
        type:String,
        required:true
    },
    neihborhood:{
        type:String,
        required: true
    },
    hours:{
        type: String,
        //consider a different datatype
        required:true
    },
    price:{
        type:String,
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