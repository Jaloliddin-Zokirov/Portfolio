import React from "react";
import styles from "./Contact.module.scss";
import { useSelector } from "react-redux";

const Contact = () => {
  const { themeMode } = useSelector((state) => state.themeMode);

  return (
    <section className={`${themeMode ? styles.light : styles.contact}`}>
      <div className={styles.box}>
        <h2 className={styles.title}>
          Ask me a <span>question</span>
        </h2>
        <div className={styles.inpBox}>
          <div className={styles.left}>
            <input type="email" placeholder="Enter Email" />
            <input type="tel" placeholder="Enter Telephone number" />
            <input type="text" placeholder="Enter Telegram Username" />
          </div>
          <textarea
            className={styles.right}
            placeholder="Enter Question"
          ></textarea>
        </div>
        <button className={styles.btn}>submit</button>
      </div>
    </section>
  );
};

export default Contact;
