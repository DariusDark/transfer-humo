import styles from "./lang.module.css";
import i18n from "../../../i18n";
import ReactGA from "react-ga4";

function Lang() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    ReactGA.event({
      category: "language",
      action: 'language_change',
    })
  };
  const handleInput = (event) => {
    changeLanguage(event.target.value);
  };
  return (
    <select
      className={styles["header__lang"]}
      onInput={handleInput}
      name="lang"
      id="lang"
    >
      <option value="ru">Ru</option>
      <option value="en">En</option>
    </select>
  );
}

export default Lang;
