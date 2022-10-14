import Gate from "./Gate";
import { AND, NOT, OR } from "../SimpleGates";
import DualInputGate from "./DualInputGate";



export default class DualInputComplexGate extends DualInputGate {
  /** @type {Array<Gate>} */ #gates = [];
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

  toggleComponentOutlines(options = { interior: false }) {
    this.toggleOutline();

    if (options.interior) {
      this.#gates.forEach((gate) => {
        gate.toggleOutline();
      });
    }
  }
}