import Section from "@/app/components/layout/Section";

export default function CTA() {
  return (
    <Section id="contact" className="text-center">

      <h2 className="text-display font-medium">
        Let’s build something
        <br />
        meaningful together
      </h2>

      <p className="mt-10 text-body-large text-neutral-500 max-w-xl mx-auto">
        Open to internships, collaborations, and software engineering opportunities.
      </p>

      <a
        href="mailto:feha.tasnim27@gmail.com"
        className="inline-block mt-12 text-white border-b border-white/30 hover:border-white transition text-body"
      >
        Get in touch →
      </a>

    </Section>
  );
}