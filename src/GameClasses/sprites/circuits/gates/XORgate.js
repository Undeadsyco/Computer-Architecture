// @ts-check

import Circut from "../Circuit";
import { NOT, AND, OR } from '../gates';

import { drawLine } from "../../../../utilities";
import Game from "../../../Game";

export default class XOR extends Circut {

  static calculateOutput([A, B]) {
    return (A && !B) || (!A && B) ? 1 : 0;
  }

  /** @type {Array<Circut>} */ #gates = [];
  #stepA = 0.0;
  #stepB = 0.0;
  #stepC = 0.0;
  #stepD = 0.0;
  #stepE = 0.0;
  #stepF = 0.0;
  #stepG = 0.0;

  /**
   * @param {Game} game 
   * @param {*} x 
   * @param {*} y 
   * @param {*} w 
   * @param {*} h 
   * @param {*} inputs 
   */
  constructor(game, x, y, w, h, inputs) {
    super(game, x, y, w, h)
    //   super(x, y, 400, 200, inputs, XOR.calculateOutput(inputs));

    //   this.#createComponentGates();
    //   this.inputPos = [
    //     [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] - (this.height * 0.33) ],
    //     [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] + (this.height * 0.33) ],
    //   ];
    //   this.outputPos = [this.#gates[4].outputPos[0] + (this.width * 0.05), this.#gates[4].outputPos[1]];
  }

  #createComponentGates() {
    // const notGate1 = new NOT(this.midPosition[0] - (this.width * 0.25), this.midPosition[1] - (this.height * 0.25), this.inputs[1]);
    // const notGate2 = new NOT(this.midPosition[0] - (this.width * 0.25), this.midPosition[1] + (this.height * 0.25), this.inputs[0]);

    // const andGate1 = new AND(this.midPosition[0] + (this.width * 0.05), this.midPosition[1] - (this.height * 0.25), [this.inputs[0], notGate1.output]);
    // const andGate2 = new AND(this.midPosition[0] + (this.width * 0.05), this.midPosition[1] + (this.height * 0.25), [notGate2.output, this.inputs[1]]);

    // const orGate = new OR(this.midPosition[0] + (this.width * 0.35), this.midPosition[1], [andGate1.output, andGate2.output]);

