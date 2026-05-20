import { TimelineItem } from "@/app/types/timeline";

type TimelineProps={
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="border-l border-white/10 pl-10 space-y-14">

      {items.map((item, index) => (
        <div key={index} className="relative">

          {/* DOT */}
          <div
            className={`
              absolute -left-[42px] top-1 w-4 h-4 rounded-full
              ${index === 0 ? "bg-blue-500" : "bg-neutral-600"}
            `}
          />

          {/* DATE */}
          <p className="text-neutral-500 text-sm">
            {item.date}
          </p>

          {/* TITLE */}
          <h3 className="text-2xl font-medium mt-1">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-neutral-400 mt-3 leading-relaxed">
            {item.description}
          </p>

        </div>
      ))}

    </div>
  );
}