// @ts-check

import Game from "../../Game";
import Sprite from "../Sprite";

/** @typedef {import('../../../type/types').input} input */
/** @typedef {import('../../../type/types').output} output */

export default class Circuit extends Sprite {
  /** @type {Array<input>} */ #inputs
  /** @type {Array<output>} */ #outputs

  /**
   * @param {Game} game
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   */
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
  }

  get inputs() { return this.#inputs; }
  set inputs(inputs) { this.#inputs = inputs }

  get outputs() { return this.#outputs; }
  set outputs(outputs) { this.#outputs = outputs }

  update() {
    super.update();
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);
  }
}