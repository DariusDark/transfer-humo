import { memo } from "react";
import AdvantageItem from "./advantage-item/AdvantageItem";
import styles from "./advantage.module.css";
import photo1 from "../../assets/images/advantage/photo-1.png";
import photo2 from "../../assets/images/advantage/photo-2.png";
import photo3 from "../../assets/images/advantage/photo-3.png";
import photo4 from "../../assets/images/advantage/photo-4.png";
import { useTranslation } from "react-i18next";

const Advantage = memo(function Advantage() {
  const { t } = useTranslation();

  const item1 = t("advantage", { returnObjects: true }).item1;
  const item2 = t("advantage", { returnObjects: true }).item2;
  const item3 = t("advantage", { returnObjects: true }).item3;
  const item4 = t("advantage", { returnObjects: true }).item4;

  const items = [
    {
      id: 1,
      title: item1.title,
      text: item1.description,
      photo: photo1,
      itemImageClassName: "advantage__image--align-self-end",
    },
    {
      id: 2,
      title: item2.title,
      text: item2.description,
      photo: photo2,
      itemClassName: "advantage-row--reverse",
    },
    {
      id: 3,
      title: item3.title,
      text: item3.description,
      photo: photo3,
    },
    {
      id: 4,
      title: item4.title,
      text: item4.description,
      photo: photo4,
      itemClassName: "advantage-row--reverse",
      itemImageClassName: "advantage__image--align-self-end",
    },
  ];
  return (
    <section className={styles["advantage"]} id="advantage">
      <div className="container">
        <div className={`column ${styles["advantage-column"]}`}>
          {items.map((currItem) => (
            <AdvantageItem key={currItem.id} item={currItem} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Advantage;
