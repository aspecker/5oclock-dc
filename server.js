const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require ("body-parser")
const path = requitr("path")
const app = express();
const db = require("./models");

//require the routes
// require("./routes/user-api-routes.js")(app);
//commented out users until i work through the passport mongoose more
require("./routes/link-api-routes.js")(app);

//express.user boilerplate
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


//mongoose boilerplate
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/5oClock"
);


const PORT = process.env.PORT || 3001;
app.listen(PORT);