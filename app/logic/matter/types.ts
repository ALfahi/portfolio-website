import Matter from "matter-js";

export type Pill = {
    body: Matter.Body;
    label: string;
    w: number;
    h: number;
    color: {
      bg: string;
      border: string;
      text: string;
    };
    scale: number;
  };