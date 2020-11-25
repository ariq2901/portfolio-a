import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/main.module.css';
import { motion } from "framer-motion";

const Header = () => {

  const router = useRouter();

  const profileLogo = {
    hidden: {
      x: -100,
      scale: .8,
      opacity: 0
    },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        delay: .1,
        duration: .5
      }
    }
  };

  const navbar = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .6,
        delay: .3
      }
    }
  }

  const navLink = {
    scale: 1.05,
    transition: {
      duration: .2
    }
  }

  return (
    <Fragment>
      <nav>
        <div className={styles.container}>
          <div className={styles.navLine}>
            <motion.div className={styles.navProfile} initial="hidden" animate="visible" variants={profileLogo}>
              <Image src="/profile-img/ariq.png" width="50" height="50"/>
              <div className={styles.nameLogo}>
                <span className={styles.firstName}>Ariq</span>
                <span className={styles.nextName}>Jusuf</span>
              </div>
            </motion.div>
            <motion.ul className={styles.navLink} initial="hidden" animate="visible" variants={navbar}>
              <motion.li whileHover={navLink} className={router.pathname == "/" ? `${styles.active} ${styles.linkDrop}` : `${styles.linkDrop}`}>
                <Link href="/">About Me</Link>
                <i className={`fas fa-chevron-down ${styles.linkDrop__icon}`}></i>
              </motion.li>
              <motion.li whileHover={navLink}>Resume</motion.li>
              <motion.li whileHover={navLink}>Potfolio</motion.li>
              <motion.li whileHover={navLink}>Blog</motion.li>
              <motion.li whileHover={navLink}>Contact</motion.li>
            </motion.ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
export default Header;