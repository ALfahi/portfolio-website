'use client'
import About from "./components/home-page/sections/About";
import CTA from "./components/home-page/sections/CTA";
import Education from "./components/home-page/sections/Education";
import Experience from "./components/home-page/sections/Experience";
import Hero from "./components/home-page/sections/Hero";
import Skills from "./components/home-page/sections/Skills";
import ScrollButtons from "./components/layout/ScrollButton";

const SECTIONS = [
  "hero",
  "about",
  "skills",
  "education",
  "experience",
  "contact",
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Experience/>
      <CTA/>   

      <ScrollButtons sections={SECTIONS}/>
    </main>
  );
}