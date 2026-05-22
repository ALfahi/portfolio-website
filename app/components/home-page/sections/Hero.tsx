import { scrollToSection } from "@/app/lib/scroll";
import SectionNav from "../../layout/SectionNav";
import { HOME_PAGE_SECTIONS } from "@/app/const";

export default function Hero(){
    return (
            <section id="hero"
                className="
                relative
                min-h-screen
                overflow-hidden
                flex items-center
                px-8 md:px-24
                "
            >
               {/* Background image */}
                <img
                    src="/images/code.jpg"
                    alt="code"
                    className="
                    absolute inset-0
                    w-full h-full
                    object-cover

                    scale-110
                    rotate-[-3deg]

                    blur-md
                    brightness-80
                    opacity-60

                    pointer-events-none
                    select-none
                    [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
                    "
                />

                {/* Dark overlay */}
                <div
                    className="
                    absolute inset-0
                    bg-gradient-to-b
                    from-black/50
                    via-black/25
                    to-black/80
                    "
                />

                {/* Optional glow */}
                <div
                    className="
                    absolute
                    inset-0
                    bg-blue-500/10
                    blur-3xl
                    "
                />

                <div className="max-w-4xl z-10">
        
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
                        px-8 py-4
                        rounded-full
                        bg-blue-500
                        text-white
                        font-medium
                        text-lg
                        hover:bg-blue-400
                        hover:scale-[1.03]
                        transition
                        shadow-[0_0_30px_rgba(59,130,246,0.25)]
                    "
                    >
                    View Projects
                    </a>
        
                    <button
                    onClick={()=>scrollToSection(HOME_PAGE_SECTIONS[1])}// scroll to the first section that is not the hero section 
                    className="text-neutral-400 hover:text-white transition text-lg"
                    >
                    Learn more ↓
                    </button>
        
                </div>
        
                {/* SECTION NAV (inside hero but visually secondary) */}
                <SectionNav />
        
                </div>
            </section>
    )
}