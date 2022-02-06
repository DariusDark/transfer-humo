import { useState } from "react";
import './faq-item.css';

function FaqItem({ item: { question, answer } }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const generateElement = (node) => {
    if (typeof node === "string") {
      return <p className="faq__answer-text">{node}</p>;
    } else {
      return (
        <p className="faq__answer-text">
          {node.text.map((item) =>
            typeof item === "string" ? (
              item
            ) : (
              <a className="faq__answer-link" href={`tel:${item.number}`}>
                {item.number}
              </a>
            )
          )}
        </p>
      );
    }
  };

  return (
    <div className={`faq__body${isOpen ? ' faq__body--active' : ''}`}>
      <div className={`faq__question`} onClick={handleClick}>
        <h3 className="faq__question-title">{question}</h3>
        <div className={`faq__question-arrow${isOpen ? ' faq__question-arrow--active' : ''}`}></div>
      </div>
      <div className={`faq__answer${isOpen ? ' faq__answer--active' : ''}`}>
        {answer.map((node) => generateElement(node))}
      </div>
    </div>
  );
}

export default FaqItem;
