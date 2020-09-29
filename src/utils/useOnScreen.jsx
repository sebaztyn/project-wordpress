import React, { useEffect, useRef, useState } from "react";

const useOnScreen = (options) => {
  const ref = useRef();
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setvisible(entry.isIntersecting);
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, visible];
};

export default useOnScreen;
