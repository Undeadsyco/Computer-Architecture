/** 
 * @typedef {object} cordinates
 * @property {number} x
 * @property {number} y
 */

export default class singleInputGate {
  #input;
  #output;
  #gatePosition = [];
  #inputPosition = {};
  #outputPosition = {};
  #outline = false;

  constructor(input, output) {
    this.#input = input;
    this.#output = output;
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

  /** @return {Array<cordinates>} */
  get gatePosition() {
    return this.#gatePosition;
  }

  /** @param {Array<cordinates>} position */
  set gatePosition(position) {
    this.#gatePosition = position;
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

  toggleOutline() {
    this.#outline = !this.#outline;
  }
}