export class singleInputGate {
  #input;
  #output;

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
}

export class twoInputGate {
  #inputA;
  #inputB;
  #output;

  constructor(inputA, inputB, output) {
    this.#inputA = inputA | 0;
    this.#inputB = inputB | 0;
    this.#output = output;
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
}