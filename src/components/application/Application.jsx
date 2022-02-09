import { memo } from "react";
import Link from "../link/Link";
import iphone from "../../assets/images/application/iphone-application.png";

import styles from "./application.module.css";

const Application = memo(function Application() {
  return (
    <section className={styles["application"]} id="application">
      <div className="container">
        <div className={`row ${styles["application-row"]}`}>
          <div className={styles["application__body"]}>
            <div className={styles["application__body-item"]}>
              <h1 className={styles["application__title"]}>Хумо Переводы</h1>
              <p className={styles["application__description"]}>
                Оплачивайте мобильную связь, интернет, коммунальные услуги и
                многое другое. Отправляйте деньги родным на карты “Корти Милли”
              </p>
              <div className={styles["application__links"]}>
                <Link
                  classValue={`link--secondary`}
                  source="https://play.google.com/store/apps/details?id=tj.humo.transfer"
                >
                  <i
                    className={`${styles["application__icon"]} fab fa-google-play`}
                  ></i>
                  Скачать для Android
                </Link>
                <Link
                  classValue={`link--secondary`}
                  source="https://apps.apple.com/ru/app//id1497473277"
                >
                  <i
                    className={`${styles["application__icon"]} fab fa-apple`}
                  ></i>
                  Скачать для iOS
                </Link>
                <Link
                  classValue={`link--secondary`}
                  source="/static/media/205132.f40fee3f.apk"
                >
                  <i
                    className={`${styles["application__icon"]} far fa-file`}
                  ></i>
                  Android - APK
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["application__body"]}>
            <div className={styles["application__image-container"]}>
              <img
                className={styles["application__image"]}
                src={iphone}
                alt="Iphone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Application;
