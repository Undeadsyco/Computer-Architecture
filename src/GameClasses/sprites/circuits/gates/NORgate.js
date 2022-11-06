// @ts-check

import { DISOGate } from "./structure";

export default class NOR extends DISOGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);
  }
}
