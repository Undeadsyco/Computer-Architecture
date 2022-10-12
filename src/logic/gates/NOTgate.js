import { singleInputGate } from "./gates";

export default class NOT extends singleInputGate {
  constructor(input) {
    super(input, input ? 0 : 1);
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
    this.draw(ctx, canvas.width, canvas.height, (canvas.width * 0.33) - 2);
  }

  draw(ctx, xStart, yStart, width = 100, height = 60) {
    const offset = 15;
    ctx.beginPath();
    ctx.moveTo(xStart - (width * 0.25), yStart);
    ctx.lineTo(xStart - (width * 0.25), yStart - (height * 0.5));
    ctx.lineTo(xStart + (width * 0.3), yStart);
    ctx.lineTo(xStart - (width * 0.25), yStart + (height * 0.5));
    ctx.closePath();

    ctx.moveTo(xStart - (width * 0.25), yStart);
    ctx.lineTo(xStart - (width * 0.5), yStart);

    ctx.moveTo(xStart + (width * 0.25), yStart);
    ctx.lineTo(xStart + (width * 0.5), yStart);

    ctx.fillStyle = 'blue';
    ctx.fill();

    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this._input, xStart - (width * 0.25) + 5, yStart + 6);
    ctx.fillText(this._output, xStart + (width * 0.25) - offset, yStart + 6);

    ctx.stroke();

    this.inputPositions = {
      input: { x: xStart - (width * 0.5), y: yStart },
      output: { x: xStart + (width * 0.5), y: yStart },
    }
  }
}
