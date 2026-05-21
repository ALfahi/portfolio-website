import Matter from "matter-js";
// function to create the physics engine.
export function createEngine() {
  const engine = Matter.Engine.create();
  engine.gravity.y = 0.6;
  engine.gravity.scale = 0.001;

  return engine;
}