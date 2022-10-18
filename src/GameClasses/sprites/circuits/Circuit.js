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
  /** @type {Array<number>} */ #inputStops = [];
  /** @type {boolean} */ #showInputs = false;
  /** @type {Array<number>} */ #outputs = [];
  /** @type {Array<pos>} */ #outputPos = [];
  /** @type {Array<number>} */ #outputStops = [];
  /** @type {boolean} */ #showOutputs = false;

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
    
    switch (`${inputs.length}`) {
      case '2':
        this.#inputStops = [0.25, 0.75];
        break;
      case '3':
        this.#inputStops = [0.25, 0.5, 0.75];
        break;
      default:
        this.#inputStops = [0.5];
    }
    console.log(outputs.length);
    switch (`${outputs.length}`) {
      case '2':
        this.#outputStops = [0.25, 0.75];
        break;
      case '3':
        this.#outputStops = [0.25, 0.5, 0.75];
        break;
      default:
        this.#outputStops = [0.5];
    }
    for (let i = 0; i < inputs.length; i++) {
      this.#inputPos.push({ x: this.pos.x, y: this.pos.y + (this.height * this.#inputStops[i])});
    }
    for (let i = 0; i < outputs.length; i++) {
      this.#outputPos.push({ x: this.pos.x + this.width, y: this.pos.y + (this.height * this.#outputStops[i])});
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

  calculateInputPos() {
    this.inputPos = [];
    for (let i = 0; i < this.#inputs.length; i++) {
      this.#inputPos.push({ x: this.pos.x, y: this.pos.y + (this.height * this.#inputStops[i])});
    }
  }

  get showInputs() {
    return this.#showInputs;
  }
  set showInputs(value) {
    this.#showInputs = value
  }
  
  get showOutputs() {
    return this.#showOutputs;
  }
  set showOutputs(value) {
    this.#showOutputs = value
  }

  get outputPos() {
    return this.#outputPos;
  }

  set outputPos(pos) {
    this.#outputPos = pos;
  }

  calculateOutputPos() {
    this.#outputPos = [];
    for (let i = 0; i < this.#outputs.length; i++) {
      this.#outputPos.push({ x: this.pos.x + this.width, y: this.pos.y + (this.height * this.#outputStops[i])});
    }
  }

  update() {
    super.update();
    this.calculateInputPos();
    this.calculateOutputPos();
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);

    if (this.#showInputs) this.#inputPos.forEach(/** @type {pos} */ (pos) => {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      ctx.lineTo(pos.x + (this.width * 0.25), pos.y);
      ctx.stroke();
    });
    if (this.#showOutputs) this.#outputPos.forEach(/** @type {pos} */ (pos) => {
      ctx.beginPath();
      ctx.moveTo(this.pos.x + this.width, pos.y);
      ctx.lineTo(this.pos.x + (this.width * 0.75), pos.y);
      ctx.stroke();
    });
  }
}