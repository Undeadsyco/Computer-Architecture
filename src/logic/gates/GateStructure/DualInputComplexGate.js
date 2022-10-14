import Gate from "./Gate";
import { AND, NOT, OR } from "../SimpleGates";
import DualInputGate from "./DualInputGate";

export default class DualInputComplexGate extends DualInputGate {
  /** @type {Array<Gate>} */ #gates = [];
  #outline = false;

  constructor(inputA, inputB, output, width, height) {
    super(inputA, inputB, output, width, height);
  }

  /** @return {Array<Gate>} */
  get gates() {
    return this.#gates;
  }

  /** @param {Array<Gate>} */
  addGates(...gates) {
    gates.forEach((gate) => {
      this.#gates.push(gate);
    })
  }

  toggleOutline(options = { interior: false }) {
    this.outline = !this.outline;

    if (options.interior) {
      this.#gates.forEach((gate) => {
        gate.toggleOutline();
      });
    }
  }
}