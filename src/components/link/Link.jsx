import React from "react";
import styles from "./link.module.css";

function Link({ classValue, source, children }) {
  return (
    <a className={`${styles["link"]} ${styles[classValue]}`} href={source}>
      {children}
    </a>
  );
}

export default Link;
