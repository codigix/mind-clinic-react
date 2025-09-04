import { useEffect, useState, RefObject } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export const useInView = (ref: RefObject<HTMLElement>, options?: UseInViewOptions) => {
  const [isInView, setIsInView] = useState(false);
  const { once, ...observerOptions } = options || {};

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        }
      },
      {
        threshold: 0.1,
        ...observerOptions,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, once, observerOptions]);

  return isInView;
};