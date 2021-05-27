import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from "framer-motion";

export const ProgressScroll = ({ constraintRe }) => {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const hovInteract = {
    scale: 1.2,
    transition: {
      duration: .1
    }
  };

  return (
    <Fragment>
      <motion.div drag dragConstraints={constraintRe} whileTap={{ cursor: 'grabbing' }} whileHover={hovInteract} className="containerBar">
        <motion.div
          className="statusBar"
          style={{ scaleY: scrollYProgress }}
        />
      </motion.div>
    </Fragment>
  );
}

function getWindowDimensions() {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  })
  return {
    width,
    height
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return windowDimensions;
}