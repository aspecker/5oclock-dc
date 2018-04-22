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
        db.Bars.findOne({
            _id:req.params.id})
        .then(function(dbBars){
            res.json(dbBars)
        }).catch(function(err){
            res.json(err)
        })
    })
    // search for bars by neighborhood
    app.get("/api/neighborhood/:neighborhood", function (req,res){
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
    app.get("/api/query/:neighborhood/:price/:cuisine", function(req,res){
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
    app.put("/api/bars/:id", function(req, res){
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
    app.post("/api/bars/new", function(req,res){
        db.Bars.create(req.body)
        .then(function(dbBars){
            res.json(dbBars)
        }).catch(function(err){
            res.json(err)
        })
    })
}