import Circut from "../../Circuit";

export default class NAND extends Circut {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);
  }
}
