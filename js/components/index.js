class SingleBitAdder {
 static addersInUse;

 static {
  SingleBitAdder.addersInUse = 0;
 }

 constructor(inputA, inputB, carryIn) {
  this.inputA = inputA;
  this.inputB = inputB;
  this.carryIn = carryIn | 0;
  this.output = xor(xor(inputA, inputB), carryIn);
  this.carryOut = or(and(inputA, inputB), and(xor(inputA, inputB), carryIn));
 }

 /** @return {number} */
 get inputA() {
  return this.inputA;
 }

 /** @param {number} value */
 set inputA(value) {
  this.inputA = value;
 }

 /** @return {number} */
 get inputB() {
  return this.inputB;
 }

 /** @param {number} value */
 set inputB(value) {
  this.inputB = value;
 }

 /** @return {number} */
 get carryIn() {
  return this.carryIn;
 }

 /** @param {number} value */
 set carryIn(value) {
  this.carryIn = value;
 }

 /** @return {number} */
 get output() {
  return this.output;
 }

 /** @param {number} value */
 set output(value) {
  this.output = value;
 }

 /** @return {number} */
 get carryOut() {
  return this.carryOut;
 }

 /** @param {number} value */
 set carryOut(value) {
  this.carryOut = value;
 }
}

class EightBitAdder {
 /** @type {string} */ output = ''; 
 /** @type {number} */ carryOut = 0;
 /**
  * @param {number} inputA 
  * @param {number} inputB 
  * @param {number} carryIn 
  */
 constructor(inputA, inputB, carryIn) {
  /** @type {string} */ this.inputA = inputA;
  /** @type {Array<string>} */ this.inputABitArr = inputA.split('');
  /** @type {string} */ this.inputB = inputB;
  /** @type {Array<string>} */ this.inputBBitArr = inputB.split('')
  /** @type {number} */ this.carryIn = carryIn;

  this.#calculate();
 }

 #calculate() {
  let output = '', carryIn = 0;
  for (let i = 8; i > 0; i -= 1) {
    const adder = new SingleBitAdder(this.inputABitArr[i], this.inputBBitArr[i], carryIn);
    output = `${adder.output}${output}`;
    carryIn = adder.carryOut;
  }

  this.output = output;
  this.carryOut = carryIn;
 }
}