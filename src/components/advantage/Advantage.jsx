import React from "react";
import AdvantageItem from "./advantage-item/AdvantageItem";
import "./advantage.css";
import photo1 from "../../assets/images/advantage/photo-1.png";
import photo2 from "../../assets/images/advantage/photo-2.png";
import photo3 from "../../assets/images/advantage/photo-3.png";


function Advantage() {
  const items = [
    {
      id: 1,
      title: "Перевод по номеру телефона",
      text: "Скачать “Хумо Переводы”",
      photo: photo1,
    },
    {
      id: 2,
      title: "Перевод на карты «Корти Милли»",
      text: "Переводите деньги из России в Таджикистан и обратно",
      photo: photo2,
      classValue: "advantage-row--reverse",
    },
    {
      id: 3,
      title: "Платежи",
      text: "Оплачивайте мобильную связь, коммунальные услуги и многое другое",
      photo: photo3,
    },
  ];
  return (
    <section className="advantage" id="advantage">
      <div className="container">
        <div className="column">
          {items.map((currItem) => (
            <AdvantageItem key={currItem.id} item={currItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantage;
