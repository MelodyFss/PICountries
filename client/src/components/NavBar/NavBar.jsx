import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';
import myImagehome from '../assets/house.gif';
import myImageactivity from '../assets/plane.gif';

const NavBar = () => {
    return (
        <div className={styles.sidenav} >
            <NavLink to="/home">
            <img src={myImagehome} alt="" className={styles.image} />
            </NavLink>
            <NavLink to="/form">
            <img src={myImageactivity} alt="" className={styles.image} />
            </NavLink>
        </div>
    )
}

export default NavBar;