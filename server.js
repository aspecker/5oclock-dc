const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require ("body-parser")
const path = requitr("path")
const app = express();
const db = require("./models");

//express.user boilerplate
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));

require("./routes/user-api-routes.js")(app);
require("./routes/link-api-routes.js")(app);

//mongoose boilerplate
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/5oClock",
  {
    useMongoClient: true
  }
);


app.get('/', (req, res) => {
  res.send("Hello World!");
});


const PORT = process.env.PORT || 3001;
app.listen(PORT);