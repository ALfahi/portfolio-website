
export const sizeMap = {
    sm: { btn: "w-7 h-7", icon: 16 },
    md: { btn: "w-9 h-9", icon: 18 },
    lg: { btn: "w-11 h-11 md:w-14 md:h-14", icon: 30},
};

export const defaultGradient = "bg-gradient-to-t from-black/70 via-black/30 to-transparent";

export const carouselButtonBaseClass =
  `
  flex-shrink-0
  rounded-full
  bg-white/10 hover:bg-white/20
  backdrop-blur
  flex items-center justify-center
  hover:scale-110
  hover:cursor-pointer
  transition-all duration-200
  text-white
  pointer-events-auto
`;