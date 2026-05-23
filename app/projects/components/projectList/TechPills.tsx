// this component just displays a string of words as pills, used for displaying technologies used in a project.

type Props = {
    tech: string[];// string of words.
};
  
export default function TechPills({ tech }: Props) {
    return (
        <div className="flex flex-wrap gap-2 mt-6">
        {tech.map((t) => (
            <span
            key={t}
            className="px-3 py-1 text-label rounded-full bg-white/10 text-white/70"
            >
            {t}
            </span>
        ))}

        </div>
    );
}