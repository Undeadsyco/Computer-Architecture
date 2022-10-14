import { drawLine } from "../../utilities";
import { AND, OR } from "../gates/SimpleGates";
import { XOR } from "../gates/ComplexGates";

export class FullAdder {
  #inputA;
  #inputB;
  #carryIn;
  #carryOut;
  #output;

  constructor(A, B, C) {
    this.#inputA = A;
    this.#inputB = B;
    this.#carryIn = C;
    this.#output = XOR.calculateOutput(XOR.calculateOutput(A, B), C);
    this.#carryOut = OR.calculateOutput(AND.calculateOutput(A, B), AND.calculateOutput(XOR.calculateOutput(A, B), C));
  }

  render() { }

  draw(ctx) {
    const xorGate1 = new XOR(this.#inputA, this.#inputB);
    const xorGate2 = new XOR(xorGate1.output, this.#carryIn);
    const andGate1 = new AND(this.#inputA, this.#inputB);
    const andGate2 = new AND(xorGate1.output, this.#carryIn);
    const orGate = new OR(andGate1.output, andGate2.output);
    
    let x = 300, y = 100;
    xorGate1.draw(ctx, x, y);
    xorGate2.draw(ctx, x, y + 200);
    andGate1.draw(ctx, x - 125, y + 350);
    andGate2.draw(ctx, x, y + 350);
    orGate.draw(ctx, x + 125, y + 350);

    const connectingLines = [];
    drawLine(ctx, this.#inputA, []);
    
  }
}