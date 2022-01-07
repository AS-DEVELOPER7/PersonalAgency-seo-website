import React from "react";
import styles from "../styles/Testimonials.module.scss";
import Circle from "../components/Circle";
import { users } from "../data";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <Circle
        className={styles.circle}
        backgroundColor="darkblue"
        top="-80%"
        left="0"
        right="0"
      />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <p className={styles.comment}>{user.comment}</p>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                src={user.avatar}
                alt=""
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="cover"
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobtitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
