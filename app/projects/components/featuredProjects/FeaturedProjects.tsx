"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/app/data/sections/projects";
import Carousel from "../UI/carousel/Carousel";
import { carasoulVariants } from "../UI/carousel/variants";
import { useIsMobile } from "@/app/hooks/UseIsMobile";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const {isMobile} = useIsMobile();
  const [direction, setDirection] = useState(1);// which way should the text animate (1 for next i.e right, -1 for prev i.e left)

  const [index, setIndex] = useState(0);

  const project = featured[index];

  const featuredImages = useMemo(
    () => featured.map((p) => p.images[0]),
    [featured]
  );

  if (!featured.length) return null;

  function handleNext() {
    setDirection(1);
    setIndex((i) => (i + 1) % featured.length);
  }

  function handlePrev() {
    setDirection(-1);
    setIndex((i) => (i - 1 + featured.length) % featured.length);
  }

  function scrollToProject() {
    document.getElementById(project.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section className="relative h-[85vh] flex flex-col md:flex-row items-center justify-center overflow-hidden">
        
      <h2 className="text-display font-semibold z-10 mb-10">
        Featured Projects
      </h2>
      {/* image area*/}
      <div className="relative w-full h-[55vh] md:h-[65vh]">

        <Carousel
          images={featuredImages}
          index={index}
          externalControls={isMobile? false: true}
          size="lg"
          showGradient
          onImageClick={scrollToProject}
          onNext={handleNext}
          onPrev={handlePrev}
        />

        {/* text overlay*/}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            custom={direction}
            variants={carasoulVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="
              absolute inset-0 z-20
              flex items-center justify-center text-center pointer-events-none
              px-16
            "
          >
            <div className="w-full my-auto">

              <h2 className="text-title font-semibold text-white">
                {project.title}
              </h2>

              <p className="
                mt-3 md:mt-4
                text-body
                text-neutral-300
                line-clamp-2 md:line-clamp-3
              ">
                {project.description.length > 80 ? project.description.slice(0, 80).trimEnd() + "…" : project.description}
              </p>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}