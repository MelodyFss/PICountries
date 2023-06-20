import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { getCountryDetail } from "../redux/actions";
import styles from "./Detail.module.css";

const Detail = () => {
  const{ id } = useParams();  
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.CountryDetail);

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

    return(
<div className={styles.container} >
<div className={styles.card}>
<div className={styles.cardinfo}>
  <div>
  <img className={styles.image} src={countryDetail.image} alt='' />
  </div>
  <div >
  <h1 className={styles.title}>ID: {countryDetail.id}</h1>
  <h1 className={styles.title}>Name: {countryDetail.name}</h1>
  <h1 className={styles.title}>Capital: {countryDetail.capital}</h1>
  <h1 className={styles.title}>Continent: {countryDetail.continents}</h1>
  {countryDetail.region && <h1 className={styles.title}>Region: {countryDetail.region}</h1>}
  {countryDetail.subregion && <h1 className={styles.title}>Subregion: {countryDetail.subregion}</h1>}
  {countryDetail.area && <h1 className={styles.title}>Area: {countryDetail.area} Kms</h1>}
  {countryDetail.population && <h1 className={styles.title}>Población: {countryDetail.population}</h1>}
</div>
</div>
</div>

  <div>
  <div className={styles.carddetail}>
    <div className={styles.cardinfodetail} >
    <div>
    <h1 className={styles.titledetail}>ACTIVITIES:</h1>
    {countryDetail.activities && countryDetail.activities.map(activity => (
      <div key={activity.id} >
        <h1 className={styles.titledetail}>{activity.name}</h1>
      </div>
      
    ))}
    </div>
    </div>
  </div>
  </div>
</div>
    )
}

export default Detail;