import { SingleInputGate } from "../GateStructure";
import { drawLine } from "../../../utilities";

export default class NOT extends SingleInputGate {

  static invert(input) {
    return input === 1 ? 0 : 1;
  }
  constructor(input, x, y) {
    super(input, NOT.invert(input));
    this.midPosition = { x, y };
    this.gatePosition = [
      { x: x - (this.width / 2), y: y - (this.height / 2) },
      { x: this.width, y: this.height },
    ]
  }

  render(parent) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 80;
    canvas.setAttribute('style', 'border: 2px solid black;');

    this.x = (canvas.width * .5);
    this.y = (canvas.height / 2);

    parent.append(canvas);
    this.draw(ctx, canvas.width, canvas.height, (canvas.width * 0.33) - 2);
  }

  #stepA = 0.0;
  #stepB = 0.0;
  update(ctx) {
    if (this.input === 1 && this.#stepA < 1) this.#stepA += 0.01;
    else if (this.#stepA > 0) this.#stepA -= 0.01;

    if (this.output === 1 && this.#stepB < 1) this.#stepB += 0.01;
    else if (this.#stepB > 0) this.#stepB -= 0.01

    this.draw(ctx);
  }

  draw(ctx) {
    this.#drawGate(ctx);
    if (this.outline) this.#drawOutline(ctx);

    this.inputPosition = { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y }
    this.outputPosition = { x: this.midPosition.x + (this.width * 0.5), y: this.midPosition.y };
  }

  #drawGate(ctx) {
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'black';

    ctx.beginPath();
    ctx.moveTo(this.midPosition.x - (this.width * 0.25), this.midPosition.y);
    ctx.lineTo(this.midPosition.x - (this.width * 0.25), this.midPosition.y - (this.height * 0.5));
    ctx.lineTo(this.midPosition.x + (this.width * 0.3), this.midPosition.y);
    ctx.lineTo(this.midPosition.x - (this.width * 0.25), this.midPosition.y + (this.height * 0.5));
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    // draw input line
    drawLine(ctx, this.#stepA, [
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y },
      { x: this.midPosition.x - (this.width * 0.25), y: this.midPosition.y },
    ]);

    // draw output line
    drawLine(ctx, this.#stepB, [
      { x: this.midPosition.x + (this.width * 0.25), y: this.midPosition.y },
      { x: this.midPosition.x + (this.width * 0.5), y: this.midPosition.y },
    ]);
  }

  #drawOutline(ctx) {
    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.input, this.inputPosition.x - 10, this.inputPosition.y + 6);
    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.rect(this.gatePosition[0].x, this.gatePosition[0].y, this.gatePosition[1].x, this.gatePosition[1].y);
    ctx.stroke();
  }
}
