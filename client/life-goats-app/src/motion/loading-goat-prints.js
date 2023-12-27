export const stepTopRight = {
  initial: {
    x: -5,
  },
  animate: {
    x: 30,
    transition: {
      duration: 0.7,
      delay: 0.3,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

export const stepBottomRight = {
  initial: {
    x: 0,
  },
  animate: {
    x: 40,
    transition: {
      duration: 0.7,
      delay: 0.6,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

export const stepTopLeft = {
  initial: {
    x: -35,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.6,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

export const stepBottomLeft = {
  initial: {
    x: -25,
  },
  animate: {
    x: 5,
    transition: {
      duration: 0.7,
      delay: 0.3,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

export const stepsRepeat = {
  initial: {
    x: -250,
  },
  animate: {
    x: 250,
    transition: {
      delay: 0.2,
      duration: 15,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const stepsRepeatMobile = {
  initial: {
    x: -85,
  },
  animate: {
    x: 85,
    transition: {
      delay: 0.2,
      duration: 15,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};