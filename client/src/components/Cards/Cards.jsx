import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getAllCountries } from "../redux/actions";
import Card from "../Card/Card";
import FilterBar from "../FilterBar/FilterBar";
import {SearchBar} from "../SearchBar/SearchBar";
import styles from './Cards.module.css';

const Cards =  () => {
  const dispatch = useDispatch();
  const allCountries =  useSelector(state => state.filteredCountries || state.AllCountries );
  const countriesPerPage = 30; // Cantidad de países por página
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getActivities());
  }, [dispatch]);


  const totalPages = Math.ceil(allCountries.length / countriesPerPage);

  const handlePrevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  // Cálculo de los índices de inicio y fin para la página actual
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <div className={styles.back}>
      <div>
        <SearchBar />
      </div>
      <div>
        <FilterBar />
      </div>
      <div className={styles.cardcontainer} >
      { currentCountries && currentCountries.map((country) => (
        <Card
          key={country.id}
          id={country.id}
          name={country.name}
          image={country.image}
          continents={country.continents}
        />
      ))}
      </div>

      <div className={styles.btnflex}>
        <button
          className={styles.btn}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={{ margin: "0.5rem" }}
        >
          ⇽
        </button>
        <div>
          <button className={styles.btn}>{currentPage}</button>
        </div>
        <button
          className={styles.btn}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ margin: "0.5rem" }}
        >
          ⇾
        </button>
      </div>
    </div>
  );
};

export default Cards;