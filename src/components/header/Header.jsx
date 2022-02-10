import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/header/logo.svg";
import Switcher from "./switcher/Switcher";

import styles from "./header.module.css";

function Header({ handleClick, currTheme }) {
  const headerRef = useRef(null);
  const anchorRef = useRef(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    isButtonClicked
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isButtonClicked]);

  const closeModalScreen = () => {
    setIsButtonClicked(false);
  };
  useEffect(() => {
    window.innerWidth <= 990 ? setShowButton(true) : setShowButton(false);

    window.addEventListener("resize", function () {
      if (window.innerWidth <= 990) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
    window.addEventListener("scroll", function () {
      headerRef.current.classList.toggle(
        styles["header--sticky"],
        this.scrollY > 0
      );
      anchorRef.current.classList.toggle(
        styles["anchor--active"],
        this.scrollY > 250
      );
    });
  }, []);
  return (
    <header className={styles["header"]} ref={headerRef}>
      <a className={styles["anchor"]} href="#root" ref={anchorRef}>
        <i className={`${styles["anchor__arrow"]} fas fa-arrow-up`}></i>
      </a>
      <div className="container">
        <div className="row">
          <div className={`${styles["header__body"]} ${styles["flex-auto"]}`}>
            <div className={`${styles["header__logo"]}`}>
              <a className="header__logo-link" href="#root">
                <img className="header__logo-icon" src={logo} alt="Хумо МДО" />
              </a>
            </div>
          </div>
          {showButton ? (
            <div className={styles["header__body"]}>
              <Switcher currTheme={currTheme} handleClick={handleClick} />
              <button
                className={`${styles["header__menu-icon"]} ${
                  isButtonClicked ? "fas fa-times" : "fas fa-bars"
                }`}
                onClick={() => setIsButtonClicked(!isButtonClicked)}
              ></button>
              <nav
                className={`${styles["header__menu-nav"]} ${
                  isButtonClicked ? styles["header__menu-nav--active"] : ""
                }`}
                onClick={closeModalScreen}
              >
                <ul className="header__menu-unsorted-list">
                  <div className={`column ${styles["menu-column"]}`}>
                    <li className="header__menu-list">
                      <a
                        className={`${styles["header__link"]} ${styles["header__menu-link"]}`}
                        href="#application"
                        onClick={closeModalScreen}
                      >
                        Приложение
                      </a>
                    </li>
                    <li className="header__menu-list">
                      <a
                        className={`${styles["header__link"]} ${styles["header__menu-link"]}`}
                        href="#opportunities"
                        onClick={closeModalScreen}
                      >
                        Возможности
                      </a>
                    </li>
                    <li className="header__menu-list">
                      <a
                        className={`${styles["header__link"]} ${styles["header__menu-link"]}`}
                        href="#advantage"
                        onClick={closeModalScreen}
                      >
                        Преимущества
                      </a>
                    </li>
                    <li className="header__menu-list">
                      <a
                        className={`${styles["header__link"]} ${styles["header__menu-link"]}`}
                        href="#faq"
                        onClick={closeModalScreen}
                      >
                        Вопросы и Ответы
                      </a>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
          ) : (
            <>
              <div className={`${styles["header__body"]}`}>
                <nav className="header__nav">
                  <ul className="header__unsorted-list">
                    <div className="row">
                      <li className="header__list">
                        <a
                          className={styles["header__link"]}
                          href="#application"
                        >
                          Приложение
                        </a>
                      </li>
                      <li className="header__list">
                        <a
                          className={styles["header__link"]}
                          href="#opportunities"
                        >
                          Возможности
                        </a>
                      </li>
                      <li className="header__list">
                        <a className={styles["header__link"]} href="#advantage">
                          Преимущество
                        </a>
                      </li>
                      <li className="header__list">
                        <a
                          className={styles["header__link"]}
                          href="#faq"
                          title="Frequently Asked Questions"
                        >
                          Вопросы и Ответы
                        </a>
                      </li>
                    </div>
                  </ul>
                </nav>
              </div>
              <div
                className={`${styles["header__body"]} ${styles["flex-auto"]}`}
              >
                <Switcher currTheme={currTheme} handleClick={handleClick} />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
