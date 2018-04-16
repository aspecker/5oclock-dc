const db = require ("../models");
module.exports= (app)=>{
    //all bars api
    app.get("/api/bars", function(req,res){
        db.Bars.find({})
        .then(function(dbBars){
            res.json(dbBars)
        }).catch(function(err){
            res.json(err)
        })
    })

    //one bar api
    app.get("/api/bar/:id", function(req,res){
        db.Bars.findOne({_id:req.params.id})
        .then(function(dbBars){
            res.json(dbBars)
        }).catch(function(err){
            res.json(err)
        })
    })

    //insert bar into db
    app.post("/api/new/bar:id", function(req,res){
        db.Bars.create(req.body)
        .then(function(dbBars){
            res.json(dbBars)
        }).catch(function(err){
            res.json(err)
        })
    })
}