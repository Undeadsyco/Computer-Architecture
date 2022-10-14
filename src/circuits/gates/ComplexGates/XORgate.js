import { DualInputComplexGate } from "../GateStructure";
import { NOT, AND, OR } from '../SimpleGates';
import { drawLine } from "../../../utilities";

export default class XOR extends DualInputComplexGate {

  static calculateOutput(A, B) {
    return (A && !B) || (!A && B) ? 1 : 0;
  }

  constructor(inputA, inputB, x, y) {
    super(inputA, inputB, XOR.calculateOutput(inputA, inputB), 400, 200);
    this.midPosition = { x, y };
    this.gatePosition = [
      { x: x - (this.width / 2), y: y - (this.height / 2) },
      { x: this.width, y: this.height },
    ];
    this.#createComponentGates();
    this.inputPositions = [
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y - (this.height * 0.33) },
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y + (this.height * 0.33) },
    ];
    this.outputPosition = { x: this.gates[4].outputPosition.x + (this.width * 0.05), y: this.gates[4].outputPosition.y };
  }

  render(parent) {
    const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');

    canvas.width = 200 * 2, canvas.height = (160 * 2) * 0.6;
    canvas.setAttribute('style', 'border: 2px solid black;');

    parent.append(canvas);

    this.draw(ctx, canvas.width * 0.5, canvas.height * 0.5);
  }

  #createComponentGates() {
    const notGate1 = new NOT(this.inputB, this.midPosition.x - (this.width * 0.25), this.midPosition.y - (this.height * 0.25));
    const notGate2 = new NOT(this.inputA, this.midPosition.x - (this.width * 0.25), this.midPosition.y + (this.height * 0.25));

    const andGate1 = new AND(this.inputA, notGate1.output, this.midPosition.x + (this.width * 0.05), this.midPosition.y - (this.height * 0.25));
    const andGate2 = new AND(notGate2.output, this.inputB, this.midPosition.x + (this.width * 0.05), this.midPosition.y + (this.height * 0.25));

    const orGate = new OR(andGate1.output, andGate2.output, this.midPosition.x + (this.width * 0.35), this.midPosition.y);

    this.addGates(notGate1, notGate2, andGate1, andGate2, orGate);
    this.gates.forEach((gate) => {
      gate.updateDimentions(this.width / 5, this.height / 3);
    });
  }

  #stepA = 0.0;
  #stepB = 0.0;
  #stepC = 0.0;
  #stepD = 0.0;
  #stepE = 0.0;
  #stepF = 0.0;
  #stepG = 0.0;
  update(ctx) {
    if (this.inputA === 1 && this.#stepA < 1) this.#stepA += 0.01;
    else if (this.#stepA > 0) this.#stepA -= 0.01;

    if (this.inputB === 1 && this.#stepB < 1) this.#stepB += 0.01;
    else if (this.#stepB > 0) this.#stepB -= 0.01;

    if (this.output === 1 && this.#stepC < 1) this.#stepC += 0.01;
    else if (this.#stepC > 0) this.#stepC -= 0.01;

    if (this.gates[0].output === 1 && this.#stepD < 1) this.#stepD += 0.01;
    else if (this.#stepD > 0) this.#stepD -= 0.01;
    
    if (this.gates[1].output === 1 && this.#stepE < 1) this.#stepE += 0.01;
    else if (this.#stepE > 0) this.#stepE -= 0.01;

    if (this.gates[2].output === 1 && this.#stepF < 1) this.#stepF += 0.01;
    else if (this.#stepF > 0) this.#stepF -= 0.01;
    
    if (this.gates[3].output === 1 && this.#stepG < 1) this.#stepG += 0.01;
    else if (this.#stepG > 0) this.#stepG -= 0.01;

    this.gates.forEach((gate) => {
      gate.update(ctx);
    });
  }

  draw(ctx) {
    this.#drawGate(ctx);
    if (this.outline) this.#drawOutline(ctx);
  }

  #drawGate(ctx) {
    this.gates.forEach((gate) => {
      gate.draw(ctx);
    })

    // draw line from NOTgate 1 output to ANDgate 1 inputB
    drawLine(ctx, this.#stepD, [
      { x: this.gates[0].outputPosition.x, y: this.gates[0].outputPosition.y },
      { x: this.gates[2].inputPositions[1].x, y: this.gates[2].inputPositions[1].y },
    ]);

    // draw line from NOTgate 2 output to ANDgate 2 inputA
    drawLine(ctx, this.#stepE, [
      { x: this.gates[1].outputPosition.x, y: this.gates[1].outputPosition.y },
      { x: this.gates[3].inputPositions[0].x, y: this.gates[3].inputPositions[0].y },
    ]);

    // draw line from ANDgate 1 output to ORgate inputA
    drawLine(ctx, this.#stepF, [
      { x: this.gates[2].outputPosition.x, y: this.gates[2].outputPosition.y },
      { x: this.gates[4].inputPositions[0].x, y: this.gates[4].inputPositions[0].y },
    ]);

    // draw line from ANDgate 2 output to ORgate inputB
    drawLine(ctx, this.#stepG, [
      { x: this.gates[3].outputPosition.x, y: this.gates[3].outputPosition.y },
      { x: this.gates[4].inputPositions[1].x, y: this.gates[4].inputPositions[1].y },
    ]);

    // draw line from inputA to ANDgate 1 inputA
    drawLine(ctx, this.#stepA, [
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y - (this.height * 0.33) },
      { x: this.midPosition.x - (this.width * 0.5) + 40, y: this.midPosition.y - (this.height * 0.33) },
      { x: this.midPosition.x - (this.width * 0.5) + 40, y: this.midPosition.y - (this.height * 0.45) },
      { x: this.gates[2].inputPositions[0].x - 20, y: this.midPosition.y - (this.height * 0.45) },
      { x: this.gates[2].inputPositions[0].x - 20, y: this.gates[2].inputPositions[0].y },
      { x: this.gates[2].inputPositions[0].x, y: this.gates[2].inputPositions[0].y },
    ]);

    // draw line from inputA to NOTgate 2 input
    drawLine(ctx, this.#stepA, [
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y - (this.height * 0.33) },
      { x: this.midPosition.x - (this.width * 0.5) + 40, y: this.midPosition.y - (this.height * 0.33) },
      { x: this.midPosition.x - (this.width * 0.5) + 40, y: this.gates[1].inputPosition.y },
      { x: this.gates[1].inputPosition.x, y: this.gates[1].inputPosition.y },
    ]);

    // draw line from inputB to ANDgate 2 inputB
    drawLine(ctx, this.#stepB, [
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y + (this.height * 0.33) },
      { x: this.midPosition.x - (this.width * 0.5) + 20, y: this.midPosition.y + (this.height * 0.33) },
      { x: this.midPosition.x - (this.width * 0.5) + 20, y: this.midPosition.y + (this.height * 0.45) },
      { x: this.gates[3].inputPositions[1].x - 20, y: this.midPosition.y + (this.height * 0.45) },
      { x: this.gates[3].inputPositions[1].x - 20, y: this.gates[3].inputPositions[1].y },
      { x: this.gates[3].inputPositions[1].x, y: this.gates[3].inputPositions[1].y },
    ]);

    // draw line from inputB to NOTgate 1 input
    drawLine(ctx, this.#stepB, [
      { x: this.midPosition.x - (this.width * 0.5), y: this.midPosition.y + (this.height * 0.33) },
      { x: this.midPosition.x - (this.width * 0.5) + 20, y: this.midPosition.y + (this.height * 0.33) },
      { x: this.midPosition.x - (this.width * 0.5) + 20, y: this.gates[0].inputPosition.y },
      { x: this.gates[0].inputPosition.x, y: this.gates[0].inputPosition.y },
    ]);

    // draw line from ORgate output to output
    drawLine(ctx, this.#stepC, [
      { x: this.gates[4].outputPosition.x, y: this.gates[4].outputPosition.y },
      { x: this.gates[4].outputPosition.x + (this.width * 0.05), y: this.gates[4].outputPosition.y },
    ]);
  }

  #drawOutline(ctx) {
    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.inputA, this.inputPositions[0].x - 10, this.inputPositions[0].y + 6);
    ctx.fillText(this.inputB, this.inputPositions[1].x - 10, this.inputPositions[1].y + 6);
    ctx.fillText(this.output, this.outputPosition.x, this.outputPosition.y + 6);

    ctx.rect(this.gatePosition[0].x, this.gatePosition[0].y, this.gatePosition[1].x, this.gatePosition[1].y);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}
