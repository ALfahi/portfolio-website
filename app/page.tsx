'use client'
import About from "./components/home-page/sections/About";
import Career from "./components/home-page/sections/Career";
import CTA from "./components/home-page/sections/CTA";
import Hero from "./components/home-page/sections/Hero";
import Skills from "./components/home-page/sections/Skills";
import ScrollButtons from "./components/layout/ScrollButton";
import { HOME_PAGE_SECTIONS_ARRAY} from "./const";
export default function Home() {
  return (
    <main className="bg-black/20 text-white">
      <Hero/>
      <About/>
      <Skills/>
      <Career/>
      <CTA/>   

      <ScrollButtons sections={HOME_PAGE_SECTIONS_ARRAY}/>
    </main>
  );
}