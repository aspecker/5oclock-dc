const passport = require("passport");
const cookieparser = require('cookie-parser');
const LocalStrategy = require("passport-local").Strategy;
const session =reqiure("express-session")
const db = require("../models");

module.exports = (app)=>{
  app.use(cookieparser())
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    name: 'sid',
    cookie:{
      httpOnly:true,
      maxAge: 20*60*1000
    }
  }));




    passport.use(new LocalStrategy({
      usernameField: "email"
    },
    (email, password, done) => {
      db.User.findOne({email: email})
      .then((dbUser) => {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        return done(null, dbUser);
      });
    }
  ));

  passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });

  passport.deserializeUser((userID, cb) => {
    db.User.findById(userID)
    .then(user=>{
      cb(null, user);
    })
    .catch((err)=>{
      cb(err)
    })
  });

  module.exports = passport;
}