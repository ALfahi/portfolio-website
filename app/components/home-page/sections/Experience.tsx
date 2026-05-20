import GlassSection from "@/app/components/UI/GlassSection";
import Timeline from "@/app/components/UI/Timeline";

const workExperience = [
  {
    title: "Graphic Design Intern",
    date: "2023",
    description:
      "Created branding materials and print designs for small businesses using Adobe tools.",
  },
];

const volunteering = [
  {
    title: "Academic Coaching (Volunteer)",
    date: "2022 - 2024",
    description:
      "Tutored GCSE students in mathematics, improving confidence and grades.",
  },
];

const jobs = [
  {
    title: "Lab Demonstrator (Queen Mary University of London)",
    date: "2025 - Present",
    description:
      "todo",
  },
];

export default function Experience() {
  return (
    <GlassSection id="experience">

      <h2 className="text-5xl font-semibold mb-14">
        Experience
      </h2>

      <div className="space-y-16">

        {/* JOBS */}
        <div>
          <h3 className="text-2xl text-blue-400 mb-6">
            Jobs
          </h3>
          <Timeline items={jobs} />
        </div>

        {/* WORK EXPERIENCE */}
        <div>
          <h3 className="text-2xl text-blue-400 mb-6">
            Work Experience
          </h3>
          <Timeline items={workExperience} />
        </div>

        {/* VOLUNTEERING */}
        <div>
          <h3 className="text-2xl text-blue-400 mb-6">
            Volunteering
          </h3>
          <Timeline items={volunteering} />
        </div>

      </div>

    </GlassSection>
  );
}