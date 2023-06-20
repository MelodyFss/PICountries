import React from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../redux/actions";
import styles from './LandingPage.module.css';
import { Link } from "react-router-dom";

const LandingPage = () => {
    
    const dispatch = useDispatch();
    dispatch(getCountries())

    return(
        <>
        <div className={styles.containerlandin}>
        <h1 className={styles.h1landing} >Welcome To Henry Countries </h1>
        <div className={styles.wrap} >
        <Link to={"/home"} >
        <button className={styles.buttonlanding} >See the Countries</button>
        </Link>
        </div>
        </div>
        </>
    )
}

export default LandingPage;