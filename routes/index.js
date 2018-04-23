const path = require("path");
const router = require("express").Router();
const apiRoutes=reuqire("./api");
router.use("/api", apiRoutes);
module.exports = router;