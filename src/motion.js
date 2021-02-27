const buttonVariant = {
  buttonAnimation: {
    scale: 1.2,
    textShadow: "0px 0px 6px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
    },
  },
};

const componentContainerVariant = {
  init: {
    opacity: 0,
    x: "-100vw",
  },
  animation: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 0.6,
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut" },
  },
};

const navMenuChildVariant = {
  animation: {
    opacity: [1, 0.6, 1],
    transition: {
      type: "tween",
      ease: "easeInOut",
      repeat: Infinity,
      duration: 5,
    },
  },
  hover: {
    scale: 1.4,
  },
  tap: {
    scale: 0.8,
  },
};

export { buttonVariant, componentContainerVariant, navMenuChildVariant };
