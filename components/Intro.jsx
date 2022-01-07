import Image from "next/image";
import React from "react";
import styles from "../styles/Intro.module.scss";
import Circle from "./Circle";
const Intro = () => {
  return (
    <div className={styles.intro}>
      <Circle backgroundColor="#b0ff49" top="-50%" left="-20%" />
      <Circle backgroundColor="#01c686" right="-20%" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AVOCADO</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segments and right people for messages based on their
          behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          className={styles.img}
          src="https://www.freepnglogos.com/uploads/avocado-png/avocado-aguacate-pencilart-arte-art-playgame-tumblr-sta-35.png"
          alt=""
          height="100%"
          width="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Intro;
