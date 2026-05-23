import { projects } from "@/app/data/sections/projects";
import ProjectItem from "./ProjectItem";

// stores the list of projects and renders them as a list of ProjectItem components
export default function ProjectList() {
  return (
    <section className="max-w-5xl mx-auto px-6">

      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}

    </section>
  );
}