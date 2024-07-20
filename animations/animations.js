export const cubicBezier = [0.645, 0.045, 0.355, 1];

export const staggerBanner ={
  animate: {
    transition: {
      staggerChildren: 0.0625
    }
  }
};

export const staggerContent ={
  animate: {
    transition: {
      delayChildren: 1.75,
      staggerChildren: 0.25
    }
  }
};

export const fadeInUp = {
  initial: {
    y: 20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: cubicBezier
    }
  }
};

export const slideUp = {
  initial: {
    y: 200,
    // skewY: 10
  },
  animate: {
    y: 0,
    // skewY: 0,
    transition: {
      duration: 1.5,
      ease: cubicBezier
    }
  }
};
