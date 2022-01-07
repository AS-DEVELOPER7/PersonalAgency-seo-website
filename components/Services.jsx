import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Services.module.scss";
const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What Can We Do?</h1>
      <h1 className={styles.subtitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src="https://media.istockphoto.com/videos/slices-of-the-delicious-fresh-peach-are-bouncing-on-the-white-video-id1272837445"
                    autoPlay
                    loop
                    muted
                    className={styles.video}
                  />
                ) : (
                  <Image
                    alt=""
                    src={`/img/${service.photo}`}
                    width="100%"
                    height="100%"
                    objetFit="cover"
                    layout="responsive"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
