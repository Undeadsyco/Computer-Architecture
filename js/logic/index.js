/**
 * @typedef {(number|boolean)} boolLike
 */

/**
 * 
 * @param {boolLike} input
 * @returns {number}
 */
const not = (input) => input ? 0 : 1;

/**
 * 
 * @param {boolLike} inputA 
 * @param {boolLike} inputB 
 * @returns {number}
 */
const and = (inputA, inputB) => inputA && inputB ? 1 : 0;

/**
 * 
 * @param {boolLike} inputA 
 * @param {boolLike} inputB 
 * @returns {number}
 */
const or = (inputA, inputB) => inputA || inputB ? 1 : 0;

/**
 * 
 * @param {boolLike} inputA 
 * @param {boolLike} inputB 
 * @returns {number}
 */
const nand = (inputA, inputB) => parseInt(not(and(inputA, inputB)), 10);

/**
 * 
 * @param {boolLike} inputA 
 * @param {boolLike} inputB 
 * @returns {number}
 */
const nor = (inputA, inputB) => parseInt(not(or(inputA, inputB)), 10);

/**
 * 
 * @param {boolLike} inputA 
 * @param {boolLike} inputB 
 * @returns {number}
 */
const xor = (inputA, inputB) => parseInt(or(and(inputA, not(inputB)), and(not(inputA), inputB)), 10);

class singleInputGate {
 constructor(input) {
  this.input = input;
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
  return this.output;
 }

 /** @param {number} value */
 set output(value) {
  this.output = value;
 }
}

class twoInputGate {
 constructor(inputA, inputB, output) {
  this.inputA = inputA;
  this.inputB = inputB;
  this.output = output;
 }

 /** @return {number} */
 get inputA() {
  return this.inputA;
 }

 /** @param {number} input */
 set inputA(input) {
  this.inputA = input;
 }

 /** @return {number} */
 get inputB() {
  return this.inputB;
 }

 /** @param {number} input */
 set inputB(input) {
  this.inputB = input;
 }

 /** @return {number} */
 get output() {
  return this.output;
 }

 /** @param {number} value */
 set output(value) {
  this.output = value;
 }
}

class NOT extends singleInputGate {
 constructor(input) {
  super(input, not(input));
 }
}

class AND extends twoInputGate {
 constructor(inputA, inputB) {
  super(inputA, inputB, and(inputA, inputB));
 }
}

class OR extends twoInputGate {
 constructor(inputA, inputB) {
  super(inputA, inputB, or(inputA, inputB));
 }
}

class NAND extends twoInputGate {
 constructor(inputA, inputB) {
  super(inputA, inputB, nand(inputA, inputB));
 }
}

class NOR extends twoInputGate {
 constructor(inputA, inputB) {
  super(inputA, inputB, nor(inputA, inputB));
 }
}

class XOR extends twoInputGate {
 constructor(inputA, inputB) {
  super(inputA, inputB, xor(inputA, inputB));
 }
}
