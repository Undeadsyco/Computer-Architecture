import { DualInputGate } from "../GateStructure";
import { drawLine } from "../../../utilities";

export default class AND extends DualInputGate {

  static calculateOutput(A, B) {
    return A && B ? 1 : 0;
  }

  constructor(inputA, inputB, x, y) {
    super(inputA, inputB, AND.calculateOutput(inputA, inputB));
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

    this.midPosition.x = (canvas.width * .5);
    this.midPosition.y = (canvas.height / 2);

    parent.append(canvas);
    this.draw(ctx);
  }

  draw(ctx) {
    const radius = (this.width * 0.33) - 2;
    if (this.outline) this.#drawOutline(ctx, radius);
    this.#drawGate(ctx, radius);

    this.inputPositions = [
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y - radius + (this.height * 0.2) },
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y + radius - (this.height * 0.2) },
    ];
    this.outputPosition = { x: this.midPosition.x + (this.width / 2), y: this.midPosition.y };
  }

  #drawGate(ctx, radius) {
    // draw front arc
    ctx.beginPath();
    ctx.arc(this.midPosition.x, this.midPosition.y, radius, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.lineTo(this.midPosition.x - (this.width * 0.6) + radius, this.midPosition.y + radius);
    ctx.lineTo(this.midPosition.x - (this.width * 0.6) + radius, this.midPosition.y - radius);
    ctx.closePath();

    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.strokeStyle = 'black';
    ctx.stroke();

    drawLine(ctx, this.inputA === 1 ? 'red' : 'black', [
      { x: this.midPosition.x - (this.width * 0.6) + radius, y: this.midPosition.y - radius + (this.height * 0.2) },
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y - radius + (this.height * 0.2) },
    ]);
    // // draw input line 2
    drawLine(ctx, this.inputB === 1 ? 'red' : 'black', [
      { x: this.midPosition.x - (this.width * 0.6) + radius, y: this.midPosition.y + radius - (this.height * 0.2) },
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y + radius - (this.height * 0.2) }
    ]);
    // // draw output line 
    drawLine(ctx, this.output === 1 ? 'red' : 'black', [
      { x: this.midPosition.x + radius, y: this.midPosition.y },
      { x: this.midPosition.x + (this.width / 2), y: this.midPosition.y }
    ]);
  }



  #drawOutline(ctx) {
    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.inputA, this.inputPositions[0].x - 10, this.inputPositions[0].y + 6);
    ctx.fillText(this.inputB, this.inputPositions[1].x - 10, this.inputPositions[1].y + 6);
    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);

    ctx.beginPath();
    ctx.rect(this.gatePosition[0].x, this.gatePosition[0].y, this.gatePosition[1].x, this.gatePosition[1].y);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}
