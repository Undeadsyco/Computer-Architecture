import Circut from "../../Circuit";
import { drawLine } from "../../../../utilities";
import Canvas from "../../../../canvas";

export default class AND extends Circut {

  static calculateOutput([A, B]) {
    return A && B ? 1 : 0;
  }

  #radius;
  #stepA = 0.0;
  #stepB = 0.0;
  #stepC = 0.0;

  constructor(x, y, inputs) {
    super(x, y, 100, 60, inputs, AND.calculateOutput(inputs));
    this.#radius = (this.width * 0.33) - 2;

    this.inputPos = [
      [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] - this.#radius + (this.height * 0.2)],
      [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] + this.#radius - (this.height * 0.2)],
    ];
    this.outputPos = [this.midPosition[0] + (this.width / 2), this.midPosition[1]];
  }

  update(ctx) {
    if (this.inputs[0] === 1 && this.#stepA < 1) this.#stepA += 0.01;
    else if (this.#stepA > 0) this.#stepA -= 0.01;

    if (this.inputs[1] === 1 && this.#stepB < 1) this.#stepB += 0.01;
    else if (this.#stepB > 0) this.#stepB -= 0.01;

    if (this.output === 1 && this.#stepC < 1) this.#stepC += 0.01;
    else if (this.#stepC > 0) this.#stepC -= 0.01;

    this.draw(ctx);
  }

  draw(ctx) {
    if (this.outline) this.#drawOutline(ctx);
    this.#drawGate(ctx, this.#radius);
  }

  #drawGate(ctx) {
    // draw front arc
    ctx.beginPath();
    ctx.arc(this.midPosition[0], this.midPosition[1], this.#radius, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.lineTo(this.midPosition[0] - (this.width * 0.6) + this.#radius, this.midPosition[1] + this.#radius);
    ctx.lineTo(this.midPosition[0] - (this.width * 0.6) + this.#radius, this.midPosition[1] - this.#radius);
    ctx.closePath();

    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.strokeStyle = 'black';
    ctx.stroke();

    Canvas.drawGradientLine([
      [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] - this.#radius + (this.height * 0.2)],
      [this.midPosition[0] - (this.width * 0.6) + this.#radius, this.midPosition[1] - this.#radius + (this.height * 0.2)],
    ], this.#stepA);
    // // draw input line 2
    Canvas.drawGradientLine([
      [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] + this.#radius - (this.height * 0.2)],
      [this.midPosition[0] - (this.width * 0.6) + this.#radius, this.midPosition[1] + this.#radius - (this.height * 0.2)],
    ], this.#stepB);
    // // draw output line 
    Canvas.drawGradientLine([
      [this.midPosition[0] + this.#radius, this.midPosition[1]],
      [this.midPosition[0] + (this.width / 2), this.midPosition[1]]
    ], this.#stepC);
  }

  #drawOutline(ctx) {
    ctx.beginPath();
    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.inputs[0], this.inputPos[0][0] - 10, this.inputPos[0][1] + 6);
    ctx.fillText(this.inputs[1], this.inputPos[1][0] - 10, this.inputPos[1][1] + 6);
    ctx.fillText(this.output, this.outputPos[0], this.outputPos[1] + 6);
    // ctx.fill();

    ctx.rect(this.cordinates[0][0], this.cordinates[0][1], this.cordinates[1][0], this.cordinates[1][1]);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}
