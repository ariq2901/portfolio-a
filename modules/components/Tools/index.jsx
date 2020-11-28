import React, { Fragment } from 'react';
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
      <motion.div drag dragConstraints={constraintRe} whileHover={hovInteract} className="containerBar">
        <motion.div
          className="statusBar"
          style={{scaleY: scrollYProgress}}
        />
      </motion.div>
    </Fragment>
  );
}