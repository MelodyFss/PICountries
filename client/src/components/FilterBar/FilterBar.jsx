import React from "react";
import {
  filterByContinents,
  filterByActivities,
  orderByName,
  orderByPopulation,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../FilterBar/FilterBar.module.css";

const FilterBar = () => {
  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.AllActivities);

  const handleFilter = (event) => {
    const continents = event.target.value;
    dispatch(filterByContinents(continents));
  };

  const handleSelectChange = (event) => {
    const selectedActivity = event.target.value;
    dispatch(filterByActivities(selectedActivity));
  };

  const handleFhandleOrderByName = (event) => {
    const orderBy = event.target.value;
    console.log(orderBy);
    dispatch(orderByName(orderBy));
  };

  const handleFhandleOrderByPopulation = (event) => {
    const orderByN = event.target.value;
    console.log(orderByN);
    dispatch(orderByPopulation(orderByN));
  };

  return (
    <div className={styles.boxselects}>
      <div className={styles.box}>
        <select onChange={handleFhandleOrderByName}>
          <option value="" hidden>Order By Name</option>
          <option value="All">ALL</option>
          <option value="OrderAZ">Order A-Z </option>
          <option value="OrderZA">Order Z-A</option>
        </select>
      </div>

      <div className={styles.box}>
        <select onChange={handleSelectChange}>
          <option value="" hidden>
            Show By Activity
          </option>

          <option value="All">All</option>

          {Array.isArray(allActivities) &&
            allActivities.map((activity) => (
              <option key={activity.id} value={activity.name}>
                {activity.name}
              </option>
            ))}
        </select>
      </div>

      <div className={styles.box}>
        <select onChange={handleFilter}>
          <option value="" hidden>
            Show By Continent
          </option>
          <option value="All">All</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
        </select>
      </div>

      <div className={styles.box}>
        <select onChange={handleFhandleOrderByPopulation}>
          <option value="" hidden>
            Order By Population
          </option>
          <option value="All">ALL</option>
          <option value="Minortomajor">Order Minor To Major</option>
          <option value="MajortoMinor">Order Major To Minor</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
