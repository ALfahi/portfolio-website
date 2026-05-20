// component used in hero section to easily access other sections of the page easily

"use client";
import { scrollToSection } from "@/app/lib/scrollToSection";

export default function SectionNav() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-12 text-sm md:text-base">

      <button onClick={() => scrollToSection("about")}
        className="text-neutral-400 hover:text-blue-400 transition">
        About
      </button>

      <button onClick={() => scrollToSection("skills")}
        className="text-neutral-400 hover:text-blue-400 transition">
        Skills
      </button>

      <button onClick={() => scrollToSection("education")}
        className="text-neutral-400 hover:text-blue-400 transition">
        Education
      </button>

      <button onClick={() => scrollToSection("experience")}
        className="text-neutral-400 hover:text-blue-400 transition">
        Experience
      </button>

    </div>
  );
}