import ProjectItem from "./ProjectItem";
import { Project } from "../../type";

type Props = {
    projects: Project[]
};
// stores the list of projects and renders them as a list of ProjectItem components
export default function ProjectList({projects}: Props) {
  return (
    <section className="max-w-5xl mx-auto px-6">

      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}

    </section>
  );
}