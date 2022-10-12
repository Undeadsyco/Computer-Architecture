import { XOR, AND, OR } from "../gates";

export class FullAdder {
  #_inputA;
  #_inputB;
  #_carryIn;
  #_carryOut;
  #_output;

  constructor(A, B, C) {
    this.#_inputA = A;
    this.#_inputB = B;
    this.#_carryIn = C;
    this.#_output = XOR.calculateOutput(XOR.calculateOutput(A, B), C);
    this.#_carryOut = OR.calculateOutput(AND.calculateOutput(A, B), AND.calculateOutput(XOR.calculateOutput(A, B), C));
  }

  render() { }

  draw(ctx) {
    const xorGate1 = new XOR(this.#_inputA, this.#_inputB);
    const xorGate2 = new XOR(xorGate1.output, this.#_carryIn);
    const andGate1 = new AND(this.#_inputA, this.#_inputB);
    const andGate2 = new AND(xorGate1.output, this.#_carryIn);
    const orGate = new OR(andGate1.output, andGate2.output);
    
    let x = 200, y = 100;
    xorGate1.draw(ctx, x, y);
    xorGate2.draw(ctx, x, y + 200);
    andGate1.draw(ctx, x - 125, y + 350);
    andGate2.draw(ctx, x, y + 350);
    orGate.draw(ctx, x + 125, y + 350);
  }
}