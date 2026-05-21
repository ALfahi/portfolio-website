import Matter from "matter-js";
import { SKILL_GROUPS } from "@/app/data/sections/skills";

// function to create our actual pills thmselves
export function createPills(world: Matter.World, W: number, H: number) {
  const pills: any[] = [];

  // dynamic sizes depending on screen size
  const ph = W > 900 ? 40 : 36;
  const charW = W > 900 ? 10.5 : 9.5;
  const paddingX = W > 900 ? 52 : 44;

  SKILL_GROUPS.forEach((group: any) => {
    group.items.forEach((skill: string) => {
      const pw = skill.length * charW + paddingX;

      const x = Math.random() * (W * 0.8) + W * 0.1;
      const y = Math.random() * (H * 0.4) + 40;

      const body = Matter.Bodies.rectangle(x, y, pw, ph, {
        restitution: 0.4,
        friction: 0.25,
        frictionAir: 0.04,
        chamfer: { radius: ph / 2 },
      });

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2,
        y: Math.random() * 2,// bias it downwards so they fall into the screen more often
      });

      pills.push({ body, label: skill, color: group.color, w: pw, h: ph });
    });
  });

  Matter.World.add(world, pills.map(p => p.body));
  return pills;
}