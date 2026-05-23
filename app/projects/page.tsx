"use client";

import AnimatedPanel from "../components/layout/AnimatedPanel";
import FeaturedProjects from "./components/featuredProjects/FeaturedProjects";
import ProjectSection from "./components/pagination/ProjectSection";
import { usePagination } from "../hooks/UsePagination";

export default function ProjectsPage() {
  const {page,direction,goToPage, handleAnimationComplete,} = usePagination();

  return (
    <main className="text-white mt-4">

      <AnimatedPanel id="featured" direction={1}>
        <FeaturedProjects goToPage={goToPage} />
      </AnimatedPanel>

      <ProjectSection
        page={page}
        direction={direction}
        goToPage={goToPage}
        onAnimationComplete={handleAnimationComplete}
      />

    </main>
  );
}