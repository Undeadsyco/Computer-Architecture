// ts-check

import Sprite from "../Sprite";

export default class Circut extends Sprite {
  /** @type {Array<number>} */ #inputs = [];
  /** @type {Array<Array<number>>} */ #inputPos = [];
  /** @type {number} */ #output;
  /** @type {Array<number>} */ #outputPos = [];

  /**
   * 
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   * @param {Array<number>} inputs 
   * @param {number} output 
   */
  constructor(x, y, w, h, inputs, output) {
    super(x, y, w, h);
    
    this.#inputs = inputs;
    this.#output = output;
  }

  get inputs() {
    return this.#inputs;
  }

  set inputs(inputs) {
    this.#inputs = inputs;
  }

  get output() {
    return this.#output;
  }

  set output(output) {
    this.#output = output;
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
}