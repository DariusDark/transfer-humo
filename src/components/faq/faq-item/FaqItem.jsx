import { useState } from "react";
import styles from "./faq-item.module.css";
import Paragraph from "./paragraph/Paragpraph";
import ReactGA from "react-ga4";

function FaqItem({ item: { question, answer } }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles["faq__body"]} ${
        isOpen ? styles["faq__body--active"] : ""
      }`}
      onClick={() => {
        ReactGA.event({
          category: "question-spoiler",
          action: "question_spoiler",
        });
        handleClick();
      }}
     >
      <div className={styles["faq__question"]} onClick={handleClick}>
        <h3 className={styles["faq__question-title"]}>{question}</h3>
        <div
          className={`${styles["faq__question-arrow"]} 
          ${isOpen ? styles["faq__question-arrow--active"] : ""}`}
        ></div>
      </div>
      <div
        className={`${styles["faq__answer"]} ${
          isOpen ? styles["faq__answer--active"] : ""
        }`}
      >
        {answer.map((node, index) => (
          <Paragraph key={index} node={node} />
        ))}
      </div>
    </div>
  );
}

export default FaqItem;
