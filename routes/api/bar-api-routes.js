const db = require ("../../models");
const router = require("express").Router

//all bars api
router.route("/bars/data").get(function(req,res){
    db.Bars.find({})
    .then(function(dbBars){
        res.json(dbBars)
    }).catch(function(err){
        res.json(err)
    })
})

//one bar api
router.route("/bars/:id").get(function(req,res){
    db.Bars.findOne({
        _id:req.params.id})
    .then(function(dbBars){
        res.json(dbBars)
    }).catch(function(err){
        res.json(err)
    })
})
// search for bars by neighborhood
router.route("/neighborhood/:neighborhood").get(function (req,res){
    db.Bars.find({
        neighborhood:req.params.neighborhood
    })
    .then(function(dbBars){
        res.json(dbBars)
    }).catch(function(err){
        res.json(err)
    })
})
// catch all query
//if a query filter is not selected, itm ust be defined as null
// ie api/query/georgetown/null/mexican/null
router.route("/query/:neighborhood/:price/:cuisine").get(function(req,res){
    //functional programming
    let{neighborhood, price, cuisine}= req.params
    const query =(neighborhoodQ,priceQ, cuisineQ)=>{
        let finalQuery={neighborhood:neighborhoodQ}
        if(priceQ!=="null"){
            finalQuery.price=priceQ
        }
        if(cuisineQ!=="null"){
            finalQuery.cuisine=cuisineQ
        }
        return finalQuery
    //this function sets up the query object
    //"/api/query/Georgetown/2/null"
    //ie {
        //neighborhoood: "Georgetown",
        //price: 2,
        //}

    };
    console.log(query(neighborhood,price,cuisine))
    db.Bars.find(query(neighborhood,price,cuisine))
    .then(function(dbBars){
        res.json(dbBars)
    }).catch(function(err){
        res.json(err)
    })

})

//edit bar
//expects to recieve an object from the client
router.route("/bars/:id").put(function(req, res){
    db.Bars.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err, done)=>{
            if(err){return res.status(500).send(err)}
            return res.send(done);
        }
    )
})

//insert bar into db
// expects to recieve an object from the client
router.route("/bars/new").post(function(req,res){
    db.Bars.create(req.body)
    .then(function(dbBars){
        res.json(dbBars)
    }).catch(function(err){
        res.json(err)
    })
})
module.exports =router