const { Router } = require('express');

const countriesRouter = require("./countriesRoutes")
const activitiesRouter = require("./activitiesRoutes");
const continentsRouter = require('./continentsRouter');

const router = Router();

// Configurar los routers
router.use("/countries", countriesRouter); 

router.use("/activities", activitiesRouter);

router.use("/continents", continentsRouter)


module.exports = router;
