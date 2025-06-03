import React from 'react';
import { motion, useInView } from 'framer-motion';
import { sectionVariant } from '../utils/animationVariants';

const SectionWrapper = ({ children, idName }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  return (
    <motion.section
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={`relative z-0 p-8`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;