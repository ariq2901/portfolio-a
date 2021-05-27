import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from '@styles/main.module.css';
import Link from 'next/link';

import { ProgressScroll } from '@components/Tools';
import { motion, AnimatePresence } from "framer-motion";

import { wrap } from "@popmotion/popcorn";

import { Do } from '@components/Home/Main/subcomponents/do';
import { Skill } from './subcomponents/skill';
import { Project } from './subcomponents/project';
import { MoreInfo } from './subcomponents/moreInfo';
import { Footer } from '@components/Footer';

const Main = () => {
  const [ulang, setUlang] = useState(false);

  const constraintRef = useRef(null);

  const outerRoundHover = {
    borderRadius: "10%",
    rotate: 360,
    transition: { duration: 1 }
  }
  const outerRoundTap = {
    scale: 0.8,
    borderRadius: "100%",
    transition: {
      duration: .8
    }
  }

  const roundImageHover = {
    borderRadius: "10%",
    transition: {
      duration: .8
    }
  }

  const roundImageTap = {
    scale: 0.9,
    rotate: 180,
    borderRadius: "100%",
    transition: {
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
        <motion.div className="w-full pt-5 sm:pt-20">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 place-items-center gap-0">
            <motion.div whileHover={outerRoundHover} whileTap={outerRoundTap} className={`${styles.outerRound} justify-self-center relative rounded-full w-56 h-56 sm:w-350 sm:h-350`}>
              <motion.div whileHover={roundImageHover} whileTap={outerRoundTap} className={styles.roundImage}>
                <img src="/profile-img/arq.jpg" className={styles.face} alt="profile picture" />
              </motion.div>
            </motion.div>
            <div className="py-2 sm:py-4 flex flex-col justify-evenly h-full w-full justify-self-center">
              <div className="relative w-300 h-6 overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.input
                    disabled
                    className="select-none absolute hidden sm:block font-poppins opacity-0 outline-none border-none bg-transparent text-sm sm:text-base text-long-font"
                    whileHover={{ cursor: 'grab' }}
                    whileTap={{ cursor: 'grabbing' }}
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
              <div className="text-center sm:text-left -mt-2 sm:-mt-3 font-poppins font-semibold text-3xl sm:text-5xl text-base-font"><span>Ariq Jusuf</span></div>
              <div className="text-center sm:text-left mt-2 px-5 sm:px-0 sm:pr-24 font-poppins text-xs sm:text-sm leading-5 mb-2 text-long-font">
                <span>I relish taking complex problems and turning them into something people can use later without having the same problems as me. I prefer to create logic structures that can be executed dynamically.<br /> If I'm not coding or pushing some repo. You'll find me pushing rank in several games!</span>
              </div>
              <motion.div className="-mb-5 mt-4 sm:mt-0 w-full flex flex-col sm:flex-row justify-center items-center sm:justify-start">
                <motion.a drag dragConstraints={{ left: 0, right: 50, top: 0, bottom: 30 }} className="font-poppins text-sm text-base-font border-solid border-2 border-primary-color bg-white w-40 h-10 rounded-35 mr-0 sm:mr-3 shadow-md cursor-pointer focus:bg-primary-color focus:outline-none focus:border-green-300 focus:text-white transition no-underline grid place-items-center" href="/cv/CV%20-%20Ariq%20Jusuf.pdf" download>Download CV</motion.a>
                <a className="font-poppins text-sm text-long-font border-solid border-2 border-gray-300 bg-white w-40 h-10 rounded-35 mr-0 sm:mr-3 mt-3 sm:mt-0 shadow-md focus:shadow-none cursor-pointer focus:outline-none active:shadow-none transition no-underline grid place-items-center" href="/contact">Contact</a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <Do />
        <Skill />
        <Project />
        <MoreInfo />
        <Footer />
        <ProgressScroll constraintRe={constraintRef} />
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