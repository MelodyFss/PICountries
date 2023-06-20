const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getActivities = async (req, res) => {
  const { name } = req.query;
 if(name){
  try{
  let countries;
    if (name==="All") {
      countries = await Country.findAll({
        include: [
          {
            model: Activity,
            where: {
              id: {
                [Op.ne]: null, // Filtra por actividades que no sean nulas (es decir, todas las actividades)
              },
            },
          },
        ],
      });
    } else {
      countries = await Country.findAll({
        include: [
          {
            model: Activity,
            where: {
              name: name, // Filtra por el nombre de la actividad deseada
            },
          },
        ],
      });
    }
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

}
else{
  try {
    const allActivities = await Activity.findAll();
    if (!allActivities.length) res.status(200).send("No hay actividades aún");
    else res.status(200).json(allActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}
};
//   try {
//     const allActivities = await Activity.findAll();
//     if (!allActivities.length) res.status(200).send("No hay actividades aún");
//     else res.status(200).json(allActivities);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const postActivities = async (req, res) => {
  const { id, name, difficulty, duration, season, countries } = req.body;

  try {
    const activity = await Activity.create({
      id,
      name,
      difficulty,
      duration,
      season,
    });

    const activitiesToAdd = await Country.findAll({
      where: { name: countries },
    });
    await activity.addCountry(activitiesToAdd);

    res.status(200).send("Activity Created Successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getActivities,
  postActivities,
};
