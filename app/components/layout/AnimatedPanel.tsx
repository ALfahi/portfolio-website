"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { animationVariants} from "@/app/logic/motion/variants";

// an animated panel that animates in when it comes into view, and animates out when it goes out of view

type AnimatedPanelProps = {
id?: string;
  children: React.ReactNode;
  direction: number;
};

export default function AnimatedPanel({id, children,direction,}: AnimatedPanelProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      id={id}
      ref={ref}
      variants={animationVariants}
      custom={direction}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
    >
      {children}
    </motion.div>
  );
}