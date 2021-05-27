import styles from '@styles/main.module.css';
import { Fragment, useEffect } from 'react';
import { motion } from "framer-motion";

export const MoreInfo = () => {

  // useEffect(() => {
  //   threeD();
  // }, []);

  // function threeD() {
  //   const card = document.querySelector(".cardInfoJS");

  //   card.addEventListener("mousemove", (e) => {
  //     let xAxis = (window.innerWidth / 2 - e.pageX) / 14;
  //     let yAxis = (window.innerHeight / 2 - e.pageY) / 14;
  //     card.style.transform = `translateZ(-100px)`;
  //   });

  //   card.addEventListener("mouseenter", e => {
  //     card.style.transition = 'all 0.5s ease';
  //   })

  //   card.addEventListener("mouseleave", e => {
  //     card.style.transition = 'all 0.5s ease';
  //     card.style.transform = `translateZ(0px)`;
  //   })
  // }

  const cardAnimate = {
    translateZ: -100
  }

  return (
    <Fragment>
      <div className={`relative w-full mx-auto px-10 pt-5 sm:pt-40 pb-8 sm:pb-36 mt-5 ${styles.parallax}`}>
        <div className="w-full text-center">
          <h1 className="font-nunito text-3xl text-base-font">Know More</h1>
          <span className="font-poppins text-long-font">Far far away, behind the word mountains, far from the countries San Marino and <br />Malta</span>
        </div>
        <div className="mt-14 sm:mt-16 w-full sm:h-72 grid grid-cols-1 sm:grid-cols-4 gap-2.5-percent">
          <motion.div className="relative w-full h-72 sm:h-full flex flex-col shadow-md p-6 backdrop-blur" whileHover={cardAnimate}>
            <div className={styles.iconRounded}>
              <i className={`${styles.iconInfo} fas fa-sign`}></i>
            </div>
            <h6 className={styles.cardTitle}>Address</h6>
            <div className={styles.cardDetail}>
              <span>Telaga Jambu Housing B1/05, Depok, West Java 16511</span>
            </div>
          </motion.div>
          <motion.div className="relative w-full h-72 sm:h-full flex flex-col shadow-md p-6 backdrop-blur" whileHover={cardAnimate}>
            <div className={styles.iconRounded}>
              <i className={`${styles.iconInfo} fas fa-phone-alt`}></i>
            </div>
            <h6 className={styles.cardTitle}>Contact Number</h6>
            <div className={styles.cardDetail}>
              <span><a href="tel:+6287784625949" style={{ color: 'var(--primary-color)' }}>+62 877 8462 5949</a></span>
            </div>
          </motion.div>
          <motion.div className="relative w-full h-72 sm:h-full flex flex-col shadow-md p-6 backdrop-blur" whileHover={cardAnimate}>
            <div className={styles.iconRounded}>
              <i className={`${styles.iconInfo} fas fa-paper-plane`}></i>
            </div>
            <h6 className={styles.cardTitle}>Email Address</h6>
            <div className={styles.cardDetail}>
              <span><a href="mailto:ariq2901@gmail.com" style={{ color: 'var(--primary-color)' }}>ariq2901@gmail.com</a></span>
            </div>
          </motion.div>
          <motion.div className="relative w-full h-72 sm:h-full flex flex-col shadow-md p-6 backdrop-blur" whileHover={cardAnimate}>
            <div className={styles.iconRounded}>
              <i className={`${styles.iconInfo} fas fa-laptop-house`}></i>
            </div>
            <h6 className={styles.cardTitle}>Freelance</h6>
            <div className={styles.cardDetail}>
              <span><a href="https://www.fiverr.com/ariq2901" style={{ color: 'var(--primary-color)' }}>fiverr.com/ariq2901</a></span>
            </div>
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
}