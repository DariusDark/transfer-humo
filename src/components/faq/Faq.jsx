import React from "react";
import FaqItem from "./faq-item/FaqItem";
import Link from "../link/Link";
import "./faq.css";

function Faq() {
  const faqItems = [
    {
      id: 1,
      question: "Что такое Хумо Переводы?",
      answer: [
        "Хумо переводы - это платформа, позволяющая пользователям переводить деньги с российских карт(VISA, MasterCard и МИР) на любые карты Корти Милли Таджикистана и обратно, делать переводы на популярные электронные кошельки:",
        "Хумо Онлайн, Мeгфон Life, Алиф Mobi, Яндекс деньги, DC Wallet, Qiwi и многие другие, оплачивать коммунальные услуги, погашать кредиты и многое другое.",
      ],
    },
    {
      id: 2,
      question: "Кто может пользоваться приложением?",
      answer: [
        "Любой клиент у которого есть карты Visa, MasterCard и МИР, выпущенные в Росии либо карта Корти Милли любого банка Таджикистана.",
      ],
    },
    {
      id: 3,
      question: "Как перевести денги на другую карту?",
      answer: [
        '1. Выберите на главном экране вариант "Перевести на карту".',
        'Выберите куда хотите перевести деньги: "В Таджикистан" или "В Россию". В поле Получателя введите номер карты и сумму.',
        "2. В новом окне введите данные своей карты и подтвердите операцию.",
      ],
    },
    {
      id: 4,
      question: "Как перевести деньги на счет Хумо Онлайн?",
      answer: [
        '1. Выберите на главном экране вариант "Перевести на счет". В поле получателя введите номер телефона, к которому прикреплен счет получателя и сумму(в рублях)',
        "2. В новом окне введите данные своей карты и подтвердите операцию.",
      ],
    },
    {
      id: 5,
      question: "Как привязать карту?",
      answer: [
        '1. Выберите раздел "Карты".',
        '2. Нажмите на кнопку "Добваить карту" и выберите какую карту хотите привязать. Российскую карту или Корти Милли',
        "3. Заполните данные карты и подтвердите 3D-Secure если это российская карта.",
        "4. Подождите пока данные карты проверяются.",
      ],
    },
    {
      id: 6,
      question: "Как оплачивать услуги онлайн?",
      answer: [
        '1. Нажмите на раздел "Платежи" и выберите нужную Вам категорию (Например, Мобильная связь).',
        "2. Выберите сервис(Например, Мегафон).",
        "3. Введите номер и сумму",
        "4. Введите данные своей карты и подтвердите операцию",
      ],
    },
    {
      id: 7,
      question: "Что такое CVV2/CVC2?",
      answer: [
        "CVV2 или CVC2 - это специальный код карты, который используется для подтверждения айтентификации. Обычно этот код написан на задней стороне карты. У карт Visa Electron и MasterCard Maestro иногда нет CVV2/CVC2 кода. Если у Вашей карты нет этого кода, Вам необходимо обратиться к своему банку и запросить код.",
      ],
    },
    {
      id: 8,
      question: "Какие лимиты при переводе и оплате услуг?",
      answer: [
        "Минимальная сумма перевода или оплаты составляет - 500 рублей, максимальная сумма - 50000 рублей.",
      ],
    },
    {
      id: 9,
      question: "Есть ли комиссия при переводе из России в Таджикистан?",
      answer: [
        "Комиссия за перевод денег из России в Таджикистан составляет 0.5% Также, комиссию могут брать другие банки, на карты которых вы будете отправлять деньги. Чтобы узнать подробнее о комиссиях других банков, напишите в поддержку.",
      ],
    },
    {
      id: 10,
      question: "Что делать, если деньги не дошли?",
      answer: [
        {
          text: [
            "Транзакция можеть быть еще не обработана. Если уже несколько часов так и не пополнился баланс оплаченной услуги, обратитесь к нам. Контакт центр:",
            { type: "tel", number: " (+992)88-777-55-44 " },
            "или",
            { type: "tel", number: " 544 " },
          ],
        },
      ],
    },
  ];
  return (
    <section className="faq" id="faq">
      <div className="container">
        <h3 className="faq__title">Вопросы и ответы</h3>
        <div className="faq__accordion">
          <div className="column faq-column">
            {faqItems.map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="faq__link">
          <Link classValue="link--secondary-orange" source="#application">Скачать “Хумо Переводы”</Link>
        </div>
      </div>
    </section>
  );
}

export default Faq;