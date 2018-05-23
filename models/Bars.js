const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BarsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  ZIP: {
    type: Number,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,

  },
  endTime: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cuisine: {
    type: String,
  },
  image: {
    type: String,
  },
  website: {
    type: String,
  },
  phone: {
    type: String,
  },
  menuLink: {
    type: String,
  },
});
const Bars = mongoose.model('Bars', BarsSchema);

module.exports = Bars;
