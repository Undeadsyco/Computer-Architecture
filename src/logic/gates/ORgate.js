import { drawLine } from "../../utilities";
import { twoInputGate } from "./gates";

export default class OR extends twoInputGate {

  static calculateOutput(A, B) {
    return A || B ? 1 : 0;
  }
  constructor(inputA, inputB) {
    super(inputA, inputB, inputA || inputB ? 1 : 0);
  }

  render(parent) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 80;
    canvas.setAttribute('style', 'border: 2px solid black;');

    this.x = (canvas.width * .5);
    this.y = canvas.height / 2;

    parent.append(canvas);
    this.draw(ctx, canvas.width, canvas.height);
  }

  draw(ctx, x, y, width = 100, height = 60) {
    const radius = (width * 0.35) - 2;

    ctx.beginPath();
    ctx.arc(x - (width / 2), y, radius, Math.PI * 1.70, Math.PI * 0.30, false);
    ctx.lineTo(x + (width * 0.25) + 8, y);
    ctx.closePath();

    ctx.fillStyle = 'green';
    ctx.fill();

    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.inputA, x - (width * 0.25) + 8, y - (height / 5) + 6);
    ctx.fillText(this.inputB, x - (width * 0.25) + 8, y + (height / 5) + 6);
    ctx.fillText(this.output, x + (width * 0.25) - 12, y + 6);

    ctx.strokeStyle = 'black';
    ctx.stroke();

    // draw input line 1
    drawLine(ctx, this.inputA === 1 ? 'red' : 'black', [
      { x: x - (width * 0.25) + 5, y: y - (height / 5) },
      { x: x - (width * 0.5), y: y - (height / 5)}
    ]);
    // draw input line 2
    drawLine(ctx, this.inputB === 1 ? 'red' : 'black', [
      { x: x - (width * 0.25) + 5, y: y + (height / 5) },
      { x: x - (width * 0.5), y: y + (height / 5)},
    ]);
    // draw output line
    drawLine(ctx, this.output, )
    if (this.output === 1) ctx.strokeStyle = 'red';
    else ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x + (width * 0.25), y);
    ctx.lineTo(x + (width * 0.5), y);
    ctx.stroke();

    this.inputPositions = {
      inputA: { x: x - (width * 0.5), y: y - (height / 5) },
      inputB: { x: x - (width * 0.5), y: y + (height / 5) },
      output: { x: x + (width * 0.5), y }
    }
  }
}
