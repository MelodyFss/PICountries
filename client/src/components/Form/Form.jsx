import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../redux/actions";
import { validate } from "./validation";
import axios from "axios";
import styles from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [formComplete, setFormComplete] = useState(false);

  const allCountries = useSelector((state) => state.AllCountries).sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const [formData, setFormData] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
  });

  useEffect(() => {
    const checkFormComplete = () => {
      if (
        !formData.name ||
        !formData.difficulty ||
        !formData.duration ||
        !formData.season ||
        !formData.countries.length
      ) {
        setFormComplete(false);
      } else {
        setFormComplete(true);
      }
    };
    checkFormComplete();
  }, [formData]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setErrors(validate({
      ...formData,
      [property]: value
    }))
    setFormData({
      ...formData,
      [property]: value
    });
    console.log(formData)
    console.log(errors)
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setErrors(validate({ ...formData, countries: selectedCountry }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      countries: [...prevFormData.countries, selectedCountry],
    }));
    console.log(formData)
    console.log(errors)
  };

  const clearForm = () => {
    console.log(formData)
    setFormComplete(false);
    setFormData({
      name: "",
      difficulty: 0,
      duration: 0,
      season: "",
      countries: [],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formComplete) {
      const response = await axios.post("http://localhost:3001/activities", formData);
      alert(response.data);
      clearForm();
    }
  };

  return (
    <div className={styles.containForm}>
    <form className={styles.registrationForm} onSubmit={handleSubmit}>
      <div>
        <h2 className={styles.formTitle}>Register Your Activity</h2>
        <div>
          <label className={styles.formLabel}>Name</label>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            placeholder="Nombre de la Actividad"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.formError}>{errors.name}</span>}
        </div>

        <div>
          <label className={styles.formLabel}>Difficulty</label>
          <select
            className={styles.formSelect}
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="" hidden>
              Difficulty
            </option>
            <option value="1">1-Easy</option>
            <option value="2">2-Moderate</option>
            <option value="3">3-Intermediate</option>
            <option value="4">4-Difficult</option>
            <option value="5">5-Very difficult</option>
          </select>
          {errors.difficulty && (
            <span className={styles.formError}>{errors.difficulty}</span>
          )}
        </div>

        <div>
          <label className={styles.formLabel}>Minutes</label>
          <select
            className={styles.formSelect}
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          >
            <option value="" hidden>
              Select minutes
            </option>
            {(() => {
              const options = [];
              for (let i = 1; i <= 60; i++) {
                options.push(<option key={i} value={i}>{i}</option>);
              }
              return options;
            })()}
          </select>
          {errors.duration && <span className={styles.formError}>{errors.duration}</span>}
        </div>

        <div>
          <label className={styles.formLabel}>Season</label>
          <select
            className={styles.formSelect}
            name="season"
            value={formData.season}
            onChange={handleChange}
          >
            <option value="" hidden>
              Season
            </option>
            <option value="Spring">Spring</option>
            <option value="verano">verano</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
          {errors.season && <span className={styles.formError}>{errors.season}</span>}
        </div>

        <div>
          <label className={styles.formLabel}>Countries</label>
          <select
            className={styles.formSelect}
            name="countries"
            value=""
            onChange={handleCountryChange}
          >
            <option value="" hidden>
              Select a country
            </option>
            {allCountries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.countries && (
            <span className={styles.formError}>{errors.countries}</span>
          )}
        </div>

        <div className={styles.formLabel1}>
          Selected Countries:
          {formData.countries.map((country) => (
            <span key={country} className={styles.selectedCountry}>
              {country}
            </span>
          ))}
        </div>
        <div>
          <button
            className={styles.formButton}
            type="submit"
            disabled={!formComplete}
          >
            Create Activity
          </button>
          <button className={styles.formButton} type="button" onClick={clearForm}>
            Clear All
          </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default Form;