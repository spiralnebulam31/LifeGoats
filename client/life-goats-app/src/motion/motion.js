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
    };