import React from "react";
import "./advantage-item.css";

function AdvantageItem({
  item: {
    photo,
    title,
    text,
    itemClassName = "",
    itemImageClassName = "",
  },
}) {
  return (
    <div className="advantage__body">
      <div className={`row advantage-row ${itemClassName}`}>
        <div className="advantage__body-container advantage__body-container--max-width">
          <div className="advantage__item-container">
            <h5 className="advantage__item-title">{title}</h5>
            <p className="advantage__item-text">{text}</p>
          </div>
        </div>
        <div className="advantage__body-container advantage__body-container--justify-center">
          <div className="advantage__body-image">
            <img
              className={`advantage__image ${itemImageClassName}`}
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
