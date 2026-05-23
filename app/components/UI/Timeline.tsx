import { TimelineItem } from "@/app/types/timeline";
type TimelineProps = {
  items: TimelineItem[];
};

// timeline slider which displays items on the left or right of a
//  central spine, alternating as you go down.
// On mobile it becomes a single column with a left-aligned spine
// and dots for each item. The color of the dot is determined by the experience type (work, volunteer, education).
export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">

      {/* Desktop center spine */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/15" />

      {/* Mobile spine) */}
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-white/10" />

      <div className="space-y-20 md:space-y-24">

        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          // determine color based on experience type
          const color =
            item.experienceType === "work"
              ? "bg-blue-500"
              : item.experienceType === "volunteer"
              ? "bg-purple-400"
              : "bg-neutral-500";

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
                    pl-6 md:pl-0
                    ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}
                  `}
                >

                  {/* MOBILE DOT */}
                  <div
                    className={`
                      md:hidden absolute left-[-6px] top-2
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