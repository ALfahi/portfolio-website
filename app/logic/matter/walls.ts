import Matter from "matter-js";

// function to create the walls/ container to house our pills
export function createWalls(world: Matter.World, W: number, H: number) {
const pad = Math.min(40, W * 0.06);
const t = Math.max(80, W * 0.2);
  const walls = [
    Matter.Bodies.rectangle(W / 2, H + pad, W, t, { isStatic: true }),
    Matter.Bodies.rectangle(W / 2, -pad, W, t, { isStatic: true }),
    Matter.Bodies.rectangle(-pad, H / 2, t, H, { isStatic: true }),
    Matter.Bodies.rectangle(W + pad, H / 2, t, H, { isStatic: true }),
  ];

  Matter.World.add(world, walls);
  return walls;
}