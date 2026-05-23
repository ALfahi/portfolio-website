"use client";
// buttons to scroll between passed in sections 
import {getNextSection,getPrevSection,scrollToSection,} from "@/app/lib/scroll";
import { useActiveSection } from "@/app/hooks/UseActiveSection";

type ScrollButtonsProps = {
  sections: readonly string[];// array of section ids in the order they appear on the page
};
export default function ScrollButtons({sections}: ScrollButtonsProps) {
  const active = useActiveSection(sections);

const next = getNextSection(active, sections);
const prev = getPrevSection(active, sections);

  return (
    <>
      {/* ================= TOP BUTTON ================= */}
      {prev && (
        <div className="fixed top-30 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => scrollToSection(prev)}
            className="
              px-8 py-4
              rounded-full
              bg-blue-500/20 backdrop-blur-xl
              border border-white/10
              text-white text-lg
              hover:bg-blue-500/30
              hover: cursor-pointer
              hover:scale-105
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
              text-white text-lg font-medium
              hover:bg-blue-500/30
              hover: cursor-pointer
              hover:scale-105
              transition
              shadow-[0_0_40px_rgba(255,255,255,0.05)]
            "
          >
            ↓ Next
          </button>
        </div>
      )}
    </>
  );
}