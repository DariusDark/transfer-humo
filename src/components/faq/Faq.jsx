import { memo } from "react";
import FaqItem from "./faq-item/FaqItem";
import Link from "../link/Link";
import styles from "./faq.module.css";
import { useTranslation } from "react-i18next";

const Faq = memo(function Faq() {
  const { t } = useTranslation();

  const faqTitle = t("faq", { returnObjects: true }).title;
  const item1 = t("faq", { returnObjects: true }).item1;
  const item2 = t("faq", { returnObjects: true }).item2;
  const item3 = t("faq", { returnObjects: true }).item3;
  const item4 = t("faq", { returnObjects: true }).item4;
  const item5 = t("faq", { returnObjects: true }).item5;
  const item6 = t("faq", { returnObjects: true }).item6;
  const item7 = t("faq", { returnObjects: true }).item7;
  const item8 = t("faq", { returnObjects: true }).item8;
  const item9 = t("faq", { returnObjects: true }).item9;
  const item10 = t("faq", { returnObjects: true }).item10;
  const faqItems = [
    {
      id: 1,
      question: item1.question,
      answer: [item1.answer.text1, item1.answer.text2],
    },
    {
      id: 2,
      question: item2.question,
      answer: [item2.answer],
    },
    {
      id: 3,
      question: item3.question,
      answer: [item3.answer.text1, item3.answer.text2, item3.answer.text3],
    },
    {
      id: 4,
      question: item4.question,
      answer: [item4.answer.text1, item4.answer.text2],
    },
    {
      id: 5,
      question: item5.question,
      answer: [
        item5.answer.text1,
        item5.answer.text2,
        item5.answer.text3,
        item5.answer.text4,
      ],
    },
    {
      id: 6,
      question: item6.question,
      answer: [
        item6.answer.text1,
        item6.answer.text2,
        item6.answer.text3,
        item6.answer.text4,
      ],
    },
    {
      id: 7,
      question: item7.question,
      answer: [item7.answer],
    },
    {
      id: 8,
      question: item8.question,
      answer: [item8.answer],
    },
    {
      id: 9,
      question: item9.question,
      answer: [item9.answer],
    },
    {
      id: 10,
      question: item10.question,
      answer: [
        {
          text: [
            item10.answer.text1,
            { type: "tel", number: " (+992)88-777-55-44 " },
            item10.answer.text2,
            { type: "tel", number: " 544 " },
          ],
        },
      ],
    },
  ];
  return (
    <section className={styles["faq"]} id="faq">
      <div className="container">
        <h3 className={styles["faq__title"]}>{faqTitle}</h3>
        <div className={styles["faq__accordion"]}>
          <div className={`column ${styles["faq-column"]}`}>
            {faqItems.map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className={styles["faq__link"]}>
          <Link classValue="link--secondary-orange" source="#application">
            Скачать “Хумо Переводы”
          </Link>
        </div>
      </div>
    </section>
  );
});

export default Faq;
