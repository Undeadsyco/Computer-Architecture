/** 
 * @typedef {object} cordinates
 * @property {number} x
 * @property {number} y
 */

export default class dualInputGate {
  #inputA;
  #inputB;
  #output;
  #width;
  #height;
  #gatePosition = [{ x: undefined, y: undefined }, { x: undefined, y: undefined }];
  #midPosition = { x: undefined, y: undefined };
  #inputPositions = [{ x: undefined, y: undefined }, { x: undefined, y: undefined }];
  #outputPosition = { x: undefined, y: undefined };
  #outline = false;

  constructor(inputA, inputB, output, width, height) {
    this.#inputA = inputA | 0;
    this.#inputB = inputB | 0;
    this.#output = output | 0;
    this.#width = width | 100;
    this.#height = height | 60;
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

  /** @return {boolean} */
  get outline() {
    return this.#outline;
  }

  toggleOutline() {
    this.#outline = !this.#outline;
  }
}