"use client";
import { useCallback, useState } from "react";
import GlassSection from "../../UI/GlassSection";
import PhysicsSkills from "../../UI/PhysicSkills";
import SkillPills from "../../UI/SkillPills";

// section to show off skills, with two modes: static pills and physics simulation with the skill pills as draggable objects.
export default function Skills() {
  const [mode, setMode] = useState< "static" | "physics">("static");
  const [resetKey, setResetKey] = useState(1);// used to reset the physics simulation

  const handleReset = useCallback(() => {
    setResetKey((prev => prev * -1));// we want to oscillate the key, (not increment in case off chance of overflow)
  }, []);

  return (
    <GlassSection id="skills">
      <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
        <h2 className="text-5xl font-semibold">
          Skills
        </h2>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setMode("static")}
            className={`
              px-4 py-2 rounded-xl text-sm font-mono border transition-all duration-200
              ${
                mode === "static"
                  ? "bg-blue-500/20 border-blue-400/40 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.25)] scale-[1.02]"
                  : "border-white/10 text-white/40 hover:text-white/70 hover:border-white/20"
              }
            `}
          >
            Static
          </button>

          <button
            onClick={() => setMode("physics")}
            className={`
              px-4 py-2 rounded-xl text-sm font-mono border transition-all duration-200
              ${
                mode === "physics"
                  ? "bg-blue-500/20 border-blue-400/40 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.25)] scale-[1.02]"
                  : "border-white/10 text-white/40 hover:text-white/70 hover:border-white/20"
              }
            `}
          >
            Physics
          </button>

          {mode === "physics" && (
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-white/60 hover:text-white transition"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {mode === "static" ? (
        <SkillPills />
      ) : (
        <PhysicsSkills resetKey={resetKey} />
      )}
    </GlassSection>
  );
}