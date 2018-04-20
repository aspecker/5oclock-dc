const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BarSchema = new Schema({
    name: {
        type: String, 
        unique: true
    },
    address: String,
    city: String,
    state: String,
    ZIP: Number,
    neighborhood: String,
    startTime: String,
    endTime: String,
    price: Number,
    phone: String,
    cuisine: String,
    image: String,
    description: String,
    menuLink: String
})

const Bar = mongoose.model('Bar',BarSchema);

module.exports = Bar;