import React, { Fragment, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '@styles/main.module.css';
import Image from 'next/image';
import { motion } from "framer-motion";
import { ProgressScroll } from '@components/Tools';

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
        <ProgressScroll constraintRe={constraintRef}/>
      </motion.div>
    </Fragment>
  );
}

const Do = () => {
  return (
    <Fragment>
      <div className={styles.container} style={{ paddingTop: "25vh" }}>
        <div className={styles.doTitle}>
          <span className={styles.doText}>What I Do</span>
          <progress className={styles.lineProg} max="100" value="30"></progress>
        </div>
        <div className={styles.skills}>

          <div className={styles.skill}>
            <div className={styles.iconSkill}>
              <img className={styles.iconSvg} src="/icons/frontend.svg" alt="design icon"/>
            </div>
            <div className={styles.infoSkill}>
              <span className={styles.titleSkill}>Frontend Developer</span>
              <span className={styles.detailSkill}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iure placeat sapiente delectus beatae commodi consequuntur omnis, ipsa hic rem doloremque. In alias fuga temporibus molestiae, unde illo enim fugit!</span>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.iconSkill}>
              <img className={styles.iconSvg} src="/icons/ecommerce.svg" alt="design icon"/>
            </div>
            <div className={styles.infoSkill}>
              <span className={styles.titleSkill}>Ecommerce</span>
              <span className={styles.detailSkill}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iure placeat sapiente delectus beatae commodi consequuntur omnis, ipsa hic rem doloremque. In alias fuga temporibus molestiae, unde illo enim fugit!</span>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.iconSkill}>
              <img className={styles.iconSvg} src="/icons/design.svg" alt="design icon"/>
            </div>
            <div className={styles.infoSkill}>
              <span className={styles.titleSkill}>Designing</span>
              <span className={styles.detailSkill}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iure placeat sapiente delectus beatae commodi consequuntur omnis, ipsa hic rem doloremque. In alias fuga temporibus molestiae, unde illo enim fugit!</span>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.iconSkill}>
              <img className={styles.iconSvg} src="/icons/backend.svg" alt="backend icon"/>
            </div>
            <div className={styles.infoSkill}>
              <span className={styles.titleSkill}>Backend Developer</span>
              <span className={styles.detailSkill}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iure placeat sapiente delectus beatae commodi consequuntur omnis, ipsa hic rem doloremque. In alias fuga temporibus molestiae, unde illo enim fugit!</span>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}
export default Main;