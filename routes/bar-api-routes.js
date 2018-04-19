const db = require ("../models");
module.exports= (app)=>{
    //all bars api
    app.get("/api/bars/data", function(req,res){
        db.Bars.find({})
        .then(function(dbBars){
            res.json(dbBars)
        }).catch(function(err){
            res.json(err)
        })
    })

    //one bar api
    app.get("/api/bars/:id", function(req,res){
        db.Bars.findOne({_id:req.params.id})
        .then(function(dbBars){
            res.json(dbBars)
        }).catch(function(err){
            res.json(err)
        })
    })

    //edit bar
    //expects to recieve an object from the client
    app.put("/api/bars/:id", function(req, res){
        db.Bars.findByIdAndUpdate(
            req.params.id,
            req.body
        )
    })

    //insert bar into db
    // expects to recieve an object from the client
    app.post("/api/bars/new", function(req,res){
        db.Bars.create(req.body)
        .then(function(dbBars){
            res.json(dbBars)
        }).catch(function(err){
            res.json(err)
        })
    })
}