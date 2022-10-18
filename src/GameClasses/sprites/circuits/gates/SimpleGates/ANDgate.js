// ts-check

import Game from "../../../../Game";
import Sprite from "../../../Sprite";
import Circut from "../../Circuit";

/** 
 * @typedef {Object} pos
 * @property {number} x
 * @property {number} y
 */

/** @type {Sprite} */
export default class AND extends Circut {

  /**
   * @param {Array<number>} inputs 
   * @returns {number}
   */
  static calculateOutput([A, B]) {
    return A && B ? 1 : 0;
  }

  /** @type {number} */ #radius;

  /**
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y 
   * @param {Array<number>} inputs 
   */
  constructor(game, x, y, inputs, draggable = false) {
    super(game, x, y, 40, parseInt(40 * 0.6), inputs, [AND.calculateOutput(inputs)], draggable);
    this.#radius = (this.height * 0.5);
    this.bgColor = 'red';
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

    ctx.beginPath();
    ctx.arc(this.pos.x + (this.width * 0.5), this.pos.y + (this.height * 0.5), this.#radius, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.lineTo(this.pos.x + (this.width * 0.25), this.pos.y + this.height);
    ctx.lineTo(this.pos.x + (this.width * 0.25), this.pos.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.restore();
  }
}
