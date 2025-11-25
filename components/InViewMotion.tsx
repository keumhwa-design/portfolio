import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface InViewMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'bounce' | 'slide';
  duration?: number;
  intensity?: 'subtle' | 'normal' | 'dramatic';
}

export function InViewMotion({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.6,
  intensity = 'normal'
}: InViewMotionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Enhanced settings with more dramatic options
  const distance = intensity === 'subtle' ? 20 : intensity === 'normal' ? 40 : 60;
  const scale = intensity === 'subtle' ? 0.98 : intensity === 'normal' ? 0.95 : 0.9;

  // Enhanced variants object with more animation types
  const variants = {
    up: {
      initial: { opacity: 0, y: distance, scale },
      animate: { opacity: 1, y: 0, scale: 1 }
    },
    down: {
      initial: { opacity: 0, y: -distance, scale },
      animate: { opacity: 1, y: 0, scale: 1 }
    },
    left: {
      initial: { opacity: 0, x: -distance, scale },
      animate: { opacity: 1, x: 0, scale: 1 }
    },
    right: {
      initial: { opacity: 0, x: distance, scale },
      animate: { opacity: 1, x: 0, scale: 1 }
    },
    zoom: {
      initial: { opacity: 0, scale: 0.3 },
      animate: { opacity: 1, scale: 1 }
    },
    bounce: {
      initial: { opacity: 0, y: distance, scale },
      animate: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    },
    slide: {
      initial: { opacity: 0, x: -distance, rotate: -5 },
      animate: { opacity: 1, x: 0, rotate: 0 }
    }
  };

  // Get the variant or fallback to 'up'
  const currentVariant = variants[direction as keyof typeof variants] || variants.up;

  return (
    <motion.div
      ref={ref}
      initial={currentVariant.initial}
      animate={isInView ? currentVariant.animate : currentVariant.initial}
      transition={
        currentVariant.animate.transition || {
          duration,
          delay,
          ease: intensity === 'dramatic' ? [0.25, 0.46, 0.45, 0.94] : "easeOut"
        }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}