
import Circut from "../../Circuit";
import { drawLine } from "../../../../utilities";
import Canvas from "../../../../canvas";

export default class NOT extends Circut {

  static invert(input) {
    return input === 1 ? 0 : 1;
  }

  #stepA = 0.0;
  #stepB = 0.0;

  constructor(x, y, input) {
    super(x, y, 100, 60, [input], NOT.invert(input));
    this.inputPos = [this.midPosition[0] - (this.width * 0.5), this.midPosition[1]];
    this.outputPos = [this.midPosition[0] + (this.width * 0.5), this.midPosition[1]];
  }

  update(ctx) {
    if (this.inputs[0] === 1 && this.#stepA < 1) this.#stepA += 0.01;
    else if (this.#stepA > 0) this.#stepA -= 0.01;

    if (this.output === 1 && this.#stepB < 1) this.#stepB += 0.01;
    else if (this.#stepB > 0) this.#stepB -= 0.01

    this.draw(ctx);
  }

  draw(ctx) {
    this.#drawGate(ctx);
    if (this.outline) this.#drawOutline(ctx);
  }

  #drawGate(ctx) {
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'black';

    ctx.beginPath();
    ctx.moveTo(this.midPosition[0] - (this.width * 0.25), this.midPosition[1]);
    ctx.lineTo(this.midPosition[0] - (this.width * 0.25), this.midPosition[1] - (this.height * 0.5));
    ctx.lineTo(this.midPosition[0] + (this.width * 0.3), this.midPosition[1]);
    ctx.lineTo(this.midPosition[0] - (this.width * 0.25), this.midPosition[1] + (this.height * 0.5));
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    // draw input line
    Canvas.drawGradientLine([
      [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] ],
      [this.midPosition[0] - (this.width * 0.25), this.midPosition[1] ],
    ], this.#stepA);

    // draw output line
    Canvas.drawGradientLine([
      [this.midPosition[0] + (this.width * 0.25), this.midPosition[1] ],
      [this.midPosition[0] + (this.width * 0.5), this.midPosition[1] ],
    ], this.#stepB);
  }

  #drawOutline(ctx) {
    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.inputs[0], this.inputPos[0] - 10, this.inputPos[1] + 6);
    ctx.fillText(this.output, this.outputPos[0], this.outputPos[1] + 6);

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.rect(this.cordinates[0][0], this.cordinates[0][1], this.cordinates[1][0], this.cordinates[1][1]);
    ctx.stroke();
  }
}
