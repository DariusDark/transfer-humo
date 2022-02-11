import { memo } from "react";
import styles from "./opportunities.module.css";
import OpportunitiesItem from "./opportunities-item/OpportunitiesItem";
import { useTranslation } from "react-i18next";

const Opportunities = memo(function Opportunities() {
  const { t } = useTranslation();

  const titleText = t("opportunities", { returnObjects: true }).title;
  const item1 = t("opportunities", { returnObjects: true }).item1;
  const item2 = t("opportunities", { returnObjects: true }).item2;
  const item3 = t("opportunities", { returnObjects: true }).item3;

  const items = [
    {
      id: "1",
      title: item1.title,
      descr: item1.description,
    },
    {
      id: "2",
      title: item2.title,
      descr: item2.description,
    },
    {
      id: "3",
      title: item3.title,
      descr: item3.description,
    },
  ];

  return (
    <section className={styles["opportunities"]} id="opportunities">
      <div className="container">
        <h2 className={styles["opportunities__title"]}>{titleText}</h2>
        <div className={`row ${styles["opportunities-row"]}`}>
          {items.map((currItem) => (
            <OpportunitiesItem key={currItem.id} item={currItem} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Opportunities;
