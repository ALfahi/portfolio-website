import AnimatedPanel from "../components/layout/AnimatedPanel";
import FeaturedProjects from "./components/featuredProjects/FeaturedProjects";
import ProjectList from "./components/projectList/ProjectList";

export default function ProjectsPage() {
  return (
    <main className="text-white mt-4">
      <AnimatedPanel id="featured" direction={1}>
        <FeaturedProjects />
      </AnimatedPanel>
      <ProjectList/>

    </main>
  );
}