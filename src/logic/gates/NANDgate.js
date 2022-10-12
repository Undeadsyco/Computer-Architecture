import { twoInputGate } from "./gates";

export default class NAND extends twoInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);
  }
}
