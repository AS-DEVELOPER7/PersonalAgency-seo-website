import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AVOCADO CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            WORK WITH US
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          45 ADAM STREET,
          <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@LAMA.DEV
          <br /> 111_438_5244
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 LAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
