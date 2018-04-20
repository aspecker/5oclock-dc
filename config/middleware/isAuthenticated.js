module.exports = ()=>{  
  return(req, res, next) =>{
    if (req.isAuthenticated()) {
      return next();
    };

    if(req.accepts('json')){
      res.status(403).json ({ 
        Message:" you must be logged in"
      });
    }else{
      res.status(403).render ('forbidden')
    };
  };
};
