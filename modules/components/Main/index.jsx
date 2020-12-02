import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from '@styles/main.module.css';
import Link from 'next/link';

import { ProgressScroll } from '@components/Tools';
import { motion, AnimatePresence } from "framer-motion";

import { wrap } from "@popmotion/popcorn";

import { Do } from '@components/Main/subcomponents/do';
import { Skill } from './subcomponents/skill';
import { Project } from './subcomponents/project';

const Main = () => {
  const [ulang, setUlang] = useState(false);

  const constraintRef = useRef(null);

  const outerRoundHover = {
    borderRadius: "10%",
    rotate: 360,
    transition:{duration: 1}
  }
  const outerRoundTap = {
    scale: 0.8,
    borderRadius: "100%",
    transition:{
      duration: .8
    } 
  }

  const roundImageHover = {
    borderRadius: "10%",
    transition:{
      duration: .8
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

  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  setTimeout(() => {
    paginate(1);
  }, 3000);

  const figure = [
    "Web Designer",
    "Backend Developer",
    "Frontend Developer"
  ];

  const figureIndex = wrap(0, figure.length, page);

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
              <div className={styles.contain}>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.input
                    disabled
                    className={styles.profileTitle}
                    key={page}
                    defaultValue={figure[figureIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      opacity: { duration: 0 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                  />
                </AnimatePresence>
              </div>
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
        <Project />
        <ProgressScroll constraintRe={constraintRef}/>
      </motion.div>
    </Fragment>
  );
}

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default Main;