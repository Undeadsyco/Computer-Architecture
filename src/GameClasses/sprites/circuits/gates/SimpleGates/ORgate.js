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

  static timer = 100;
  /** 
   * @param {Game} game 
   * @param {pos} pos
   * @param {number} w
   * @param {number} h
   */
  static update(game, { x, y }, w, h) {
    if (game.mousePress && game.detectMouseOver({ x, y, w, h }) && OR.timer > 100) {
      game.sprites.push(new OR(game, game.mousePos.x, game.mousePos.y, [0, 0], true));
      OR.timer = 0;
      console.log(game.sprites);
    } else OR.timer++;

    if (OR.timer > 500) OR.timer = 0;
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {pos} pos
   * @param {number} w
   * @param {number} h
   * @param {number} r
   * @param {string} bgColor
   */
  static draw(ctx, { x, y }, w, h, r = 30, bgColor) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = bgColor;
    ctx.strokeStyle = 'black';

    ctx.arc(x, y + (h * 0.5), r, Math.PI * 1.70, Math.PI * 0.30, false);
    ctx.lineTo(x + (w * 0.75), y + (h * 0.5));
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + (h * 0.25));
    ctx.lineTo(x + (w * 0.25), y + (h * 0.25));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + (h * 0.75));
    ctx.lineTo(x + (w * 0.25), y + (h * 0.75));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + (w * 0.75), y + (h * 0.5));
    ctx.lineTo(x + w, y + (h * 0.5));
    ctx.stroke();

    ctx.restore();
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
    OR.draw(ctx, this.pos, this.width, this.height, this.#radius, this.bgColor);
  }
}
