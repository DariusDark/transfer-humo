import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg';

import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="container container-row">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logo-icon"
              src={logo}
              alt="Хумо МДО"
            />
          </Link>
        </div>
        <nav className="header__nav">
            <ul className="header__unsorted-list container-row">
                <li className="header__list">
                    <Link className="header__link" to="#app">App</Link>
                </li>
                <li className="header__list">
                    <Link className="header__link" to="#opportunities">Opportunities</Link>
                </li>
                <li className="header__list">
                    <Link className="header__link" to="#capabilities">Capabilities</Link>
                </li>
                <li className="header__list">
                    <Link className="header__link" to="#faq">FAQ</Link>
                </li>
            </ul>   
        </nav>
        <div className="header__phone">
            <a className="header__phone-link" href="tel:+992887775544">(+992)88-777-55-44</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
