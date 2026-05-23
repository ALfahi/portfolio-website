// component used in hero section to easily access other sections of the page easily

"use client";
import { scrollToSection } from "@/app/lib/scroll";

export default function SectionNav() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-12 text-base md:text-lg">

      <button onClick={() => scrollToSection("about")}
        className="text-neutral-400 hover:text-white transition underline decoration-neutral-400 hover:decoration-white hover:cursor-pointer">
        About
      </button>

      <button onClick={() => scrollToSection("skills")}
        className="text-neutral-400 hover:text-white transition underline decoration-neutral-400 hover:decoration-white hover:cursor-pointer">
        Skills
      </button>

      <button onClick={() => scrollToSection("career")}
        className="text-neutral-400 hover:text-white transition underline decoration-neutral-400 hover:decoration-white hover:cursor-pointer">
        career
      </button>
    </div>
  );
}