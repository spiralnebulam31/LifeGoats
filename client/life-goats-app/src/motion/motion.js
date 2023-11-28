export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: type,
          duration: duration,
          delay: delay,
          staggerChildren: 0.1,
        },
      },
    };
  };

  export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          staggerChildren: 0.1,
        },
      },
    };
  };

export const heroVariant = {
    initial: {
      y:-500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  }

  export const heroGoatPrintsVariant = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  }

  export const starryHeroVariant1 = {
    initial: {
      x: -500,
      opacity: 0,
    },
  animate: {
        x: 0,
        opacity : 0.4,
    transition: {
      duration: 2.5,
      delay: 0.5,
      type: "spring",
    },
  }}


  export const goatPrintsSliderVariant = {
    initial: {
      x: 0
    },
  animate: {
        y: [0, 20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
    },
  }}

  export const floatFromLeftVariant = {
    initial: {
      x: -200,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    }

    export const floatFromRightVariant = {
      initial: {
        x: +200,
        y: 100,
        opacity: 0,
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          staggerChildren: 0.1,
        },
      },
      }
