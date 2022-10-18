// ts-check

import Game from "../../Game";
import Sprite from "../Sprite";

/** 
 * @typedef {Object} pos
 * @property {number} x
 * @property {number} y
 */

/** @type {Sprite} */
export default class Circut extends Sprite {
  /** @type {Array<number>} */ #inputs = [];
  /** @type {Array<pos>} */ #inputPos = [];
  /** @type {Array<number>} */ #outputs = [];
  /** @type {Array<pos>} */ #outputPos = [];

  /**
   * @param {Game} game
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   * @param {Array<number>} inputs 
   * @param {Array<number>} outputs
   */
  constructor(game, x, y, w, h, inputs, outputs, draggable) {
    super(game, x, y, w, h, draggable);

    this.#inputs = inputs;
    this.#outputs = outputs;
    let inputStops = [];
    switch (`${inputs.length}`) {
      case '2':
        inputStops = [0.25, 0.75];
        break;
      case '3':
        inputStops = [0.25, 0.5, 0.75];
        break;
      default:
        inputStops = [0.5];
    }
    let outputStops = [];
    switch (`${outputs.length}`) {
      case '2':
        outputStops = [0.25, 0.75];
        break;
      case '3':
        outputStops = [0.25, 0.5, 0.75];
        break;
      default:
        outputStops = [0.5];
    }
    for (let i = 0; i < inputs.length; i++) {
      this.#inputPos.push({ x: this.pos.x, y: this.pos.y + (this.height * inputStops[i])});
    }
    for (let i = 0; i < outputs.length; i++) {
      this.#outputPos.push({ x: this.pos.x + this.width, y: this.pos.y + (this.height * outputStops[i])});
    }
  }

  get inputs() {
    return this.#inputs;
  }

  set inputs(inputs) {
    this.#inputs = inputs;
  }

  get output() {
    return this.#outputs;
  }

  set output(outputs) {
    this.#outputs = outputs;
  }

  get inputPos() {
    return this.#inputPos;
  }

  set inputPos(pos) {
    this.#inputPos = pos;
  }

  get outputPos() {
    return this.#outputPos;
  }

  set outputPos(pos) {
    this.#outputPos = pos;
  }

  update() {
    super.update();
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);
  }
}