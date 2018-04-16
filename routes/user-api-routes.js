// no part of this is currently being used.
// it is the first iteration of boilerplate for a future feature
// it will likely neeed to be changed in order to work properly

const db =require("../models");
module.exports = (app)=>{

    //current user Data
    app.get("/api/user/current", (req,res)=>{
        if(!req.user){
            res.json({})
        }else {
            db.User.findOne({_id:req.user.id})
        }
    }).then((dbUser)=>{
        res.json(
            {id: dbUser._id,
            username: dbUser.username,
            email: dbUser.email,
            owner:dbUser.owner
            })
    }).catch((err)=>{
        res.json(err)
    });
    
    //user login
    app.post("/api/user/login", passport.authenticate("local"), (req,res)=>{
        // change the ("/home") route here
        res.json("/home")

    })

    //User Signup
    app.post("/api/user/signup", (req,res)=>{
        db.User.create(req.body)
        .then((dbUser)=>{
            console.log(dbUser)
            res.redirect(307, "api/user/login")
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