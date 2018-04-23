const router= require("express").Router();
const barRoutes=require("./bar-api-routes");
router.use(barRoutes);
module.exports = router;