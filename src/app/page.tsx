import React from 'react';
import styles from './page.module.css';
import InteractiveTapestry from "@/components/InteractiveTapestry/InteractiveTapestry";
import SiteFooter from "@/components/SiteFooter/SiteFooter";

const Hero = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/image/background.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
        <div className={styles.textContainer}>
          <p className={styles.greetingText}>Xin chào!</p>
          <h2 className={styles.nameText}>PHUONG</h2>
          <p className={styles.subText}>Welcome to my tapestry!</p>
        </div>
      </div>
      <div className={styles.tapestryWrapper}>
        <InteractiveTapestry />
        <h2 className={styles.blueprintFooterTitle}>Keep unravelling!</h2>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Hero;