'use client';

import { motion } from 'framer-motion';

const GridOverlay = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Clean Grid Pattern */}
      <div className="w-full h-full opacity-30 grid-pattern" />
      
      {/* Subtle corner accent dots - minimal */}
      <motion.div
        className="absolute top-10 left-10 w-2 h-2 bg-blue-400/40 rounded-full"
        animate={{
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-10 right-10 w-2 h-2 bg-cyan-400/40 rounded-full"
        animate={{
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-10 left-10 w-2 h-2 bg-sky-400/40 rounded-full"
        animate={{
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 3,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-2 h-2 bg-indigo-400/40 rounded-full"
        animate={{
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 3,
          delay: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default GridOverlay;