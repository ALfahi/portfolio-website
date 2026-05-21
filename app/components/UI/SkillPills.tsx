import { SKILL_GROUPS } from "@/app/data/sections/skills";
// static version of the skill pills, just renders the pills without any physics. Used as a fallback for devices that don't support the physics simulation and as the default view for the skills section.
export default function SkillPills() {
  return (
    <div className="space-y-10">
      {SKILL_GROUPS.map((group) => (
        <div key={group.label}>
          <h3 className="text-white/60 mb-3">
            {group.label}
          </h3>

          <div className="flex flex-wrap gap-3">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-mono border"
                style={{
                  background: group.color.bg,
                  borderColor: group.color.border,
                  color: group.color.text,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}