"use client";
// buttons to scroll between passed in sections 
import { useEffect, useState } from "react";
import {getNextSection,getPrevSection,scrollToSection,} from "@/app/lib/scroll";

type ScrollButtonsProps = {
  sections: string[];// array of section ids in the order they appear on the page
};
export default function ScrollButtons({sections}: ScrollButtonsProps) {
  const [current, setCurrent] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrent(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const next = getNextSection(current, sections);
  const prev = getPrevSection(current, sections);

  return (
    <>
      {/* ================= TOP BUTTON ================= */}
      {prev && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => scrollToSection(prev)}
            className="
              px-8 py-4
              rounded-full
              bg-white/5 backdrop-blur-xl
              border border-white/10
              text-white text-lg
              hover:bg-white/10
              transition
              shadow-[0_0_40px_rgba(255,255,255,0.05)]
            "
          >
            ↑ Top
          </button>
        </div>
      )}

      {/* ================= BOTTOM BUTTON ================= */}
      {next && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => scrollToSection(next)}
            className="
              px-10 py-5
              rounded-full
              bg-blue-500/20 backdrop-blur-xl
              border border-blue-500/30
              text-blue-400 text-lg font-medium
              hover:bg-blue-500/30
              hover:scale-105
              transition
              shadow-[0_0_40px_rgba(59,130,246,0.25)]
            "
          >
            ↓ Next
          </button>
        </div>
      )}
    </>
  );
}