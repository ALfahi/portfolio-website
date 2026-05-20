import GlassSection from "../../UI/GlassSection";

export default function CTA(){
    return(
        <GlassSection id="contact" className="text-center">

            <h2 className="text-5xl font-semibold">
            Let’s build something great
            </h2>

            <p className="text-xl text-neutral-400 mt-8">
            Open to internships, collaborations, and projects.
            </p>

            <a
            href="#footer"
            className="inline-block mt-12 text-blue-400 hover:text-blue-300 text-xl transition"
            >
            Contact Me →
            </a>

      </GlassSection>

    )
}