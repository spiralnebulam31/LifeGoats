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
      staggerChildren: 1,
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
  },
};

export const linkReveal = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

export const listItem = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
