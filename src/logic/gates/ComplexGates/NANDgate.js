import {DualInputGate} from "../GateStructure";

export default class NAND extends DualInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);
  }
}
