import { drawLine } from "../../utilities";
import { AND, OR } from "../gates/SimpleGates";
import { XOR } from "../gates/ComplexGates";

export default class FullAdder {
  #inputA;
  #inputB;
  #carryIn;
  #width;
  #height;
  #carryOut;
  #output;

  #position = [
    [],
    []
  ];
  #mid = { x: undefined, y: undefined };

  #gates = [];

  constructor(A, B, C, { x, y }, width = 600, height = 650) {
    this.#inputA = A;
    this.#inputB = B;
    this.#carryIn = C;
    this.#width = width;
    this.#height = height;
    this.#output = XOR.calculateOutput(XOR.calculateOutput(A, B), C);
    this.#carryOut = OR.calculateOutput(AND.calculateOutput(A, B), AND.calculateOutput(XOR.calculateOutput(A, B), C));

    this.#mid = { x, y };
    this.#position = [
      [x - (this.#width * 0.5), y - (this.#height * 0.5)],
      [this.#width, this.#height]
    ];

    const XORgate1 = new XOR(this.#inputA, this.#inputB, x + (this.#width * 0.025), y - (this.#height * 0.3));
    XORgate1.updateDimentions(this.#width * 0.8, this.#height * 0.35);
    const XORgate2 = new XOR(XORgate1.output, this.#carryIn, x + (this.#width * 0.025), y + (this.#height * 0.1));
    XORgate2.updateDimentions(this.#width * 0.8, this.#height * 0.35);
    const ANDgate1 = new AND(this.#inputA, this.#inputB, x - (this.#width * 0.25), y + (this.#height * 0.325));
    ANDgate1.updateDimentions(this.#width * 0.8 * 0.2, this.#height * 0.1);
    const ANDgate2 = new AND(XORgate1.output, this.#carryIn, x, y + (this.#height * 0.425));
    ANDgate2.updateDimentions(this.#width * 0.8 * 0.2, this.#height * 0.1);
    const ORgate = new OR(ANDgate1.output, ANDgate2.output, x + (this.#width * 0.25), y + (this.#height * 0.375) + 10);
    ORgate.updateDimentions((this.#width * 0.8) * 0.2, this.#height * 0.1);

    this.#gates.push(XORgate1, XORgate2, ANDgate1, ANDgate2, ORgate);

    this.#gates.forEach((gate) => gate.toggleOutline({ interior: true }));
  }

  render() { }

  update(ctx) {
    this.#gates.forEach((gate) => {
      gate.update(ctx);
    });
  };

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    this.#gates.forEach((gate) => gate.draw(ctx));

    // draw line from XOR gate 1 output to XOR gate 2 input A
    drawLine(ctx, 0.0, [
      { x: this.#gates[0].outputPosition.x, y: this.#gates[0].outputPosition.y },
      { x: this.#gates[0].outputPosition.x + (this.#width * 0.075), y: this.#gates[0].outputPosition.y },
      { x: this.#gates[0].outputPosition.x + (this.#width * 0.075), y: this.#gates[0].outputPosition.y + (this.#gates[0].height * 0.5) + 15 },
      { x: this.#gates[0].outputPosition.x - this.#gates[0].width + (this.#width * 0.025), y: this.#gates[0].outputPosition.y + (this.#gates[0].height * 0.5) + 15 },
      { x: this.#gates[0].outputPosition.x - this.#gates[0].width + (this.#width * 0.025), y: this.#gates[1].inputPositions[0].y },
      { x: this.#gates[1].inputPositions[0].x, y: this.#gates[1].inputPositions[0].y },
    ]);

    // draw line from XOR gate 1 output to AND gate 2 input A
    drawLine(ctx, 0.0, [
      { x: this.#gates[0].outputPosition.x, y: this.#gates[0].outputPosition.y },
      { x: this.#gates[0].outputPosition.x + (this.#width * 0.075), y: this.#gates[0].outputPosition.y },
      { x: this.#gates[0].outputPosition.x + (this.#width * 0.075), y: this.#gates[0].outputPosition.y + (this.#gates[0].height * 0.5) + 15 },
      { x: this.#gates[0].outputPosition.x - this.#gates[0].width + (this.#width * 0.025), y: this.#gates[0].outputPosition.y + (this.#gates[0].height * 0.5) + 15 },
      { x: this.#gates[0].outputPosition.x - this.#gates[0].width + (this.#width * 0.025), y: this.#gates[3].inputPositions[0].y },
      { x: this.#gates[3].inputPositions[0].x, y: this.#gates[3].inputPositions[0].y },
    ]);

    // input A
    drawLine(ctx, 0.0, [
      { x: this.#mid.x - this.#width * 0.5, y: this.#height / 3 },
      { x: this.#mid.x - this.#width * 0.5 + 10, y: this.#height / 3 },
      { x: this.#mid.x - this.#width * 0.5 + 10, y: this.#gates[0].inputPositions[0].y },
      { x: this.#gates[0].inputPositions[0].x, y: this.#gates[0].inputPositions[0].y },
    ]);
    
    drawLine(ctx, 0.0, [
      { x: this.#mid.x - this.#width * 0.5, y: this.#height / 3 },
      { x: this.#mid.x - this.#width * 0.5 + 10, y: this.#height / 3 },
      { x: this.#mid.x - this.#width * 0.5 + 10, y: this.#gates[2].inputPositions[0].y },
      { x: this.#gates[2].inputPositions[0].x, y: this.#gates[2].inputPositions[0].y },
    ]);
    
    // input B
    drawLine(ctx, 0.0, [
      { x: this.#mid.x - this.#width * 0.5, y: this.#height / 2 },
      { x: this.#mid.x - this.#width * 0.5 + 25, y: this.#height / 2 },
      { x: this.#mid.x - this.#width * 0.5 + 25, y: this.#gates[0].inputPositions[1].y },
      { x: this.#gates[0].inputPositions[1].x, y: this.#gates[0].inputPositions[1].y },
    ]);
    
    drawLine(ctx, 0.0, [
      { x: this.#mid.x - this.#width * 0.5, y: this.#height / 2 },
      { x: this.#mid.x - this.#width * 0.5 + 25, y: this.#height / 2 },
      { x: this.#mid.x - this.#width * 0.5 + 25, y: this.#gates[2].inputPositions[1].y },
      { x: this.#gates[2].inputPositions[1].x, y: this.#gates[2].inputPositions[1].y },
    ]);

    // carry in
    drawLine(ctx, 0.0, [
      { x: this.#mid.x - this.#width * 0.5, y: this.#height * 0.66 },
      { x: this.#mid.x - this.#width * 0.5 + 40, y: this.#height * 0.66 },
      { x: this.#mid.x - this.#width * 0.5 + 40, y: this.#gates[1].inputPositions[1].y },
      { x: this.#gates[1].inputPositions[1].x, y: this.#gates[1].inputPositions[1].y },
    ]);
    
    drawLine(ctx, 0.0, [
      { x: this.#mid.x - this.#width * 0.5, y: this.#height * 0.66 },
      { x: this.#mid.x - this.#width * 0.5 + 40, y: this.#height * 0.66 },
      { x: this.#mid.x - this.#width * 0.5 + 40, y: this.#gates[3].inputPositions[1].y },
      { x: this.#gates[3].inputPositions[1].x, y: this.#gates[3].inputPositions[1].y },
    ]);

    drawLine(ctx, 0.0, [
      { x: this.#gates[2].outputPosition.x, y: this.#gates[2].outputPosition.y },
      { x: this.#gates[4].inputPositions[0].x - 50, y: this.#gates[2].outputPosition.y },
      { x: this.#gates[4].inputPositions[0].x - 50, y: this.#gates[4].inputPositions[0].y },
      { x: this.#gates[4].inputPositions[0].x, y: this.#gates[4].inputPositions[0].y },
    ]);

    drawLine(ctx, 0.0, [
      { x: this.#gates[3].outputPosition.x, y: this.#gates[3].outputPosition.y },
      { x: this.#gates[4].inputPositions[1].x, y: this.#gates[4].inputPositions[1].y },
    ]);

    // this.#drawOutline(ctx);
  }

  #drawOutline(ctx) {
    ctx.strokeStyle = 'black';
    ctx.rect(this.#position[0][0], this.#position[0][1], this.#position[1][0], this.#position[1][1] - 10);
    ctx.stroke();
  }
}