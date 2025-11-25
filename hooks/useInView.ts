import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're in browser environment and IntersectionObserver is available
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsInView(true); // Fallback to true on server
      return;
    }

    const element = ref.current;
    if (!element) {
      // If no element, set to visible after a short delay
      const timer = setTimeout(() => setIsInView(true), 100);
      return () => clearTimeout(timer);
    }

    try {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);

      return () => {
        try {
          observer.unobserve(element);
        } catch (error) {
          // Ignore cleanup errors
        }
      };
    } catch (error) {
      // If observer fails, fallback to visible
      setIsInView(true);
      return;
    }
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}