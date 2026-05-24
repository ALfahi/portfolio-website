import Section from "@/app/components/layout/Section";

export default function About() {
  return (
    <Section id="about">

      <div className="grid md:grid-cols-12 gap-24 items-center">

        {/* IMAGE */}
        <div className="md:col-span-6">
          <img
            src="/LinkedIn-pfp.jpeg"
            className="rounded-2xl w-full max-w-2xl h-full max-h-2xl"
          />
        </div>

        {/* TEXT */}
        <div className="md:col-span-6 space-y-10">

          <p className="text-title uppercase text-white">
            About
          </p>

          <p className="text-body text-neutral-400 leading-relaxed">
          I’m a computer science student mainly focused on full-stack web development, while exploring other areas of software in my spare time. 
          I enjoy learning and experimenting with new technologies, both through personal projects and collaborative work. 
          I care about writing clean, maintainable code and following good development practices.
          </p>

          <p className="text-label text-neutral-500">Coding since 2020</p>

        </div>

      </div>

    </Section>
  );
}