class SingleBitAdder {
  constructor(inputA,inputB,carryIn,invert) {
    this.ABXORGate = new XOR(inputA, inputB);
    this.CDXORGate = new XOR(this.ABXORGate.output, carryIn);
    this.ABANDGate = new AND(inputA, inputB);
    this.CDANDGate = new AND(this.ABXORGate.output, carryIn);
    this.COORGate = new OR(this.ABANDGate.output, this.CDANDGate.output);

    this.inputA = inputA 
    this.inputB = inputB;
    this.carryIn = carryIn;
    this.invert = invert;
    this.output = this.CDXORGate.output;
    this.carryOut = this.COORGate.output;
  }
}


class EightBitAdder { }