import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/main.module.css';
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="container relative overflow-hidden sm:pt-10 pt-3 mx-auto">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="w-full flex items-center justify-between">
              <motion.div className={styles.navProfile} initial="hidden" animate="visible" variants={profileLogo}>
                <Image src="/profile-img/ariq.png" width="50" height="50" />
                <div className={styles.nameLogo}>
                  <span className={styles.firstName}>Ariq</span>
                  <span className={styles.nextName}>Jusuf</span>
                </div>
              </motion.div>
              <button onClick={() => setIsOpen(!isOpen)} className="block sm:hidden mr-2 focus:outline-none active:bg-gray-100 transition rounded-sm">{isOpen ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>}</button>
            </div>
            <motion.ul className={isOpen ? `${styles.navLink} flex-col sm:flex font-poppins text-sm sm:text-base pl-2 mt-2 sm:mt-0` : `${styles.navLink} hidden sm:flex font-poppins text-sm sm:text-base pl-2 mt-2 sm:mt-0`} initial="hidden" animate="visible" variants={navbar}>
              <motion.li className={router.pathname == "/" ? `${styles.active} ${styles.a} ${styles.linkDrop} py-1 sm:py-0` : `${styles.a} ${styles.linkDrop} py-1 sm:py-0`}>
                <Link href="/">About Me</Link>
                {/* <i className={`fas fa-chevron-down ${styles.linkDrop__icon}`}></i> */}
              </motion.li>
              <motion.li className={router.pathname == "/resume" ? `${styles.active} ${styles.a} ${styles.linkDrop} py-1 sm:py-0` : `${styles.a} ${styles.linkDrop} py-1 sm:py-0`}>
                <Link href="/resume">Resume</Link>
              </motion.li>
              <motion.li className={router.pathname == "/resume" ? `${styles.active} ${styles.a} ${styles.linkDrop} py-1 sm:py-0` : `${styles.a} ${styles.linkDrop} py-1 sm:py-0`}>Potfolio</motion.li>
              <motion.li className={router.pathname == "/resume" ? `${styles.active} ${styles.a} ${styles.linkDrop} py-1 sm:py-0` : `${styles.a} ${styles.linkDrop} py-1 sm:py-0`}>
                <a href="https://ariq2901.medium.com/" target="_blank">Blog</a>
              </motion.li>
              <motion.li className={router.pathname == "/resume" ? `${styles.active} ${styles.a} ${styles.linkDrop} py-1 sm:py-0` : `${styles.a} ${styles.linkDrop} py-1 sm:py-0`}>Contact</motion.li>
            </motion.ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
export default Header;