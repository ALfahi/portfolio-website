"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { scrollToSection } from "@/app/lib/scroll";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  // we need to know if we are in home page or not
  const pathname = usePathname();
  const router = useRouter();

  // function to go home and scroll to the hero section
  function goHome(){// TO DO: move to seperate file
    // already on home page
    if (pathname === "/") {
      scrollToSection("hero");
      return;
    }

    // go home first
    router.push("/");

    // wait for page mount then scroll
    setTimeout(() => {
      scrollToSection("hero");
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 px-4 md:px-8 pt-4"
    >
      <div
        className="
          max-w-7xl mx-auto
          h-20 md:h-24
          px-6 md:px-10
          rounded-2xl
          border border-white/10
          bg-black/45
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          flex items-center justify-between
        "
      >
        {/* ───────── BRANDING ───────── */}
        <button
          onClick={goHome}
          className="group text-left cursor-pointer"
        >
          <div className="flex flex-col leading-none">
            <span
              className="
                text-2xl md:text-3xl
                font-black tracking-tight
                text-white
                transition-colors
                group-hover:text-blue-400
              "
            >
              FAHI
            </span>

            <span
              className="
                text-[10px] md:text-xs
                uppercase
                tracking-[0.35em]
                text-blue-400/80
              "
            >
              Software Engineer
            </span>
          </div>
        </button>

        {/* ───────── NAVIGATION ───────── */}
        <nav className="flex items-center gap-2 md:gap-3">
          <button
            onClick={goHome}
            className="
              px-4 py-2.5
              rounded-xl
              text-sm
              text-neutral-300
              hover:text-white
              hover:bg-white/5
              transition-all duration-200
            "
          >
            Home
          </button>

          <Link
            href="/projects"
            className="
              px-4 py-2.5
              rounded-xl
              bg-blue-500
              hover:bg-blue-400
              text-white
              text-sm font-medium
              transition-all duration-200
              shadow-[0_0_30px_rgba(59,130,246,0.35)]
            "
          >
            Projects
          </Link>

          <button
            onClick={() => scrollToSection("footer")}
            className="
              px-4 py-2.5
              rounded-xl
              border border-white/10
              text-sm
              text-neutral-300
              hover:text-white
              hover:border-white/20
              hover:bg-white/5
              transition-all duration-200
            "
          >
            Contact
          </button>
        </nav>
      </div>
    </motion.header>
  );
}