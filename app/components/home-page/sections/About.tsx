import Section from "@/app/components/layout/Section";

export default function About() {
  return (
    <Section id="about">

      <div className="grid md:grid-cols-12 gap-24 items-center">

        {/* IMAGE */}
        <div className="md:col-span-6">
          <img
            src="/LinkedIn-pfp.jpeg"
            className="rounded-2xl w-full max-w-lg"
          />
        </div>

        {/* TEXT */}
        <div className="md:col-span-6 space-y-10">

          <p className="text-title uppercase text-white">
            About
          </p>

          <p className="text-body-large text-neutral-400 leading-relaxed">
            I’m a computer science student building full-stack systems,
            focusing on architecture, UX, and performance.
          </p>

        </div>

      </div>

    </Section>
  );
}