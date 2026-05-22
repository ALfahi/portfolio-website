import { TimelineItem } from "@/app/types/timeline";
type TimelineProps={
  items: TimelineItem[];
}

// timeline slider which displays items on the left or right of a
//  central spine, alternating as you go down. 
// On mobile it becomes a single column with a left-aligned spine 
// and dots for each item. The color of the dot is determined by the experience type (work, volunteer, education).
export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">

      {/* Desktop center spine */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15" />

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
                  w-3 h-3 rounded-full ${color} z-10
                `}
              />

              {/* MOBILE DOT + LINE */}
              <div className="md:hidden absolute left-0 top-2 w-px h-full bg-white/10" />

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
                  <p className="text-xs tracking-[0.3em] uppercase text-neutral-600">
                    {item.date}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-xl md:text-2xl font-medium mt-2 text-white">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-neutral-400 mt-3 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>

                  {/* spacing separator */}
                  <div className="mt-8 border-b border-white/5" />
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}