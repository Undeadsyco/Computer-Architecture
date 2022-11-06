// @ts-check

import { SISOGate } from "./structure";

export default class NAND extends SISOGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);
  }
}
