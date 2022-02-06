import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/header/logo.svg";

import "./header.css";

function Header() {
  const headerRef = useRef(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showButton, setShowButton] = useState(false);
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
      headerRef.current.classList.toggle("header--sticky", this.scrollY > 0);
    });
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <div className="container-lg">
        <div className="row">
          <div className="header__body flex-auto">
            <div className="header__logo">
              <a className="link--padding" href="#root">
                <img className="header__logo-icon" src={logo} alt="Хумо МДО" />
              </a>
            </div>
          </div>
          {showButton ? (
            <div className="header__body">
              <button
                className={`header__menu-icon ${
                  isButtonClicked ? "fas fa-times" : "fas fa-bars"
                }`}
                onClick={() => setIsButtonClicked(!isButtonClicked)}
              ></button>
              <nav
                className={`header__menu-nav ${
                  isButtonClicked ? "header__menu-nav--active" : ""
                }`}
                onClick={closeModalScreen}
              >
                <ul className="header__menu-unsorted-list">
                  <div className="column menu-column">
                    <li className="header__menu-list">
                      <a className="header__link header__menu-link" href="#application" onClick={closeModalScreen}>
                        Приложение
                      </a>
                    </li>
                    <li className="header__menu-list">
                      <a className="header__link header__menu-link" href="#opportunities" onClick={closeModalScreen}>
                        Возможности
                      </a>
                    </li>
                    <li className="header__menu-list">
                      <a className="header__link header__menu-link" href="#advantage" onClick={closeModalScreen}>
                        Преимущества
                      </a>
                    </li>
                    <li className="header__menu-list">
                      <a className="header__link header__menu-link" href="#faq" onClick={closeModalScreen}>
                        Вопросы и Ответы
                      </a>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
          ) : (
            <>
              <div className="header__body">
                <nav className="header__nav">
                  <ul className="header__unsorted-list">
                    <div className="row header-row--gap">
                      <li className="header__list">
                        <a
                          className="header__link link--padding"
                          href="#application"
                        >
                          Приложение
                        </a>
                      </li>
                      <li className="header__list">
                        <a
                          className="header__link link--padding"
                          href="#opportunities"
                        >
                          Возможности
                        </a>
                      </li>
                      <li className="header__list">
                        <a
                          className="header__link link--padding"
                          href="#advantage"
                        >
                          Преимущество
                        </a>
                      </li>
                      <li className="header__list">
                        <a
                          className="header__link link--padding"
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
              <div className="header__body flex-auto">
                <div className="header__phone-number">
                  <a
                    className="header__phone-link link--padding"
                    href="tel:+992887775544"
                  >
                    (+992)88-777-55-44
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
