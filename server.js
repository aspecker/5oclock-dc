const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require ("body-parser")
const path = require("path")
const morgan = require("morgan")
const app = express();
const db = require("./models");


//express.use boilerplate
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//require the routes
require("./config/passport.js")(app)
require("./routes/user-api-routes.js")(app);
require("./routes/bar-api-routes.js")(app);

//mongoose boilerplate
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/5oClock"
);


const PORT = process.env.PORT || 3001;
app.listen(PORT);