import { scrollToSection } from "@/app/lib/scrollToSection";
import SectionNav from "../../layout/SectionNav";

export default function Hero(){
    return (
            <section className="min-h-screen flex items-center px-8 md:px-24">
                <div className="max-w-4xl">
        
                <p className="text-blue-400 text-sm tracking-widest uppercase mb-6">
                    Portfolio 2026
                </p>
        
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
                    onClick={()=>scrollToSection("about")}
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