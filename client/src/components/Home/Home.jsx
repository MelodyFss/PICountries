import React from "react";
import Cards from "../Cards/Cards";
import styles from "./Home.module.css";

const Home = () => {


    return(
        <div className={styles.cardContainer} >
        <Cards />
        </div>
    )
}

export default Home;