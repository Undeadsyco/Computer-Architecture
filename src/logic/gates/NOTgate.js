import { drawLine } from "../../utilities";
import singleInputGate from "./singleInputGate";

export default class NOT extends singleInputGate {

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

  draw(ctx) {
    this.#drawGate(ctx);
    if (this.outline) this.#drawOutline(ctx);

    this.inputPosition = { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y }
    this.outputPosition = { x: this.midPosition.x + (this.width * 0.5), y: this.midPosition.y };
  }

  #drawGate(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.midPosition.x - (this.width * 0.25), this.midPosition.y);
    ctx.lineTo(this.midPosition.x - (this.width * 0.25), this.midPosition.y - (this.height * 0.5));
    ctx.lineTo(this.midPosition.x + (this.width * 0.3), this.midPosition.y);
    ctx.lineTo(this.midPosition.x - (this.width * 0.25), this.midPosition.y + (this.height * 0.5));
    ctx.closePath();

    ctx.fillStyle = 'blue';
    ctx.fill();

    ctx.strokeStyle = 'black';
    ctx.stroke();

    // draw input line
    drawLine(ctx, this.input === 1 ? 'red' : 'black', [
      { x: this.midPosition.x - (this.width * 0.25), y: this.midPosition.y },
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y },
    ]);

    // draw output line
    drawLine(ctx, this.output === 1 ? 'red' : 'black', [
      { x: this.midPosition.x + (this.width * 0.25), y: this.midPosition.y },
      { x: this.midPosition.x + (this.width * 0.5), y: this.midPosition.y },
    ]);
  }

  #drawOutline(ctx) {
    const offset = 15;

    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.input, this.inputPosition.x - 10, this.inputPosition.y + 6);
    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);

    ctx.rect(this.gatePosition[0].x, this.gatePosition[0].y, this.gatePosition[1].x, this.gatePosition[1].y);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}
