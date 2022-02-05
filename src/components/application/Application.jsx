import React from "react";
import Link from "../link/Link";
import iphone from "../../assets/images/application/iphone-application.png";
import IconApple from "../../assets/images/application/icon-apple.svg";
import IconPlayMarket from "../../assets/images/application/icon-play-market.svg";
import IconApk from "../../assets/images/application/icon-apk.svg";

import "./application.css";

function Application() {
  return (
    <section className="application" id="application">
      <div className="container">
        <div className="row application-row">
          <div className="application__body">
            <div className="application__body-item">
              <h1 className="application__title">Хумо Переводы</h1>
              <p className="application__description">
                Оплачивайте мобильную связь, интернет, коммунальные услуги и
                многое другое. Отправляйте деньги родным на карты “Корти Милли”
              </p>
              <div className="application__links">
                {" "}
                {/*можно сделать короче*/}
                <Link
                  classValue="link--secondary application__link application__link-andriod"
                  source="https://play.google.com/store/apps/details?id=tj.humo.transfer"
                >
                  <img
                    className="application__icon"
                    src={IconPlayMarket}
                    alt="Apple"
                  />{" "}
                  Скачать для Android
                </Link>
                <Link
                  classValue="link--secondary application__link application__link-ios"
                  source="https://apps.apple.com/ru/app//id1497473277"
                >
                  <img
                    className="application__icon"
                    src={IconApple}
                    alt="Apple"
                  />{" "}
                  Скачать для iOS
                </Link>
                <Link
                  classValue="link--secondary application__link application__link-andriod"
                  source="/static/media/205132.f40fee3f.apk"
                >
                  <img
                    className="application__icon"
                    src={IconApk}
                    alt="Apple"
                  />
                  Android - APK
                </Link>
              </div>
            </div>
          </div>
          <div className="application__body">
            <div className="application__image-container">
              <img className="application__image" src={iphone} alt="Iphone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
