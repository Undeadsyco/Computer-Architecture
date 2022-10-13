import dualInputGate from "./dualInputGate";

export default class NOR extends dualInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);
  }
}
