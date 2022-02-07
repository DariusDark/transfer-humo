import React from "react";
import "./switcher.css";

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
        <label className="header__label" htmlFor="inputToggle"></label>
      </div>
    </div>
  );
}

export default Switcher;
