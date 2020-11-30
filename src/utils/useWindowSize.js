import React, { useState, useEffect } from "react";
import getWindowSize from "./getWindowsSize";

const useWindowSize = () => {
  const [{ width, height }, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  const resizeHandler = (event) => {
    setWindowSize(getWindowSize());
  };

  return {
    windowWidth: width,
    windowHeight: height,
  };
};

export default useWindowSize;
