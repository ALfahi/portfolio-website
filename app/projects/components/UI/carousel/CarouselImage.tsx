"use client";

import { AnimatePresence, motion } from "framer-motion";
import { carasoulVariants } from "./variants";
import { defaultGradient } from "./config";
type Props = {
  src: string;
  transitionkey?: string | number// key to remount image so animation can retrigger
  direction: number;// which way should the image animate (1 for next i.e right, -1 for prev i.e left)
  onClick?: () => void;
  showGradient?: boolean;
  gradientClassName?: string;
};

export default function CarouselImage({src, transitionkey, direction,onClick,showGradient = false,gradientClassName = defaultGradient,}: Props) {

  const isClickable = typeof onClick === "function";// if onclick was passed in, indicate it
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={`${src}-${transitionkey}`}
          src={src ?? "/icons/no-image.svg" }// placeholder image as fallback
          custom={direction}
          variants={carasoulVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={[
            "absolute inset-0 w-full h-full object-cover select-none pointer-events-auto transition-transform duration-300",
            isClickable
              ? "cursor-pointer hover:scale-[1.05]"
              : "cursor-default",
          ].join(" ")}
          onClick={onClick}
          draggable={false}
        />
      </AnimatePresence>

      {showGradient && (
        <div className={`absolute inset-0 pointer-events-none ${gradientClassName}`} />
      )}
    </div>
  );
}