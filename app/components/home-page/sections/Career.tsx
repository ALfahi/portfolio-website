"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Timeline from "@/app/components/UI/Timeline";
import Section from "@/app/components/layout/Section";
import { experienceData } from "@/app/data/sections/experience";
import { educationData } from "@/app/data/sections/education";

// section which combines both educational and expereince data into a single timeline component,
// with a toggle to switch between the two.

export default function Career() {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  // direction: 1 = right to left, -1 = left to right, used for animation when switching tabs
  const [direction, setDirection] = useState(1);

  // function to swap between the two different tabs
  function changeTab(next: "experience" | "education") {
    if (next === tab) return;

    setDirection(next === "education" ? 1 : -1);
    setTab(next);
  }

  return (
    <Section id="career">

      {/* header */}
      <div className="flex justify-between items-end mb-16">

        <h2 className="text-title">
          Career
        </h2>

        {/* toggle */}
        <div className="flex gap-6 text-body-small text-neutral-500">

          <button
            onClick={() => changeTab("experience")}
            className={`
              underline underline-offset-8
              hover:text-white hover:decoration-white
              hover:cursor-pointer transition
              ${
                tab === "experience"
                  ? "text-white decoration-white"
                  : "text-neutral-500 decoration-neutral-500"
              }
            `}
          >
            Experience
          </button>

          <button
            onClick={() => changeTab("education")}
            className={`
              underline underline-offset-8
              hover:text-white hover:decoration-white
              hover:cursor-pointer transition
              ${
                tab === "education"
                  ? "text-white decoration-white"
                  : "text-neutral-500 decoration-neutral-500"
              }
            `}
          >
            Education
          </button>

        </div>

      </div>

      {/* content */}
      <div className="mx-auto max-w-4xl overflow-hidden">
        {/* we want the timelines to fade in and out when switching between the two tabs/ timelines, one tab leaves in one diretion, and the other
         fills in the empty spot from the other direction */}
        <AnimatePresence mode="wait" custom={direction}>

          <motion.div
            key={tab}
            custom={direction}

            initial={{
              opacity: 0,
              x: direction > 0 ? 100 : -100,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            exit={{
              opacity: 0,
              x: direction > 0 ? -100 : 100,
            }}

            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Timeline items={tab === "experience"? experienceData: educationData} showLegend={true}/>
          </motion.div>

        </AnimatePresence>

      </div>

    </Section>
  );
}