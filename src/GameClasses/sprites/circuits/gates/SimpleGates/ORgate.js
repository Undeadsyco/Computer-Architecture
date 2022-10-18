// ts-check

import Sprite from "../../../Sprite";
import Circut from "../../Circuit";

/** 
 * @typedef {Object} pos
 * @property {number} x
 * @property {number} y
 */

/** @type {Sprite} */
export default class OR extends Circut {

  /**
   * 
   * @param {Array<number>} inputs 
   * @returns {number}
   */
  static calculateOutput([A, B]) {
    return A || B ? 1 : 0;
  }

  /** @type {number} */ #radius

  constructor(game, x, y, inputs, draggable = false) {
    super(game, x, y, 40, (40 * 0.6), inputs, [OR.calculateOutput(inputs)], draggable);
    this.#radius = (this.height * 0.5);
    this.bgColor = 'green';
  }

  get radius() {
    return this.#radius;
  }
  set radius(r) {
    this.#radius = r;
  }

  update() {
    super.update();
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.bgColor;
    ctx.strokeStyle = 'black';

    ctx.arc(this.pos.x, this.pos.y + (this.height * 0.5), this.#radius, Math.PI * 1.70, Math.PI * 0.30, false);
    ctx.lineTo(this.pos.x + (this.width * 0.75), this.pos.y + (this.height * 0.5));
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}
