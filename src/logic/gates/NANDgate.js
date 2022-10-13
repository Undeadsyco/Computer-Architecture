import dualInputGate from "./dualInputGate";

export default class NAND extends dualInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);
  }
}
