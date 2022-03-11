import React from "react";
import styles from "./switcher.module.css";
import sun from "../../../assets/images/header/sun.svg";
import moon from "../../../assets/images/header/moon.svg";
function Switcher({ currTheme, handleClick }) {
  return (
    <div className={styles["header__button-container"]}>
      <div className={styles["header__button-toggle"]}
      onClick={() => window.dataLayer.push({ "event": "change_theme" })}>
        <input
          className={`${styles["header__input-toggle"]} ${
            currTheme === "light"
              ? styles["header__input-toggle--light"]
              : styles["header__input-toggle--dark"]
          }`}
          id="inputToggle"
          type="checkbox"
          onClick={handleClick}
        />
        <label className={styles["header__label"]} htmlFor="inputToggle">
          <img
            className={`${styles["header__label-moon"]} ${
              styles["switcher-icon"]
            } ${currTheme === "light" ? styles["switcher-icon--active"] : ""}`}
            alt="moon"
            src={moon}
          />
          <img
            className={`${styles["header__label-sun"]} ${
              styles["switcher-icon"]
            } ${currTheme === "dark" ? styles["switcher-icon--active"] : ""}`}
            alt="sun"
            src={sun}
          />
        </label>
      </div>
    </div>
  );
}

export default Switcher;
