import { twoInputGate } from "./gates";
import NOT from './NOTgate';
import AND from './ANDgate';
import OR from './ORgate';

export default class XOR extends twoInputGate {

  static calculateOutput(A, B) {
    return (A && !B) || (!A && B) ? 1 : 0;
  }

  constructor(inputA, inputB) {
    super(inputA, inputB, (inputA && !inputB) || (!inputA && inputB) ? 1 : 0);
    this.outline = false;
  }

  render(parent) {
    const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');

    canvas.width = 200 * 2, canvas.height = (160 * 2) * 0.6;
    canvas.setAttribute('style', 'border: 2px solid black;');

    parent.append(canvas);

    this.draw(ctx, canvas.width * 0.5, canvas.height * 0.5);
  }

  draw(ctx, x, y, width = 400, height = 200) {
    if (this.outline) {
      ctx.beginPath();
      ctx.rect(x - (width * 0.5), y - (height * 0.5), width, height);
      ctx.stroke();
    }

    const xStart = x + (width * 0.3), yStart = y;

    const notGate1 = new NOT(this.inputB);
    notGate1.draw(ctx, xStart - (110 * 2), yStart - 35);
    const andGate1 = new AND(this.inputA, notGate1.output);
    andGate1.draw(ctx, xStart - 110, yStart - 35);

    const notGate2 = new NOT(this.inputA);
    notGate2.draw(ctx, xStart - (110 * 2), yStart + 35);
    const andGate2 = new AND(notGate2.output, this.inputB);
    andGate2.draw(ctx, xStart - 110, yStart + 35);

    const orGate = new OR(andGate1.output, andGate2.output);
    orGate.draw(ctx, xStart, yStart);

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    // TODO change drawing code to drawline function calls
    // draw line from NOTgate 1 output to ANDgate 1 inputB
    if (notGate1.output === 1) ctx.strokeStyle = 'red';
    else ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(notGate1.inputPositions.output.x, notGate1.inputPositions.output.y);
    ctx.lineTo(andGate1.inputPositions.inputB.x, andGate1.inputPositions.inputB.y);
    ctx.stroke();

    // draw line from NOTgate 2 output to ANDgate 2 inputA
    if (notGate2.output === 1) ctx.strokeStyle = 'red';
    else ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(notGate2.inputPositions.output.x, notGate2.inputPositions.output.y);
    ctx.lineTo(andGate2.inputPositions.inputA.x, andGate2.inputPositions.inputA.y);
    ctx.stroke();

    // draw line from ANDgate 1 output to ORgate inputA
    if (andGate1.output === 1) ctx.strokeStyle = 'red';
    else ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(andGate1.inputPositions.output.x, andGate1.inputPositions.output.y);
    ctx.lineTo(orGate.inputPositions.inputA.x, orGate.inputPositions.inputA.y);
    ctx.stroke();

    // draw line from ANDgate 2 output to ORgate inputB
    if (andGate2.output === 1) ctx.strokeStyle = 'red';
    else ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(andGate2.inputPositions.output.x, andGate2.inputPositions.output.y);
    ctx.lineTo(orGate.inputPositions.inputB.x, orGate.inputPositions.inputB.y);
    ctx.stroke();

    // draw line from inputA to ANDgate 1 inputA
    if (this.inputA === 1) ctx.strokeStyle = 'red';
    else ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x - (width * 0.5) + 20, y - (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 20, y - (height * 0.4));
    ctx.lineTo(andGate1.inputPositions.inputA.x, y - (height * 0.4));
    ctx.lineTo(andGate1.inputPositions.inputA.x, andGate1.inputPositions.inputA.y);
    ctx.stroke();

    // draw line from inputA to NOTgate 2 input
    if (this.inputA === 1) ctx.strokeStyle = 'red';
    else ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x - (width * 0.5) + 10, y - (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, y - (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, notGate2.inputPositions.input.y);
    ctx.lineTo(notGate2.inputPositions.input.x, notGate2.inputPositions.input.y);
    ctx.stroke();

    // draw line from inputB to ANDgate 2 inputB
    if (this.inputB === 1) ctx.strokeStyle = 'red';
    else ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x - (width * 0.5) + 10, y + (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, y + (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, y + (height * 0.4));
    ctx.lineTo(andGate2.inputPositions.inputB.x, y + (height * 0.4));
    ctx.lineTo(andGate2.inputPositions.inputB.x, andGate2.inputPositions.inputB.y);
    ctx.stroke();

    // draw line from inputB to NOTgate 1 input
    if (this.inputB === 1) ctx.strokeStyle = 'red';
    else ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x - (width * 0.5) + 20, y + (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 20, notGate1.inputPositions.input.y);
    ctx.lineTo(notGate1.inputPositions.input.x, notGate1.inputPositions.input.y);
    ctx.stroke();

    // draw line from ORgate output to output
    if (this.output === 1) ctx.strokeStyle = 'red';
    else ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(orGate.inputPositions.output.x, orGate.inputPositions.output.y);
    ctx.lineTo(orGate.inputPositions.output.x + 20, orGate.inputPositions.output.y);
    ctx.stroke();

    if (this.outline) {
      ctx.fillText(this.inputA, x - (width * 0.5), y - (height * 0.25) + 6);
      ctx.fillText(this.inputB, x - (width * 0.5), y + (height * 0.25) + 6);
      ctx.fillText(this.output, x + (width * 0.5) - 10, y + 6);
    }

    this.inputPositions = {
      inputA: { X: undefined, y: undefined },
      inputB: { X: undefined, y: undefined },
      output: { X: undefined, y: undefined },
    }
    this.position = {
      start: { x: x - (width * 0.5), y: y - (height * 0.5) },
      end: { x: x + (width * 0.5), y: y + (height * 0.5) }
    }
  }
}
