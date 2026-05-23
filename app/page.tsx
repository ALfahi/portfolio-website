"use client";

import Hero from "./components/home-page/sections/Hero";
import About from "./components/home-page/sections/About";
import Skills from "./components/home-page/sections/Skills";
import Career from "./components/home-page/sections/Career";
import CTA from "./components/home-page/sections/CTA";

import ScrollButtons from "./components/layout/ScrollButton";
import AnimatedPanel from "./components/layout/AnimatedPanel";

import { HOME_PAGE_SECTIONS_ARRAY } from "./const";
import { useScrollSections } from "@/app/hooks/UseScrollSections";

export default function Home() {
  const { direction } = useScrollSections(HOME_PAGE_SECTIONS_ARRAY);

  return (
    <main className="bg-black/20 text-white">

      <AnimatedPanel id="hero" direction={direction}>
        <Hero />
      </AnimatedPanel>

      <AnimatedPanel id="about" direction={direction}>
        <About />
      </AnimatedPanel>

      <AnimatedPanel id="skills" direction={direction}>
        <Skills />
      </AnimatedPanel>

      <AnimatedPanel id="career" direction={direction}>
        <Career />
      </AnimatedPanel>

      <AnimatedPanel id="cta" direction={direction}>
        <CTA />
      </AnimatedPanel>

      <ScrollButtons sections={HOME_PAGE_SECTIONS_ARRAY} />
    </main>
  );
}