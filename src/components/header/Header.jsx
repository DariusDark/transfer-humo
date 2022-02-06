import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/header/logo.svg";

import "./header.css";

function Header() {
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      headerRef.current.classList.toggle("header--sticky", this.scrollY > 0);
    });
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="row header-row--gap">
          <div className="header__body flex-auto">
            <div className="header__logo">
              <a className="link--padding" href="#root">
                <img className="header__logo-icon" src={logo} alt="Хумо МДО" />
              </a>
            </div>
          </div>
          <div className="header__body">
            <nav className="header__nav">
              <ul className="header__unsorted-list">
                <div className="row header-row--gap">
                  <li className="header__list">
                    <a
                      className="header__link link--padding"
                      href="#application"
                    >
                      Application
                    </a>
                  </li>
                  <li className="header__list">
                    <a
                      className="header__link link--padding"
                      href="#opportunities"
                    >
                      Opportunities
                    </a>
                  </li>
                  <li className="header__list">
                    <a
                      className="header__link link--padding"
                      href="#advantage"
                    >
                      Advantage
                    </a>
                  </li>
                  <li className="header__list">
                    <a
                      className="header__link link--padding"
                      href="#faq"
                      title="Frequently Asked Questions"
                    >
                      FAQ
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
        </div>
      </div>
    </header>
  );
}

export default Header;