    // this.#gates.push(notGate1, notGate2, andGate1, andGate2, orGate);
    // this.#gates.forEach((gate) => {
    //   gate.updateDementions(this.width / 5, this.height / 3);
    // });
  }

  update() {
    // if (this.inputs[0] === 1 && this.#stepA < 1) this.#stepA += 0.01;
    // else if (this.#stepA > 0) this.#stepA -= 0.01;

    // if (this.inputs[1] === 1 && this.#stepB < 1) this.#stepB += 0.01;
    // else if (this.#stepB > 0) this.#stepB -= 0.01;

    // if (this.output === 1 && this.#stepC < 1) this.#stepC += 0.01;
    // else if (this.#stepC > 0) this.#stepC -= 0.01;

    // if (this.#gates[0].output === 1 && this.#stepD < 1) this.#stepD += 0.01;
    // else if (this.#stepD > 0) this.#stepD -= 0.01;

    // if (this.#gates[1].output === 1 && this.#stepE < 1) this.#stepE += 0.01;
    // else if (this.#stepE > 0) this.#stepE -= 0.01;

    // if (this.#gates[2].output === 1 && this.#stepF < 1) this.#stepF += 0.01;
    // else if (this.#stepF > 0) this.#stepF -= 0.01;

    // if (this.#gates[3].output === 1 && this.#stepG < 1) this.#stepG += 0.01;
    // else if (this.#stepG > 0) this.#stepG -= 0.01;

    // this.#gates.forEach((gate) => {
    //   gate.update(ctx);
    // });
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    // this.#gates.forEach((gate) => {
    //   gate.draw(ctx);
    // });

    // // draw line from NOTgate 1 output to ANDgate 1 inputs[1]
    // Canvas.drawGradientLine([
    //   [this.#gates[0].outputPos[0], this.#gates[0].outputPos[1]],
    //   [this.#gates[2].inputPos[1][0], this.#gates[2].inputPos[1][1]],
    // ], this.#stepD);

    // // draw line from NOTgate 2 output to ANDgate 2 inputs[0]
    // Canvas.drawGradientLine([
    //   [this.#gates[1].outputPos[0], this.#gates[1].outputPos[1]],
    //   [this.#gates[3].inputPos[0][0], this.#gates[3].inputPos[0][1]],
    // ], this.#stepE);

    // // draw line from ANDgate 1 output to ORgate inputs[0]
    // Canvas.drawGradientLine([
    //   [this.#gates[2].outputPos[0], this.#gates[2].outputPos[1]],
    //   [this.#gates[4].inputPos[0][0], this.#gates[4].inputPos[0][1]],
    // ], this.#stepF);

    // // draw line from ANDgate 2 output to ORgate inputs[1]
    // Canvas.drawGradientLine([
    //   [this.#gates[3].outputPos[0], this.#gates[3].outputPos[1]],
    //   [this.#gates[4].inputPos[1][0], this.#gates[4].inputPos[1][1]],
    // ], this.#stepG);

    // // draw line from inputs[0] to ANDgate 1 inputs[0]
    // Canvas.drawGradientLine([
    //   [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] - (this.height * 0.33)],
    //   [this.midPosition[0] - (this.width * 0.5) + 40, this.midPosition[1] - (this.height * 0.33)],
    //   [this.midPosition[0] - (this.width * 0.5) + 40, this.midPosition[1] - (this.height * 0.45)],
    //   [this.#gates[2].inputPos[0][0] - 10, this.midPosition[1] - (this.height * 0.45)],
    //   [this.#gates[2].inputPos[0][0] - 10, this.#gates[2].inputPos[0][1]],
    //   [this.#gates[2].inputPos[0][0], this.#gates[2].inputPos[0][1]],
    // ], this.#stepA);

    // // draw line from inputs[0] to NOTgate 2 input
    // Canvas.drawGradientLine([
    //   [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] - (this.height * 0.33)],
    //   [this.midPosition[0] - (this.width * 0.5) + 40, this.midPosition[1] - (this.height * 0.33)],
    //   [this.midPosition[0] - (this.width * 0.5) + 40, this.#gates[1].inputPos[1]],
    //   [this.#gates[1].inputPos[0], this.#gates[1].inputPos[1]],
    // ], this.#stepA);

    // // draw line from inputs[1] to ANDgate 2 inputs[1]
    // Canvas.drawGradientLine([
    //   [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] + (this.height * 0.33)],
    //   [this.midPosition[0] - (this.width * 0.5) + 20, this.midPosition[1] + (this.height * 0.33)],
    //   [this.midPosition[0] - (this.width * 0.5) + 20, this.midPosition[1] + (this.height * 0.45)],
    //   [this.#gates[3].inputPos[1][0] - 10, this.midPosition[1] + (this.height * 0.45)],
    //   [this.#gates[3].inputPos[1][0] - 10, this.#gates[3].inputPos[1][1]],
    //   [this.#gates[3].inputPos[1][0], this.#gates[3].inputPos[1][1]],
    // ], this.#stepB);

    // // draw line from inputs[1] to NOTgate 1 input
    // Canvas.drawGradientLine([
    //   [this.midPosition[0] - (this.width * 0.5), this.midPosition[1] + (this.height * 0.33)],
    //   [this.midPosition[0] - (this.width * 0.5) + 20, this.midPosition[1] + (this.height * 0.33)],
    //   [this.midPosition[0] - (this.width * 0.5) + 20, this.#gates[0].inputPos[1]],
    //   [this.#gates[0].inputPos[0], this.#gates[0].inputPos[1]],
    // ], this.#stepB);

    // // draw line from ORgate output to output
    // Canvas.drawGradientLine([
    //   [this.#gates[4].outputPos[0], this.#gates[4].outputPos[1]],
    //   [this.#gates[4].outputPos[0] + (this.width * 0.05), this.#gates[4].outputPos[1]],
    // ], this.#stepC);

    // if (this.outline) {
    //   ctx.font = 'bold 20px serif';
    //   ctx.fillStyle = 'black';
    //   ctx.fillText(this.inputs[0], this.inputPos[0][0] - 10, this.inputPos[0][1] + 6);
    //   ctx.fillText(this.inputs[1], this.inputPos[1][0] - 10, this.inputPos[1][1] + 6);
    //   ctx.fillText(this.output, this.outputPos[0], this.outputPos[1] + 6);

    //   ctx.rect(this.cordinates[0][0], this.cordinates[0][1], this.cordinates[1][0], this.cordinates[1][1]);
    //   ctx.strokeStyle = 'black';
    //   ctx.stroke();
    // }
  }
}
