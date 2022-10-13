/** 
 * @typedef {object} cordinates
 * @property {number} x
 * @property {number} y
 */

export default class singleInputGate {
  #input;
  #output;
  #width;
  #height;
  #gatePosition = [{ x: undefined, y: undefined }, { x: undefined, y: undefined }];
  #midPosition = { x: undefined, y: undefined };
  #inputPosition = { x: undefined, y: undefined };
  #outputPosition = { x: undefined, y: undefined };
  #outline = false;

  constructor(input, output, width, height) {
    this.#input = input | 0;
    this.#output = output | 0;
    this.#width = width | 100;
    this.#height = height | 60;
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

  /** @return {number} */
  get width() {
    return this.#width;
  }

  /** @param {number} width */
  set width(width) {
    this.#width = width;
  }

  /** @return {number} */
  get height() {
    return this.#height;
  }

  /** @param {number} height */
  set height(height) {
    this.#height = height;
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
  get midPosition() {
    return this.#midPosition;
  }

  /** @param {cordinates} cordinates */
  set midPosition(cordinates) {
    this.#midPosition = cordinates;
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

  /** @return {boolean} */
  get outline() {
    return this.#outline;
  }

  toggleOutline() {
    this.#outline = !this.#outline;
  }
}