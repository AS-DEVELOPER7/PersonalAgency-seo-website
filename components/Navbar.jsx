import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">AVOCADO</Link>
      </div>
      <ul className={styles.list}>
        <li className={styles.listitem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.listitem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.listitem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.listitem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.listitem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul
        className={styles.menu}
        onClick={() => setOpen(!open)}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className={styles.menuitem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
