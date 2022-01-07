import React from "react";
import Circle from "../components/Circle";
import styles from "../styles/Contact.module.scss";
const Contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" top="-50%" right="80%" />
      <Circle backgroundColor="yellow" />
      <Circle backgroundColor="blue" bottom="-50%" left="80%"/>
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input type="text" className={styles.inputS} placeholder="UserName" />
        <input type="tel" className={styles.inputS} placeholder="Phone" />
        <input type="email" className={styles.inputL} placeholder="Email" />
        <input type="text" className={styles.inputL} placeholder="Subject" />
        <textarea
          className={styles.textarea}
          placeholder="Meassage....."
          rows={6}
        />
        <button className={styles.buttonF}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
