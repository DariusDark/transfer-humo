import React from "react";
import './opportunities-item.css'

function OpportunitiesItem({item : { id, title, descr }}) {
  return (
    <div className="opportunities__body">
      <div className="opportunities__item-number">
        <span className="opportunities__item-number-text">{id}</span>
      </div>
      <h5 className="opportunities__item-title">{title}</h5>
      <p className="opportunities__item-description">{descr}</p>
    </div>
  );
}

export default OpportunitiesItem;
