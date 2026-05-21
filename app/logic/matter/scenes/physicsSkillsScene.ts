import Matter from "matter-js";
import { createEngine } from "../engine";
import { renderScene } from "../renderer";
import { resizeScene } from "../resize";
import type { Pill } from "../types";
// controller for physcs skills scene.
type InitParams = {
  canvas: HTMLCanvasElement;
  container: HTMLDivElement;
};

export function initPhysics({ canvas, container}: InitParams) {
  const ctx = canvas.getContext("2d")!;

  const engine = createEngine();
  const world = engine.world;

  let pills: Pill[] = [];
  let walls: Matter.Body[] = [];
  let mouse: Matter.MouseConstraint | null = null;

  let raf = 0;

  const setPills = (p: Pill[]) => (pills = p);
  const setWalls = (w: Matter.Body[]) => (walls = w);
  const setMouse = (m: Matter.MouseConstraint) => (mouse = m);

  // we want to resize scene when window resizes
  const resize = () => {resizeScene({ engine, world, canvas, container, mouseConstraint: mouse, setPills, setWalls, setMouse,});};

  const loop = () => {
    Matter.Engine.update(engine, 1000 / 60);
    renderScene(ctx, pills);

    raf = requestAnimationFrame(loop);
  };

  // init
  resize();
  loop();

  window.addEventListener("resize", resize);

  return {
    destroy: () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);

      if (mouse) {
        Matter.World.remove(world, mouse);
      }

      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
    },
  };
}