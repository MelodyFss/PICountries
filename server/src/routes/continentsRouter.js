///importo router de express para poder usarlo
//creo la constante de mis routas y ejecuto router para usarlo
const { Router } = require("express");
const continentsRouter = Router();
const getContinentsHandler = require('../handlers/continentsHandler');



// Creo mis rutas
continentsRouter.get("/name", getContinentsHandler);



module.exports = continentsRouter;