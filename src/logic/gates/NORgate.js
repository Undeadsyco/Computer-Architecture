import { twoInputGate } from "./gates";

export default class NOR extends twoInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);
  }
}
