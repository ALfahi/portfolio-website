"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { scrollToSection } from "@/app/lib/scroll";
import { usePathname, useRouter } from "next/navigation";
import { HOME_PAGE_SECTIONS } from "@/app/const";

export default function Header() {
  // we need to know if we are in home page or not
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";
  const isProjects = pathname.startsWith("/projects");

  // function to go home and scroll to the hero section
  function goHome(){// TO DO: move to seperate file
    // already on home page
    if (pathname === "/") {
      scrollToSection(HOME_PAGE_SECTIONS.hero);
      return;
    }

    // go home first
    router.push("/");

    // wait for page mount then scroll
    setTimeout(() => {
      scrollToSection(HOME_PAGE_SECTIONS.hero);
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
                text-title
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
                text-body-small
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
        <nav className="flex items-center gap-2 md:gap-3 text-nav">

          <button
            onClick={goHome}
            className={`
              px-4 py-2.5
              rounded-xl
              transition-all duration-200
              cursor-pointer
              relative

              ${
                isHome
                  ? `
                    text-white
                    bg-white/30
                    border border-white/15
                    shadow-inner
                  `
                  : `
                    text-neutral-300
                    hover:text-white
                    hover:bg-white/5
                    border border-transparent
                  `
              }
            `}
          >
            Home
          </button>

          <Link
            href="/projects"
            className={`
              px-4 py-2.5
              rounded-xl
              font-medium
              transition-all duration-200
              cursor-pointer

              ${
                isProjects
                  ? `
                    text-white
                    bg-white/30
                    border border-white/15
                    shadow-inner
                  `
                  : `
                    text-white
                    bg-blue-500/90
                    hover:bg-blue-400
                    shadow-[0_10px_25px_rgba(59,130,246,0.25)]
                  `
              }
            `}
          >
            Projects
          </Link>

          <button
            onClick={() => scrollToSection("footer")}
            className="
              px-4 py-2.5
              rounded-xl
              border border-white/10
              text-neutral-300
              hover:text-white
              hover:border-white/20
              hover:bg-white/5
              hover: cursor-pointer
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