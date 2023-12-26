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
