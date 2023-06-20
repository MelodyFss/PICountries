const axios = require("axios");

const { Country } = require("../db");

const getApiData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/countries");

    const array = response.data.map((country) => ({
      id: country.cca3,
      name: country.name.common,
      image: country.flags.png,
      continents: country.continents[0],
      capital: country.capital
        ? country.capital[0]
        : "El país no tiene capital",
      subregion: country.subregion
        ? country.subregion
        : "El país no tiene subregión",
      area: country.area,
      population: country.population,
    }));
    try {
      await Country.bulkCreate(array);
    } catch (error) {}
    //  return array;
  } catch (error) {
    console.error("Error al obtener los datos de la API:", error);
    throw error;
  }
};

module.exports = getApiData;

//   let array= [];
//     let countries = await axios.get("http://localhost:5000/countries");

//      countries.data.map((country) => {

//       array.push(
//        {
//         id: country.cca3,
//         name: country.name.common,
//         image: country.flags.png,
//         continents: country.continents[0],
//         capital: country.capital ? country.capital[0] : "El pais no tiene capital",
//         subregion: country.subregion ? country.subregion : "El pais no tiene subregion",
//         area: country.area,
//         population: country.population,
//       });

//     });
//     console.log(array);
//     return array;
//   };

// module.exports = getApiData;
