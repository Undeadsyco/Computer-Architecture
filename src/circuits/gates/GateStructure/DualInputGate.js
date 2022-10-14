/** 
 * @typedef {object} cordinates
 * @property {number} x
 * @property {number} y
 */

import Gate from "./Gate";

export default class DualInputGate extends Gate {
  #inputA;
  #inputB;
  #output;
  #inputPositions = [{ x: undefined, y: undefined }, { x: undefined, y: undefined }];
  #outputPosition = { x: undefined, y: undefined };

  constructor(inputA, inputB, output, width, height) {
    super(width || 100, height || 60)
    this.#inputA = inputA | 0;
    this.#inputB = inputB | 0;
    this.#output = output | 0;
  }

  /** @return {number} */
  get inputA() {
    return this.#inputA;
  }

  /** @param {number} input */
  set inputA(input) {
    this.#inputA = input;
  }

  /** @return {number} */
  get inputB() {
    return this.#inputB;
  }

  /** @param {number} input */
  set inputB(input) {
    this.#inputB = input;
  }

  /** @return {number} */
  get output() {
    return this.#output;
  }

  /** @param {number} value */
  set output(value) {
    this.#output = value;
  }

  /** @return {Array<cordinates>} */
  get inputPositions() {
    return this.#inputPositions;
  }

  /** @param {Array<cordinates>} positions */
  set inputPositions(positions) {
    this.#inputPositions = positions;
  }

  /** @return {cordinates} */
  get outputPosition() {
    return this.#outputPosition;
  }

  /** @param {cordinates} cordinates */
  set outputPosition(cordinates) {
    this.#outputPosition = cordinates;
  }
}