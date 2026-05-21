import Matter from "matter-js";
import type { Pill } from "./types";
import { createWalls } from "./walls";
import { createPills } from "./pills";
import { createMouse } from "./mouse";

type ResizeParams = {
  engine: Matter.Engine;
  world: Matter.World;
  canvas: HTMLCanvasElement;
  container: HTMLDivElement;
  mouseConstraint: Matter.MouseConstraint | null;
  setPills: (p: Pill[]) => void;
  setWalls: (w: Matter.Body[]) => void;
  setMouse: (m: Matter.MouseConstraint) => void;
};

// function to resize the physics simulation when the window is resized.
export function resizeScene({ engine, world, canvas, container, mouseConstraint, setPills, setWalls, setMouse,}: ResizeParams) {
  const W = container.clientWidth;
  const H = container.clientHeight;

  canvas.width = W;
  canvas.height = H;

  Matter.World.clear(world, false);

  // rebuild physics objects
  const walls = createWalls(world, W, H);
  const pills = createPills(world, W, H);

  setWalls(walls);
  setPills(pills);

  // rebuild mouse (important for edge bugs + resize correctness)
  if (mouseConstraint) {
    Matter.World.remove(world, mouseConstraint);
  }

  const mouse = createMouse(engine, canvas);
  setMouse(mouse);

  return { W, H };
}