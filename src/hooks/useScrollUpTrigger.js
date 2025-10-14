// src/hooks/useScrollUpTrigger.js
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView

const useScrollUpTrigger = (options = {}) => {
  const { threshold = 0 } = options;
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const lastScrollY = useRef(0);
  const isScrollingUp = useRef(false);

  // Use useInView to get the ref and inView state
  const [ref, inView] = useInView({ threshold });

  // Scroll event listener to detect scroll direction and combine with inView
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      isScrollingUp.current = currentScrollY < lastScrollY.current;
      lastScrollY.current = currentScrollY;

      // Logic: Animate if scrolling up AND the element is in view
      if (isScrollingUp.current && inView) {
        setShouldAnimate(true);
      } else if (!isScrollingUp.current && inView) {
        // If scrolling down and still in view, reset the animation state
        setShouldAnimate(false);
      } else if (!inView) {
        // If element is out of view (scrolling up or down), always reset
        setShouldAnimate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView]); // Depend on inView to react to its changes

  // Return the ref from useInView, and our animation state
  return [ref, shouldAnimate];
};

export default useScrollUpTrigger;