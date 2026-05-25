import { TimelineItem } from "@/app/types/timeline";

type TimelineProps = {
  items: TimelineItem[];
  showLegend?: boolean;
};

const LEGEND = [
  { type: "work",      color: "bg-blue-500",   label: "Work" },
  { type: "volunteer", color: "bg-purple-400",  label: "Volunteer" },
  { type: "education", color: "bg-neutral-500", label: "Education" },
] as const;

type ExperienceType = typeof LEGEND[number]["type"];

const colorMap = Object.fromEntries(
  LEGEND.map(({ type, color }) => [type, color])
) as Record<ExperienceType, string>;


// timeline slider which displays items on the left or right of a
//  central spine, alternating as you go down.
// On mobile it becomes a single column with a left-aligned spine
// and dots for each item. The color of the dot is determined by the experience type (work, volunteer, education).
export default function Timeline({ items, showLegend=false }: TimelineProps) {
  return (
    <div className="relative">

      {/* ── LEGEND ── */}
      {showLegend && (
        <div className="flex items-center gap-5 mb-15 md:mb-12 md:justify-end">
          {LEGEND.map(({ type, color, label }) => (
            <div key={type} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${color} shrink-0`} />
              <span className="text-label uppercase text-neutral-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Desktop center spine */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/15" />

      {/* Mobile spine) */}
      <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-white/10" />

      <div className="space-y-20 md:space-y-24">

        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          // determine color based on experience type
          const color = colorMap[item.experienceType as ExperienceType] ?? "bg-neutral-500";

          return (
            <div key={index} className="relative">

              {/* DOT (desktop center) */}
              <div
                className={`
                  hidden md:block
                  absolute left-1/2 top-6 -translate-x-1/2
                  w-5 h-5 rounded-full ${color} z-10
                `}
              />

              <div
                className={`
                  flex flex-col md:flex-row md:items-start
                  ${isLeft ? "md:justify-start" : "md:justify-end"}
                `}
              >

                {/* CONTENT */}
                <div
                  className={`
                    relative
                    md:w-[45%]
                    pl-8 md:pl-0
                    ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}
                  `}
                >

                  {/* MOBILE DOT */}
                  <div
                    className={`
                      md:hidden absolute left-4 top-2 -translate-x-1/2
                      w-2.5 h-2.5 rounded-full ${color}
                    `}
                  />

                  {/* DATE */}
                  <p className="text-label tracking-[0.3em] uppercase text-neutral-500">
                    {item.date}
                  </p>

                  {/* spacing separator */}
                  <div className="mt-3 mb-4 border-b border-white/80" />

                  {/* TITLE */}
                  <h3 className="text-body md:text-2xl font-medium mt-2 text-white">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-neutral-400 mt-3 leading-relaxed text-body-small">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}