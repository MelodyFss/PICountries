import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <NavLink className={styles.NavLink} to={`/countries/${props.id}`}>
      <div className={styles.card}>
        <div className={styles.cardinfo}>
          <div>
            <img src={props.image} alt="" className={styles.image} />
            <p className={styles.title}>{props.continents}</p>
            <p className={styles.titlec}>{props.name}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
