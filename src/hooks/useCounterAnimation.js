import { useState, useEffect, useRef } from 'react';

/**
 * Animates a numeric counter when the element enters the viewport.
 * Supports formats like "200+", "100,000+", "99.9%", "11 Lakh".
 *
 * @param {string} numberStr
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
    if (!isVisible) return undefined;

    const numericPart = numberStr.replace(/[^0-9.]/g, '');
    const hasDecimal = numericPart.includes('.');
    const end = hasDecimal ? parseFloat(numericPart) : parseInt(numericPart, 10) || 100;

    if (!end) return undefined;

    const steps = 40;
    const totalDuration = 2000;
    const increment = end / steps;
    const stepMs = totalDuration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else if (hasDecimal) {
        setCount(Math.round(current * 10) / 10);
      } else {
        setCount(Math.floor(current));
      }
    }, stepMs);

    return () => clearInterval(timer);
  }, [isVisible, numberStr]);

  return { count, isVisible, cardRef };
};

export default useCounterAnimation;
