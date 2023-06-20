import React from "react";
import style from "../No Found/NoFound.module.css";
const NoFound = () => {
    return(
        <div className={style.back}>
        <h1 className={style.h1}>¿ Are You Lost ?  </h1>
        <h2 className={style.h2}>¿ Page Not Found ?  </h2>
        <h3 className={style.h3}>Go back to the home in the left!</h3>
        </div>
    )
}

export default NoFound;