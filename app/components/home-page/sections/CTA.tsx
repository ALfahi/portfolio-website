import Section from "@/app/components/layout/Section";

export default function CTA() {
  return (
    <Section id="contact" className="text-center">

      <h2 className="text-6xl md:text-7xl font-medium">
        Let’s build something
        <br />
        meaningful together
      </h2>

      <p className="mt-10 text-lg text-neutral-500 max-w-xl mx-auto">
        Open to internships, collaborations, and ambitious engineering work.
      </p>

      <a
        href="mailto:you@email.com"
        className="inline-block mt-12 text-white border-b border-white/30 hover:border-white transition"
      >
        Get in touch →
      </a>

    </Section>
  );
}