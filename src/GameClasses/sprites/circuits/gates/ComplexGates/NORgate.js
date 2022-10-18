import Circut from "../../Circuit";

export default class NOR extends Circut {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);
  }
}
