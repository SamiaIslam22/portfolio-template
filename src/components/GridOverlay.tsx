'use client';

import { motion } from 'framer-motion';

const GridOverlay = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Main Grid Pattern */}
      <div className="w-full h-full grid-pattern opacity-60" />
      
      {/* Subtle corner accent dots */}
      <motion.div
        className="absolute top-10 left-10 w-2 h-2 bg-blue-400/40 rounded-full"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1]
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
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1]
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
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1]
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
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          delay: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Additional subtle grid accent lines */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          delay: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default GridOverlay;