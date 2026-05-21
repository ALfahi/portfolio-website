"use client";
import { useEffect, useRef } from "react";
import { initPhysics } from "@/app/logic/matter/scenes/physicsSkillsScene";

// component that renders the physics simulation for the skills section. It takes a resetKey prop that is used to reset the simulation when it changes.
export default function PhysicsSkills({ resetKey }: { resetKey: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const instance = initPhysics({canvas: canvasRef.current, container: containerRef.current});

    return () => instance.destroy();
  }, [resetKey]);

  return (
    <>
      <div
        ref={containerRef}
        className="w-full h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-white/5"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </>
  );
}