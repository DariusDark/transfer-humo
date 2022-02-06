import React from "react";
import "./footer.css";
import TelegramIcon from '../../assets/images/footer/icon-1.svg';
import FacebookIcon from '../../assets/images/footer/icon-2.svg';
import VkontakteIcon from '../../assets/images/footer/icon-3.svg';
import InstagramIcon from '../../assets/images/footer/icon-4.svg';

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="row footer-row">
            <div className="footer__body">
              <h6 className="footer__title">О нас</h6>
              <p className="footer__description">
                Прогрессивная и одна из лидирующих микрофинансовых организаций в
                Таджикистане, предоставляющая банковские услуги более 100
                тысячам клиентов.
              </p>
              <div className="footer__address">
                <p className="footer__address-text">
                  734061, г. Душанбе, ул. Н. Карабаева, 148/1.
                </p>
              </div>
            </div>
            <div className="footer__body footer__body--self-end">
              <h6 className="footer__title">Мы в соц-сетях</h6>
              <div className="footer__icons">
                <a className="footer__icon-link" href="https://t.me/bankhumo">
                  <img className="footer__icon" src={TelegramIcon} alt="Telegram" />
                </a>
                <a
                  className="footer__icon-link"
                  href="https://ru-ru.facebook.com/mdohumo"
                >
                  <img className="footer__icon" src={FacebookIcon} alt="Facebook" />
                </a>
                <a className="footer__icon-link" href="https://vk.com/humo_tj">
                  <img className="footer__icon" src={VkontakteIcon} alt="Vkontakte" />
                </a>
                <a
                  className="footer__icon-link"
                  href="https://www.instagram.com/humo.tj"
                >
                  <img className="footer__icon" src={InstagramIcon} alt="Instagram" />
                </a>
              </div>
              <a
                className="footer__address-link"
                href={`tel:(+992)88-777-55-44`}
              >
                (+992)88-777-55-44
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="row footer-row">
            <div className="footer__body footer__body--align-center">
              <div className="footer__date">
                <span className="footer__date-text">
                  {`© ${currentDate} ЗАО МДО «Хумо»`}
                </span>
              </div>
            </div>
            <div className="footer__body footer__body--self-end footer__body--align-center">
              <div className="footer__copyright">
                <span className="footer__copyright-text">
                  All rights reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
