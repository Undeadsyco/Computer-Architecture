export class singleInputGate {
  constructor(input, output) {
    this._input = input | 0;
    this._output = output | 0;
  }

  /** @return {number} */
  get input() {
    return this.input;
  }

  /** @param {number} input */
  set input(input) {
    this.input = input;
  }

  /** @return {number} */
  get output() {
    return this._output;
  }

  /** @param {number} value */
  set output(value) {
    this._output = value;
  }
}

export class twoInputGate {
  constructor(inputA, inputB, output) {
    this._inputA = inputA | 0;
    this._inputB = inputB | 0;
    this._output = output;
  }

  /** @return {number} */
  get inputA() {
    return this._inputA;
  }

  /** @param {number} input */
  set inputA(input) {
    this._inputA = input;
  }

  /** @return {number} */
  get inputB() {
    return this._inputB;
  }

  /** @param {number} input */
  set inputB(input) {
    this._inputB = input;
  }

  /** @return {number} */
  get output() {
    return this._output;
  }

  /** @param {number} value */
  set output(value) {
    this._output = value;
  }
}