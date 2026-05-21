import { Pill } from "./types";
import { roundRect } from "@/app/utils/canvas";

export function renderScene(ctx: CanvasRenderingContext2D, pills: Pill[]) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  pills.forEach(({ body, label, color, w, h }) => {
    const { x, y } = body.position;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(body.angle);

    const r = h / 2;

    roundRect(ctx, -w / 2, -h / 2, w, h, r);
    ctx.fillStyle = color.bg;
    ctx.fill();

    roundRect(ctx, -w / 2, -h / 2, w, h, r);
    ctx.strokeStyle = color.border;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = color.text;
    ctx.font = `bold ${h < 38 ? 12 : 13}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, 0, 0);

    ctx.restore();
  });
}