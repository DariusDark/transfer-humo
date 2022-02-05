import React from "react";
import "./advantage-item.css";

function AdvantageItem({ item: {photo, title, text, classValue = '' } }) {
  return (
    <div className="advantage__body">
      <div className={`row advantage-row ${classValue}`}>
        <div className="advantage__body-container">
          <h5 className="advantage__item-title">{title}</h5>
          <p className="advantage__item-text">{text}</p>
        </div>
        <div className="advantage__body-container">
          <div className="advantage__body-image">
            <img className="advantage__image" src={photo} alt="iPhone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvantageItem;
