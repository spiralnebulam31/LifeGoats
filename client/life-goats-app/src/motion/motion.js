export const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 0.5,
        type: "spring",
        staggerChildren: 1
      },
    },
    }

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

  export const cloud1Variant = {
    initial: {
      x:-500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 0.5,
      },
    },
  }

  export const cloud2Variant = {
    initial: {
      x:500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 0.5,
      },
    },
  }

  export const floatFromLeftVariant = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
    }

    export const floatFromRightVariant = {
      initial: {
        x: 500,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      },
      }
