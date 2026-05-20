// header which includes navigation to other sections/ pages of this website
"use client";
import { scrollToSection } from "@/app/lib/scroll";
import { motion } from "framer-motion";

export default function Header() {
 
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="text-white font-semibold tracking-tight text-lg">
          Fahisabab
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm md:text-base">
          
          <a
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Home
          </a>

          <a
            href="#projects"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Projects
          </a>

          <button
            onClick={()=>scrollToSection("footer")}
            className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </div>
    </motion.header>
  );
}