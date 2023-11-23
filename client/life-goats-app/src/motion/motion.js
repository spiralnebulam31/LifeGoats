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