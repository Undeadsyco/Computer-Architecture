// @ts-check

import Game from "../../../../Game";
import Circuit from "../../Circuit";
import Wire from "../../Wire";

/** @typedef {import('../../../../../type/types').gate} gate */

export default class Gate extends Circuit {
  /** @type {Array<Wire>} */ #wires;

  /**
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   */
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
    this.#wires = [];
  }

  get wires() { return this.#wires; }
  set wires(wires) { this.#wires = wires; }

  update() {
    super.update();
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);
  }

  mouseOverAction() {

  }

  mouseDownAction() {

  }

  mouseUpAction() {

  }

  /**
   * @param {number} [x]
   * @param {number} [y]
   */
  clickActionAction(x, y) {
    if (x && y) {
      
    } else {

    }
  }


  /**
   * @param {number} [x]
   * @param {number} [y] 
   */
  dbClickAction(x, y) {
    if (x && y) {

    } else {

    }
  }
}