import { Project } from "../../type";
// a component to display the text of a project, with a read more button to expand the text if it is too long
type Props = {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
};

export default function ProjectText({project,expanded,onToggle,}: Props) {
  return (
    <div>

      <h2 className="text-body font-semibold">
        {project.title}
      </h2>

      <p className="mt-4 text-body-small text-neutral-400">
        {expanded
          ? project.description
          : project.description.slice(0, 140) + "..."}
      </p>

      <button
        onClick={onToggle}
        className="mt-4 text-blue-400 hover:text-blue-300"
      >
        {expanded ? "Show less" : "Read more"}
      </button>

    </div>
  );
}