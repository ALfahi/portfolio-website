'use client'
import { useState } from "react";
import Timeline from "@/app/components/UI/Timeline";
import Section from "@/app/components/layout/Section";
import { experienceData } from "@/app/data/sections/experience";
import { educationData } from "@/app/data/sections/education";

// section which combines both educational and expereince data into a single timeline component, with a toggle to switch between the two.
  
export default function Career() {
  const [tab, setTab] = useState<"experience" | "education">("experience");// default to experience tab

  return (
    <Section id="career">

      {/* header */}
      <div className="flex justify-between items-end mb-16">

        <h2 className="text-5xl md:text-6xl font-medium">
          Career
        </h2>

        {/* toggle */}
        <div className="flex gap-6 text-sm text-neutral-500">
          <button
            onClick={() => setTab("experience")}
            className={tab === "experience" ? "text-white" : ""}
          >
            Experience
          </button>

          <button
            onClick={() => setTab("education")}
            className={tab === "education" ? "text-white" : ""}
          >
            Education
          </button>
        </div>

      </div>

      {/* content */}
      <div className="mx-auto max-w-4xl">

        {tab === "experience" ? (
          <Timeline items={experienceData} />
        ) : (
          <Timeline items={educationData} />
        )}

      </div>

    </Section>
  );
}