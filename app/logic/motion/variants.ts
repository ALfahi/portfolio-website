// the different animation variants used in framer.motion
export const animationVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 80 : -80,
      filter: "blur(4px)",
    }),
  
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -80 : 80,
      filter: "blur(4px)",
      transition: {
        duration: 0.4,
      },
    }),
  };