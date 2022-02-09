import { useState } from "react";
import "./faq-item.css";
import Paragraph from './paragraph/Paragpraph'

function FaqItem({ item: { question, answer } }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq__body${isOpen ? " faq__body--active" : ""}`}>
      <div className={`faq__question`} onClick={handleClick}>
        <h3 className="faq__question-title">{question}</h3>
        <div
          className={`faq__question-arrow${
            isOpen ? " faq__question-arrow--active" : ""
          }`}
        ></div>
      </div>
      <div className={`faq__answer${isOpen ? " faq__answer--active" : ""}`}>
        {answer.map((node, index) =>  <Paragraph key={index} node={node} />)}
      </div>
    </div>
  );
}

export default FaqItem;
