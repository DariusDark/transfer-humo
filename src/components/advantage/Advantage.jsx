import React from "react";
import AdvantageItem from "./advantage-item/AdvantageItem";
import "./advantage.css";
import photo1 from "../../assets/images/advantage/photo-1.png";
import photo2 from "../../assets/images/advantage/photo-2.png";
import photo3 from "../../assets/images/advantage/photo-3.png";
import photo4 from "../../assets/images/advantage/photo-4.png";

function Advantage() {
  const items = [
    {
      id: 1,
      title: "Перевод по номеру телефона",
      text: "Отправляйте деньги родным, даже если у них нет карты",
      photo: photo1,
      itemImageClassName: "advantage__image--align-self-end",
    },
    {
      id: 2,
      title: "Перевод на карты «Корти Милли»",
      text: "Переводите деньги из России в Таджикистан и обратно",
      photo: photo2,
      itemClassName: "advantage-row--reverse",
    },
    {
      id: 3,
      title: "Платежи",
      text: "Оплачивайте мобильную связь, коммунальные услуги и многое другое",
      photo: photo3,
    },
    {
      id: 4,
      title: "Карты",
      text: "Прикрепляйте карты (Visa, Mastercard или «Мир» выпущенные в России)",
      photo: photo4,
      itemClassName: "advantage-row--reverse",
      itemImageClassName: "advantage__image--align-self-end",
    },
  ];
  return (
    <section className="advantage" id="advantage">
      <div className="container">
        <div className="column advantage-column">
          {items.map((currItem) => (
            <AdvantageItem key={currItem.id} item={currItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantage;
