import { DualInputGate } from "../GateStructure";

export default class NOR extends DualInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);
  }
}
