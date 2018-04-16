// server for submission form
//require dependancies
const express = require('express');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = 3000;

const db = require('./models');

// setup express
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/happyhourdb')

app.post('/submit', (req,res)=>{
    db.Bar.create(req.body)
    .then((dbBar)=>{
        res.json(dbBar)
    })
    .catch((err)=>{
        res.json(err);
    })
})
app.get('/bars',(req,res)=>{
    db.Bar.find({})
    .then(dbBar=>{
        res.json(dbBar);
    })
})
app.listen(PORT, function() {
    console.log(`App running on ${PORT}.`);
})

