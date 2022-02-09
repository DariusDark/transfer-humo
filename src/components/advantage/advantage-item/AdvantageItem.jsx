import React from "react";
import styles from "./advantage-item.module.css";

function AdvantageItem({
  item: { photo, title, text, itemClassName = "", itemImageClassName = "" },
}) {
  return (
    <div className={styles["advantage__body"]}>
      <div
        className={`row ${styles["advantage-row"]} ${styles[itemClassName]}`}
      >
        <div className={styles["advantage__body-container"]}>
          <div className={styles["advantage__item-container"]}>
            <h5 className={styles["advantage__item-title"]}>{title}</h5>
            <p className={styles["advantage__item-text"]}>{text}</p>
          </div>
        </div>
        <div
          className={`${styles["advantage__body-container"]} ${styles["advantage__body-container--justify-center"]}`}
        >
          <div className={styles["advantage__body-image"]}>
            <img
              className={`${styles["advantage__image"]} ${styles[itemImageClassName]}`}
              src={photo}
              alt="iPhone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvantageItem;
