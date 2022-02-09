import React from "react";
import styles from "./opportunities-item.module.css";

function OpportunitiesItem({ item: { id, title, descr } }) {
  return (
    <div className={styles["opportunities__body"]}>
      <div className={styles["opportunities__item-number"]}>
        <span className={styles["opportunities__item-number-text"]}>{id}</span>
      </div>
      <h5 className={styles["opportunities__item-title"]}>{title}</h5>
      <p className={styles["opportunities__item-description"]}>{descr}</p>
    </div>
  );
}

export default OpportunitiesItem;
