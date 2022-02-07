import React from "react";
import "./switcher.css";
import sun from '../../../assets/images/header/sun.svg';
import moon from '../../../assets/images/header/moon.svg';
function Switcher({ currTheme, handleClick }) {
  return (
    <div className="header__button-container">
      <div className="header__button-toggle">
        <input
          className={`header__input-toggle ${
            currTheme === "light"
              ? "header__input-toggle--light"
              : "header__input-toggle--dark"
          }`}
          id="inputToggle"
          type="checkbox"
          onClick={handleClick}
        />
        <label className="header__label" htmlFor="inputToggle">
          <img className="header__label-moon switcher-icon" alt="moon" src={moon} />
          <img className="header__label-sun switcher-icon" alt="sun" src={sun} />
        </label>
      </div>
    </div>
  );
}

export default Switcher;
