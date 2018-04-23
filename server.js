const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require ("body-parser")
const path = require("path")
const morgan = require("morgan")
const app = express();
const routes =require("./routes");
const db = require("./models");


//express.use boilerplate
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static("clinet/build"));
app.use(routes);

//require the routes
require("./config/passport.js")(app)
require("./routes/api/user-api-routes.sj")(app);
// require("./routes/bar-api-routes.js")(app);

//mongoose boilerplate
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/5oClock"
);


const PORT = process.env.PORT || 3001;
app.listen(PORT);