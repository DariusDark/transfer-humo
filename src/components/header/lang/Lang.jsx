import styles from "./lang.module.css";

function Lang() {
  return (
    <select className={styles["header__lang"]} name="lang" id="lang">
      <option value="ru">ru</option>
      <option value="en">en</option>
      <option value="tj">tj</option>
    </select>
  );
}

export default Lang;
