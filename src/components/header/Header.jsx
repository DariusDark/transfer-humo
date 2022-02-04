import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/header/logo.svg";

import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row header-row--gap">
          <div className="header__body flex-auto">
            <div className="header__logo">
              <Link className="link--padding" to="/">
                <img className="header__logo-icon" src={logo} alt="Хумо МДО" />
              </Link>
            </div>
          </div>
          <div className="header__body">
            <nav className="header__nav">
              <ul className="header__unsorted-list">
                <div className="row header-row--gap">
                  <li className="header__list">
                    <a className="header__link link--padding" href="#application">
                      Application
                    </a>
                  </li>
                  <li className="header__list">
                    <a className="header__link link--padding" href="#opportunities">
                      Opportunities
                    </a>
                  </li>
                  <li className="header__list">
                    <a className="header__link link--padding" href="#capabilities">
                      Capabilities
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
              <a className="header__phone-link link--padding" href="tel:+992887775544">
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
