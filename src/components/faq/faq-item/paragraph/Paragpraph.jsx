import React from "react";
import './paragraph.css';

function Paragpraph({ node }) {
  if (typeof node === "string") {
    return <p className="faq__answer-text">{node}</p>;
  } else {
    return (
      <p className="faq__answer-text">
        {node.text.map((item, index) =>
          typeof item === "string" ? (
            item
          ) : (
            <a className="faq__answer-link" key={index} href={`tel:${item.number}`}>
              {item.number}
            </a>
          )
        )}
      </p>
    );
  }
}

export default Paragpraph;
