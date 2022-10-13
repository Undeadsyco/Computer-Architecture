import dualInputGate from "./dualInputGate";
import NOT from './NOTgate';
import AND from './ANDgate';
import OR from './ORgate';
import { drawLine } from "../../utilities";

export default class XOR extends dualInputGate {

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
    
    // draw line from NOTgate 1 output to ANDgate 1 inputB
    drawLine(ctx, notGate1.output === 1 ? 'red' : 'black', [
      { x: notGate1.inputPositions.output.x, y: notGate1.inputPositions.output.y },
      { x: andGate1.inputPositions.inputB.x, y: andGate1.inputPositions.inputB.y },
    ]);

    // draw line from NOTgate 2 output to ANDgate 2 inputA
    drawLine(ctx, notGate2.output === 1 ? 'red' : 'black', [
      { x: notGate2.inputPositions.output.x, y: notGate2.inputPositions.output.y },
      { x: andGate2.inputPositions.inputA.x, y: andGate2.inputPositions.inputA.y },
    ]);

    // draw line from ANDgate 1 output to ORgate inputA
    drawLine(ctx, andGate1.output === 1 ? 'red' : 'black', [
      { x: andGate1.inputPositions.output.x, y: andGate1.inputPositions.output.y },
      { x: orGate.inputPositions.inputA.x, y: orGate.inputPositions.inputA.y },
    ]);

    // draw line from ANDgate 2 output to ORgate inputB
    drawLine(ctx, andGate2.output === 1 ? 'red' : 'black', [
      { x: andGate2.inputPositions.output.x, y: andGate2.inputPositions.output.y },
      { x: orGate.inputPositions.inputB.x, y: orGate.inputPositions.inputB.y },
    ]);

    // draw line from inputA to ANDgate 1 inputA
    drawLine(ctx, this.inputA === 1 ? 'red' : 'black', [
      { x: x - (width * 0.5) + 20, y: y - (height * 0.25) },
      { x: x - (width * 0.5) + 20, y: y - (height * 0.4) },
      { x: andGate1.inputPositions.inputA.x, y: y - (height * 0.4) },
      { x: andGate1.inputPositions.inputA.x, y: andGate1.inputPositions.inputA.y },
    ]);

    // draw line from inputA to NOTgate 2 input
    drawLine(ctx, this.inputA === 1 ? 'red' : 'black', [
      { x: x - (width * 0.5) + 10, y: y - (height * 0.25) },
      { x: x - (width * 0.5) + 30, y: y - (height * 0.25) },
      { x: x - (width * 0.5) + 30, y: notGate2.inputPositions.input.y },
      { x: notGate2.inputPositions.input.x, y: notGate2.inputPositions.input.y },
    ]);

    // draw line from inputB to ANDgate 2 inputB
    drawLine(ctx, this.inputB === 1 ? 'red' : 'black', [
      { x: x - (width * 0.5) + 10, y: y + (height * 0.25) },
      { x: x - (width * 0.5) + 30, y: y + (height * 0.25) },
      { x: x - (width * 0.5) + 30, y: y + (height * 0.4) },
      { x: andGate2.inputPositions.inputB.x, y: y + (height * 0.4) },
      { x: andGate2.inputPositions.inputB.x, y: andGate2.inputPositions.inputB.y },
    ]);

    // draw line from inputB to NOTgate 1 input
    drawLine(ctx, this.inputB === 1 ? 'red' : 'black', [
      { x: x - (width * 0.5) + 20, y: y + (height * 0.25) },
      { x: x - (width * 0.5) + 20, y: notGate1.inputPositions.input.y },
      { x: notGate1.inputPositions.input.x, y: notGate1.inputPositions.input.y },
    ]);

    // draw line from ORgate output to output
    drawLine(ctx, this.output === 1 ? 'red' : 'black', [
      { x: orGate.inputPositions.output.x, y: orGate.inputPositions.output.y },
      { x: orGate.inputPositions.output.x + 20, y: orGate.inputPositions.output.y },
    ]);

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
