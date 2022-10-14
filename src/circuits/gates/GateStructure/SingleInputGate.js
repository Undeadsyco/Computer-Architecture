/** 
 * @typedef {object} cordinates
 * @property {number} x
 * @property {number} y
 */

import Gate from "./Gate";

export default class SingleInputGate extends Gate {
  #input;
  #output;
  #inputPosition = { x: undefined, y: undefined };
  #outputPosition = { x: undefined, y: undefined };

  constructor(input, output, width, height) {
    super(width || 100, height || 60)
    this.#input = input | 0;
    this.#output = output | 0;
  }

  /** @return {number} */
  get input() {
    return this.#input;
  }

  /** @param {number} input */
  set input(input) {
    this.#input = input;
  }

  /** @return {number} */
  get output() {
    return this.#output;
  }

  /** @param {number} value */
  set output(value) {
    this.#output = value;
  }

  /** @return {cordinates} */
  get inputPosition() {
    return this.#inputPosition;
  }

  /** @param {cordinates} cordinates */
  set inputPosition(cordinates) {
    this.#inputPosition = cordinates
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