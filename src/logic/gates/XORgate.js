import { twoInputGate } from "./gates";
import NOT from './NOTgate';
import AND from './ANDgate';
import OR from './ORgate';

export default class XOR extends twoInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, (inputA && !inputB) || (!inputA && inputB) ? 1 : 0);
  }

  render(parent) {
    const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');

    canvas.width = 200 * 2, canvas.height = (160 * 2) * 0.6;
    canvas.setAttribute('style', 'border: 2px solid black;');

    parent.append(canvas);

    this.draw(ctx, canvas.width * 0.5, canvas.height * 0.5, canvas.width, canvas.height);
  }

  draw(ctx, x, y, width, height) {
    console.log(width * 0.5)
    ctx.beginPath();
    ctx.rect(x - (width * 0.5), y - (height * 0.5), width, height);

    ctx.stroke();

    const xStart = width * 0.8, yStart = height * 0.5;

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

    ctx.beginPath();
    // draw line from NOTgate 1 output to ANDgate 1 inputB
    ctx.moveTo(notGate1.inputPositions.output.x, notGate1.inputPositions.output.y);
    ctx.lineTo(andGate1.inputPositions.inputB.x, andGate1.inputPositions.inputB.y);
    
    // draw line from NOTgate 2 output to ANDgate 2 inputA
    ctx.moveTo(notGate2.inputPositions.output.x, notGate2.inputPositions.output.y);
    ctx.lineTo(andGate2.inputPositions.inputA.x, andGate2.inputPositions.inputA.y);

    // draw line from ANDgate 1 output to ORgate inputA
    ctx.moveTo(andGate1.inputPositions.output.x, andGate1.inputPositions.output.y);
    ctx.lineTo(orGate.inputPositions.inputA.x, orGate.inputPositions.inputA.y);
    
    // draw line from ANDgate 2 output to ORgate inputB
    ctx.moveTo(andGate2.inputPositions.output.x, andGate2.inputPositions.output.y);
    ctx.lineTo(orGate.inputPositions.inputB.x, orGate.inputPositions.inputB.y);
    
    // draw line from inputA to ANDgate 1 inputA
    ctx.moveTo(x - (width * 0.5) + 20, y - (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 20, y - (height * 0.4));
    ctx.lineTo(andGate1.inputPositions.inputA.x, y - (height * 0.4));
    ctx.lineTo(andGate1.inputPositions.inputA.x, andGate1.inputPositions.inputA.y);
    
    // draw line from inputA to NOTgate 2 input
    ctx.moveTo(x - (width * 0.5) + 10, y - (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, y - (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, notGate2.inputPositions.input.y);
    ctx.lineTo(notGate2.inputPositions.input.x, notGate2.inputPositions.input.y);
    
    // draw line from inputB to ANDgate 2 inputB
    ctx.moveTo(x - (width * 0.5) + 10, y + (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, y + (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, y + (height * 0.4));
    ctx.lineTo(andGate2.inputPositions.inputB.x, y + (height * 0.4));
    ctx.lineTo(andGate2.inputPositions.inputB.x, andGate2.inputPositions.inputB.y);

    // draw line from inputB to NOTgate 1 input
    ctx.moveTo(x - (width * 0.5) + 20, y + (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 20, notGate1.inputPositions.input.y);
    ctx.lineTo(notGate1.inputPositions.input.x, notGate1.inputPositions.input.y);
    
    // draw line from ORgate oitput to output
    ctx.moveTo(orGate.inputPositions.output.x, orGate.inputPositions.output.y);
    ctx.lineTo(orGate.inputPositions.output.x + 20, orGate.inputPositions.output.y);
    ctx.stroke();

    ctx.fillText(this.inputA, x - (width * 0.5), y - (height * 0.25) + 6);
    ctx.fillText(this.inputB, x - (width * 0.5), y + (height * 0.25) + 6);
    ctx.fillText(this.output, x + (width * 0.5) - 10, y + 6);
  }
}
