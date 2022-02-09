import React from "react";
import styles from "./paragraph.module.css";

function Paragpraph({ node }) {
  if (typeof node === "string") {
    return <p className={styles["faq__answer-text"]}>{node}</p>;
  } else {
    return (
      <p className={styles["faq__answer-text"]}>
        {node.text.map((item, index) =>
          typeof item === "string" ? (
            item
          ) : (
            <a
              className={styles["faq__answer-link"]}
              key={index}
              href={`tel:${item.number}`}
            >
              {item.number}
            </a>
          )
        )}
      </p>
    );
  }
}

export default Paragpraph;
