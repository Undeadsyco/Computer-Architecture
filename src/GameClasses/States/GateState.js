import State from "./State";
import UI from "../UI";
import { Switch } from "../sprites/circuits";
import { AND, NOT, OR } from "../sprites/circuits/gates";

/** @typedef {import('../type/types').circuit} circuit */

export default class GateState extends State {
  /** @type {Array<circuit>} */ #circuits = [];

  constructor(game) {
    super(game);

    // this.#circuits.push(
    //   new Switch(this.game, 10, 10),
    //   new NOT(this.game, 80, 10, 0),
    //   new AND(this.game, 150, 10, [0, 0]),
    //   new OR(this.game, 220, 10, [0, 0]),
    // );
    this.#circuits.forEach(/** @type {circuit} */(circuit) => {
      circuit.width = 60;
      circuit.height = 60 * 0.6;
      circuit.radius = circuit.height * 0.5;
      circuit.inputs?.forEach(/** @type {input} */(input) => {
        input.visible = false;
      });
      circuit.outputs?.forEach(/** @type {output} */(output) => {
        output.visible = false;
      });
    });
  }

  update() {
    this.#circuits.forEach(/** @type {circuit} */(sprite) => {
      sprite.update();
    });
  }

  draw(ctx) {
    this.#circuits.forEach(/** @type {circuit} */(sprite) => {
      sprite.draw(ctx);
    });
  }
}