import GlassSection from "@/app/components/UI/GlassSection";
import Timeline from "@/app/components/UI/Timeline";

const educationData = [
  {
    title: "Queen Mary University of London",
    date: "2024 - Present",
    description: "BSc Computer Science",
  },
  {
    title: "The Palmer Catholic Academy",
    date: "2019 - 2024",
    description: "A Levels: A* A* A* (Maths, Further Maths, Computer Science)",
  },
];

export default function Education() {
  return (
    <GlassSection id="education">
      <h2 className="text-5xl font-semibold mb-14">
        Education
      </h2>

      <Timeline items={educationData} />
    </GlassSection>
  );
}