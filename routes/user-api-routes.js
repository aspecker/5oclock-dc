'use strict'
const db =require("../models");
const passport = require("../config/passport");

module.exports = (app)=>{
    const getCurrentUser =(req, res) =>{
        // I'm picking only the specific fields its OK for the audience to see publicly
        // never send the whole user object in the response, and only show things it's OK
        // for others to read (like ID, name, email address, etc.)
        const { id, username } = req.user;
        res.json({
          id, username
        });
      }
    //current user Data
    app.get("/api/user/current", (req,res)=>{
        if(!req.user){
            return res.status(401).json({"error": "you must be logged in"})
        }else {
            db.User.findOne({_id:req.user.id})
            .then((dbUser)=>{
                res.json(
                    {id: dbUser._id,
                    username: dbUser.username,
                    email: dbUser.email,
                    owner:dbUser.owner
                    })
            }).catch((err)=>{
                res.json(err)
        })
    }
    });
    
    //user login
    app.post("/api/user/login", passport.authenticate("local"), function (req,res) {
        console.log("login attepmt", req.body, req.user)
        if (!req.user) {
            return res.status(401).json({
              message: 'Invalid username or password.'
            })
          }
      
          getCurrentUser(req, res);
    })

    //User Signup
    app.post("/api/user/signup", (req,res)=>{
        console.log("signup attempt", req.body)
        db.User.create(req.body)
        .then((dbUser)=>{
            console.log("signup sucess", dbUser)
            res.redirect(307, "/api/user/login")
            // res.end()
        }).catch((err)=>{
            console.log(err)
            res.json(err)
        })
    })

    //user logout
    app.get("/logout",(req, res)=>{
        req.logout();
        res.redirect("/");
    })
}