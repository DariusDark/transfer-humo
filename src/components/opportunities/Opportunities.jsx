import React from "react";
import './opportunities.css';
import OpportunitiesItem from "./opportunities-item/OpportunitiesItem";

function Opportunities() {
  const items = [
    {
      id: "1",
      title: "Отправляйте деньги",
      descr: "Денежные переводы родным и близким",
    },
    {
      id: "2",
      title: "Оплачивайте услуги",
      descr:
        "Оплачивайте счета за коммунальные услуги, интернет и многое другое",
    },
    {
      id: "3",
      title: "Следите за крусом",
      descr: "Следите за курсом валюты 24/7",
    },
  ];

  return (
    <section className="opportunities" id="opportunities">
      <div className="container-md">
        <div className="row opportunities-row">
          {items.map((currItem) => (
            <OpportunitiesItem key={currItem.id} item={currItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Opportunities;
