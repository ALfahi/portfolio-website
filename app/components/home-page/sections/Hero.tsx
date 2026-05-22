"use client";
import { scrollToSection } from "@/app/lib/scroll";
import SectionNav from "../../layout/SectionNav";
import { HOME_PAGE_SECTIONS } from "@/app/const";
import CodeDriftBackground from "../../UI/codeAnimation/CodeDriftBackground";

export type HeroProps = {};

export default function Hero({}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center px-8 md:px-24"
    >
      <CodeDriftBackground />

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-tight">
          Software Engineer
        </h1>

        <p className="mt-10 text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
          I build modern web applications with clarity, performance,
          and strong user experience.
        </p>

          {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row gap-6 sm:items-center">
          <a
            href="#"
            className="
              px-8 py-4 rounded-full
              bg-blue-500 text-white font-medium text-lg
              hover:bg-blue-400 hover:scale-[1.03]
              transition
              shadow-[0_0_30px_rgba(59,130,246,0.25)]
            "
          >
            View Projects
          </a>

          <button
            onClick={() => scrollToSection(HOME_PAGE_SECTIONS.about)}
            className="text-neutral-400 hover:text-white transition text-lg"
          >
            Learn more ↓
          </button>
        </div>

        <SectionNav />
      </div>
    </section>
  );
}