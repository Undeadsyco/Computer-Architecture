import { twoInputGate } from "./gates";
import { drawLine } from "../../utilities";

export default class AND extends twoInputGate {

  static calculateOutput(A, B) {
    return A && B ? 1 : 0;
  }
  
  constructor(inputA, inputB, x, y) {
    super(inputA, inputB, inputA && inputB ? 1 : 0);
    this.x = x;
    this.y = y;
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

  draw(ctx, xStart, yStart, width = 100, height = 60) {
    const radius = (width * 0.33) - 2, offset = 15;
    ctx.beginPath();
    // draw front arc
    ctx.arc(xStart, yStart, radius, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.lineTo(xStart - (width * 0.6) + radius, yStart + radius);
    ctx.lineTo(xStart - (width * 0.6) + radius, yStart - radius);
    ctx.closePath();

    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.inputA, xStart - (width * 0.6) + radius + 5, yStart - radius + (height * 0.2) + 6, 100);
    ctx.fillText(this.inputB, xStart - (width * 0.6) + radius + 5, yStart + radius - (height * 0.2) + 6, 100);
    ctx.fillText(this.output, xStart + radius - offset, yStart + 6, 100);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // draw input line 1
    drawLine(ctx, this.inputA === 1 ? 'red' : 'black', [
      { x: xStart - (width * 0.6) + radius, y: yStart - radius + (height * 0.2) },
      { x: xStart - (width * 0.5), y: yStart - radius + (height * 0.2) },
    ]);
    // // draw input line 2
    drawLine(ctx, this.inputB === 1 ? 'red' : 'black', [
      { x: xStart - (width * 0.6) + radius, y: yStart + radius - (height * 0.2) },
      { x: xStart - (width * 0.5), y: yStart + radius - (height * 0.2) }
    ]);
    // // draw output line 
    drawLine(ctx, this.output, [
      { x: xStart + radius, y: yStart },
      { x: xStart + (width / 2), y: yStart }
    ]);

    this.inputPositions = {
      inputA: { x: xStart - (width * 0.5), y: yStart - radius + (height * 0.2) },
      inputB: { x: xStart - (width * 0.5), y: yStart + radius - (height * 0.2) },
      output: { x: xStart + (width / 2), y: yStart }
    }
  }
}
