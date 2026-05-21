import Matter from "matter-js";

// function to create the mouse constraint, which allows the user to interact with the physics simulation by dragging and dropping the skill pills.
export function createMouse(engine: Matter.Engine, canvas: HTMLCanvasElement) {
  const mouse = Matter.Mouse.create(canvas);

  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.22,
      damping: 0.2,
      render: { visible: false },
    },
  });

  Matter.World.add(engine.world, mouseConstraint);

  return mouseConstraint;
}