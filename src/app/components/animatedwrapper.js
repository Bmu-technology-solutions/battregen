import React from 'react';
import { motion, easeOut } from 'framer-motion';

const AnimatedWrapper = ({ children, delay}) => {
  return (
    <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: -5, opacity: 1 }}
    transition={{ duration: 0.3, delay, timingFunction: easeOut }}
    viewport={{ once: true }}
  >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;