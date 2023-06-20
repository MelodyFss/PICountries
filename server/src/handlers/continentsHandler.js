const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getContinentsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    let countries;
    if (name==="All") {
      countries = await Country.findAll({
        include: {
          model: Activity,
          through: { attributes: [] }, // Omitir las columnas adicionales de la tabla de asociación
        },
      });
    } else {
      countries = await Country.findAll({
        where: {
          continents: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: {
          model: Activity,
          through: { attributes: [] }, // Omitir las columnas adicionales de la tabla de asociación
        },
      });
    }
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getContinentsHandler;