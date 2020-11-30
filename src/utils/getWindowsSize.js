const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    height,
    width,
  };
};

export default getWindowSize;
