import { useState, useEffect, useRef } from 'react';

/**
 * Observes an element and sets isInView once it enters the viewport.
 * Fires once by default for scroll-triggered entrance animations.
 */
const useInView = ({ threshold = 0.15, once = true, rootMargin = '0px 0px -40px 0px' } = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, isInView };
};

export default useInView;
