"use client";
import {useCallback, useState } from "react";
import SkillPills from "@/app/components/UI/SkillPills";
import PhysicsSkills from "@/app/components/UI/PhysicSkills";
import GlassSection from "../../layout/GlassSection";

// section to show off skills, with two modes: static pills and physics simulation with the skill pills as draggable objects.
export default function Skills() {
  const [mode, setMode] = useState<"static" | "interactive">("static");
  const [resetKey, setResetKey] = useState(1);// used to reset the physics simulation

  const handleReset = useCallback(() => {
    setResetKey((prev => prev * -1));// we want to oscillate the key, (not increment in case off chance of overflow)
  }, []);

  return (
    <GlassSection id="skills">

      <div className="flex justify-between items-end mb-16">

        <h2 className="text-5xl md:text-6xl font-medium">
          Skills
        </h2>

        <div className="flex gap-6 text-sm text-neutral-500">
          <button
            onClick={() => setMode("static")}
            className={mode === "static" ? "text-white" : ""}
          >
            Overview
          </button>

          <button
            onClick={() => setMode("interactive")}
            className={mode === "interactive" ? "text-white" : ""}
          >
            Explore
          </button>
          {mode === "interactive" && (
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-white/60 hover:text-white transition"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {mode === "static" ? <SkillPills /> : <PhysicsSkills resetKey={resetKey} />}

    </GlassSection>
  );
}