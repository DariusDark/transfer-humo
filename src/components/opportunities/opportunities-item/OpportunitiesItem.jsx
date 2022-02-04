import React from "react";
import './opportunities-item.css'

function OpportunitiesItem({item : { id, title, descr }}) {
  return (
    <div className="opportunities__body">
      <div className="opportunities__number">
        <span className="opportunities__number-text">{id}</span>
      </div>
      <h5 className="opportunities__title">{title}</h5>
      <p className="opportunities__description">{descr}</p>
    </div>
  );
}

export default OpportunitiesItem;
