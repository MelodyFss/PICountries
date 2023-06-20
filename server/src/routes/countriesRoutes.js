///importo router de express para poder usarlo
//creo la constante de mis routas y ejecuto router para usarlo
const { Router } = require("express");
const countriesRouter = Router();
const getCountriesHandler = require('../handlers/countriesHandler');
const getApiData = require("../controllers/getApiData");

// Creo mis rutas
countriesRouter.get("/", async (req, res) => {
  const response = await getApiData();
  return res.status(200).json(response);
});

countriesRouter.get("/id/:id", getCountriesHandler);
countriesRouter.get("/name", getCountriesHandler);

module.exports = countriesRouter;