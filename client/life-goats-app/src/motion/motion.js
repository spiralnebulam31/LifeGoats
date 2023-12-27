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

  export const mobileNav = {
    initial: {
      scaleX: 0,
      x: 100,
    },
    animate: {
      scaleX: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 50,
        damping: 15,
        ease: "easeInOut",
      },
      exit: {
        scaleX: 0,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 50,
          damping: 15,
          ease: "easeInOut",
        },
      },
    },
  };

  
  export const linkReveal = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        staggerChildren: 4,
        delayChildren: 5,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };