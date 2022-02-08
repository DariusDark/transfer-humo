import { memo } from "react";
import Link from "../link/Link";
import iphone from "../../assets/images/application/iphone-application.png";

import "./application.css";

const Application = memo(function Application() {
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
                  <i className="application__icon fab fa-google-play"></i>
                  Скачать для Android
                </Link>
                <Link
                  classValue="link--secondary application__link application__link-ios"
                  source="https://apps.apple.com/ru/app//id1497473277"
                >
                  <i className="application__icon fab fa-apple"></i>
                  Скачать для iOS
                </Link>
                <Link
                  classValue="link--secondary application__link application__link-andriod"
                  source="/static/media/205132.f40fee3f.apk"
                >
                  <i className="application__icon far fa-file"></i>
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
});

export default Application;
