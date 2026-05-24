"use client";
import { useState } from "react";
import { Project } from "../../type";
import Carousel from "../UI/carousel/Carousel";
import TechPills from "./TechPills";
import ProjectText from "./ProjectText";
import { FaGithub } from "react-icons/fa";

// displays a single project in the project list, with an image carousel on the right and description on the left (on desktop), 
// and tech pills below (full span on desktop)
type Props = {
  project: Project;
};

export default function ProjectItem({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={project.id}
      className="
        grid md:grid-cols-2 gap-10 py-10 border-b border-white/30 mb-10
      "
    >
      {/* left: description */}
      <ProjectText
        project={project}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />

      {/* right: image */}
      <div className="space-y-4">
        <div className="h-60 md:h-80 rounded-xl overflow-hidden">
          <Carousel images={project.images} size="lg" />
        </div>

        {/* github link */}
        <div className="flex items-center gap-3 text-neutral-400">
          {project.githubLink ? (
            <>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hover:text-blue-400 transition-colors
                  hover:cursor-pointer
                "
              >
                <FaGithub size={25} />
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  underline underline-offset-4 break-all
                  hover:text-blue-400 transition-colors
                "
              >
                {project.githubLink}
              </a>
            </>
          ) : (
            <>
              <FaGithub size={25} className="text-neutral-500" />
              <span className="text-body text-neutral-500">N/A</span>
            </>
          )}
        </div>
      </div>

      {/* bottom (full span on desktop): tech pills */}
      <div className="md:col-span-2 mt-2">
        <TechPills tech={project.technologies} />
      </div>
    </div>
  );
}