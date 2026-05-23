"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselButtonBaseClass, sizeMap } from "./config";
// prev and next buttons for the carasoul, which are just buttons with chevron icons, and some styling based on the provided size prop
type Props = {
  size: "sm" | "md" | "lg";// size of buttons
  icon: number;// size of icon
  onClick:()=>void;// what to do when button is clicked
}

export function PrevButton({ size, icon, onClick }: Props) {
    return (
      <button className={`${carouselButtonBaseClass} ${sizeMap[size].btn}`} onClick={onClick}>
        <ChevronLeft size={icon} />
      </button>
    );
  }
  
  export function NextButton({ size, icon, onClick }: Props) {
    return (
      <button className={`${carouselButtonBaseClass} ${sizeMap[size].btn}`} onClick={onClick}>
        <ChevronRight size={icon} />
      </button>
    );
  }