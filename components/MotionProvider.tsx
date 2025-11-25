import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// Scroll reveal animation hook
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1
  },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.25, 0.25, 1]
  }
};

export const fadeInLeft = {
  initial: { 
    opacity: 0, 
    x: -60,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1
  },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.25, 0.25, 1]
  }
};

export const fadeInRight = {
  initial: { 
    opacity: 0, 
    x: 60,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1
  },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.25, 0.25, 1]
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Floating animation for background elements
export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};