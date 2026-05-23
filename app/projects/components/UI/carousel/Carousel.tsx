"use client";

import { useState } from "react";
import CarouselImage from "./CarouselImage";
import { PrevButton, NextButton } from "./CarouselControl";
import { sizeMap } from "./config";

type Props = {
  images: string[];
  size?: "sm" | "md" | "lg";// size of buttons
  index?: number;// if index is provided, carousel becomes controlled and will rely on parent component to change index when next or prev is clicked
  onNext?: () => void;
  onPrev?: () => void;
  onImageClick?: () => void;
  externalControls?: boolean;// whether or not to show controls outside of image area, if false controls will be overlayed on image
  showGradient?: boolean;
  gradientClassName?: string;
};

export default function Carousel({images,size = "md",index, onNext, onPrev, onImageClick, externalControls = false, showGradient, gradientClassName,}: Props) {
  const isControlled = index !== undefined;

  const [internalIndex, setInternalIndex] = useState(0);
  const [direction, setDirection] = useState(1);// which way should the image animate (1 for next i.e right, -1 for prev i.e left)
  const [transitionKey, setTransitionKey] = useState("");// used to force transition

  const currentIndex = isControlled ? index! : internalIndex;
  const icon = sizeMap[size].icon;

  function goPrev() {
    setDirection(-1);
    setTransitionKey(crypto.randomUUID())// generate uniqye key to force remount

    if (onPrev) return onPrev();

    if (!isControlled) {
      setInternalIndex((i) => (i - 1 + images.length) % images.length);
    }
  }

  function goNext() {
    setDirection(1);
    setTransitionKey(crypto.randomUUID())// generate unique key to force remount


    if (onNext) return onNext();

    if (!isControlled) {
      setInternalIndex((i) => (i + 1) % images.length);
    }
  }

  const image = (
    <CarouselImage
      src={images[currentIndex]}
      transitionkey={transitionKey}
      direction={direction}
      onClick={onImageClick}
      showGradient={showGradient}
      gradientClassName={gradientClassName}
    />
  );

  if (externalControls) {
    return (
      // making pointer none so that container itself does not eat up the inputs.
      <div className="w-full h-full flex items-center gap-3 md:gap-4 pointer-events-none">
        <PrevButton size={size} icon={icon} onClick={goPrev} />
        <div className="flex-1 h-full">{image}</div>
        <NextButton size={size} icon={icon} onClick={goNext} />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {image}

      {/*making pointer none so that container itself does not eat up the inputs. */}
      <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
         <PrevButton size={size} icon={icon} onClick={goPrev} />
         <NextButton size={size} icon={icon} onClick={goNext} />
      </div>
    </div>
  );
}