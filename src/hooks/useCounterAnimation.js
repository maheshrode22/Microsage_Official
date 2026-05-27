import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that animates a numeric counter when the element
 * enters the viewport using IntersectionObserver.
 *
 * @param {string} numberStr - The target number string (e.g. "150+", "11 Lakh", "100%")
 * @returns {{ count: number, isVisible: boolean, cardRef: React.RefObject }}
 */
const useCounterAnimation = (numberStr) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const currentRef = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const end = parseInt(numberStr.replace(/[^0-9]/g, '')) || 100;
    if (end === 0) return;

    let current = 0;
    const totalDuration = 2000;
    const incrementTime = Math.max(totalDuration / end, 10);

    const timer = setInterval(() => {
      current += Math.ceil(end / 40);
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, numberStr]);

  return { count, isVisible, cardRef };
};

export default useCounterAnimation;
