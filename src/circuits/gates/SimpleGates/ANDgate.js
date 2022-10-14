import { DualInputGate } from "../GateStructure";
import { drawLine } from "../../../utilities";

export default class AND extends DualInputGate {

  static calculateOutput(A, B) {
    return A && B ? 1 : 0;
  }

  #radius;
  constructor(inputA, inputB, x, y) {
    super(inputA, inputB, AND.calculateOutput(inputA, inputB));
    this.#radius = (this.width * 0.33) - 2;
    this.midPosition = { x, y };
    this.gatePosition = [
      { x: x - (this.width / 2), y: y - (this.height / 2) },
      { x: this.width, y: this.height },
    ];

    this.inputPositions = [
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y - this.#radius + (this.height * 0.2) },
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y + this.#radius - (this.height * 0.2) },
    ];
    this.outputPosition = { x: this.midPosition.x + (this.width / 2), y: this.midPosition.y };
  }

  render(parent) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 80;
    canvas.setAttribute('style', 'border: 2px solid black;');

    this.midPosition.x = (canvas.width * .5);
    this.midPosition.y = (canvas.height / 2);

    parent.append(canvas);
    this.draw(ctx);
  }

  #stepA = 0.0;
  #stepB = 0.0;
  #stepC = 0.0;
  update(ctx) {
    if (this.inputA === 1 && this.#stepA < 1) this.#stepA += 0.01;
    else if (this.#stepA > 0) this.#stepA -= 0.01;

    if (this.inputB === 1 && this.#stepB < 1) this.#stepB += 0.01;
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
    ctx.arc(this.midPosition.x, this.midPosition.y, this.#radius, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.lineTo(this.midPosition.x - (this.width * 0.6) + this.#radius, this.midPosition.y + this.#radius);
    ctx.lineTo(this.midPosition.x - (this.width * 0.6) + this.#radius, this.midPosition.y - this.#radius);
    ctx.closePath();

    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.strokeStyle = 'black';
    ctx.stroke();

    drawLine(ctx, this.#stepA, [
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y - this.#radius + (this.height * 0.2) },
      { x: this.midPosition.x - (this.width * 0.6) + this.#radius, y: this.midPosition.y - this.#radius + (this.height * 0.2) },
    ]);
    // // draw input line 2
    drawLine(ctx, this.#stepB, [
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y + this.#radius - (this.height * 0.2) },
      { x: this.midPosition.x - (this.width * 0.6) + this.#radius, y: this.midPosition.y + this.#radius - (this.height * 0.2) },
    ]);
    // // draw output line 
    drawLine(ctx, this.#stepC, [
      { x: this.midPosition.x + this.#radius, y: this.midPosition.y },
      { x: this.midPosition.x + (this.width / 2), y: this.midPosition.y }
    ]);
  }



  #drawOutline(ctx) {
    ctx.beginPath();
    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.inputA, this.inputPositions[0].x - 10, this.inputPositions[0].y + 6);
    ctx.fillText(this.inputB, this.inputPositions[1].x - 10, this.inputPositions[1].y + 6);
    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);
    // ctx.fill();

    ctx.rect(this.gatePosition[0].x, this.gatePosition[0].y, this.gatePosition[1].x, this.gatePosition[1].y);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}
