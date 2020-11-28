import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from '@styles/main.module.css';
import Link from 'next/link';

import { ProgressScroll } from '@components/Tools';
import { motion } from "framer-motion";

import { Do } from '@components/Main/subcomponents/do';
import { Skill } from './subcomponents/skill';

const Main = () => {

  const constraintRef = useRef(null);

  const outerRoundHover = {
    borderRadius: "10%",
    transition:{duration: .5}
  }
  const outerRoundTap = {
    scale: 0.8,
    rotate: 180,
    borderRadius: "100%",
    transition:{
      duration: .8
    } 
  }

  const roundImageHover = {
    borderRadius: "10%",
    transition:{
      duration: .5
    }
  }
  const roundImageTap = {
    scale: 0.9,
    rotate: 180,
    borderRadius: "100%",
    transition:{
      duration: .8
    }
  }

  return (
    <Fragment>
      <motion.div ref={constraintRef}>
        <motion.div className={styles.containerPro}>
          <div className={styles.shortProfile}>
            <motion.div whileHover={outerRoundHover} whileTap={outerRoundTap} className={styles.outerRound}>
              <motion.div whileHover={roundImageHover} whileTap={outerRoundTap} className={styles.roundImage}>
                <img src="/profile-img/face.jpeg" className={styles.face} alt="profile picture"/>
              </motion.div>
            </motion.div>
            <div className={styles.card}>
              <div className={styles.profileTitle}><span>Web Designer</span></div>
              <div className={styles.profileName}><span>Ariq Jusuf</span></div>
              <div className={styles.profileInfo}><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ut quia ratione obcaecati magni at labore cum praesentium libero ducimus voluptas dignissimos asperiores voluptatum, fugiat esse totam! Maiores, qui enim!</span></div>
              <motion.div className={styles.goButton}>
                <motion.button drag dragConstraints={{ left: 0, right: 50, top: 0, bottom: 30 }} className={styles.downloadCv}>Download CV</motion.button>
                <button className={styles.goContact}>
                  <Link href="/contact">
                    Contact
                  </Link>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <Do/>
        <Skill />
        <ProgressScroll constraintRe={constraintRef}/>
      </motion.div>
    </Fragment>
  );
}

export default Main;