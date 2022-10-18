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

  static timer = 100;
  /** 
   * @param {Game} game 
   * @param {pos} pos
   * @param {number} w
   * @param {number} h
   */
  static update(game, { x, y }, w, h) {
    if (game.mousePress && game.detectMouseOver({ x, y, w, h }) && AND.timer > 100) {
      game.sprites.push(new AND(game, game.mousePos.x, game.mousePos.y, [0, 0], true));
      AND.timer = 0;
      console.log(game.sprites);
    } else AND.timer++;

    if(AND.timer > 500) AND.timer = 0; 
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {pos} pos
   * @param {number} w
   * @param {number} h
   * @param {number} radius
   * @param {string} bgColor
   */
  static draw(ctx, { x, y }, w, h, radius = 30, bgColor) {
    // draw front arc
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = bgColor;
    ctx.strokeStyle = 'black';

    ctx.beginPath();
    ctx.arc(x + (w * 0.5), y + (h * 0.5), radius, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.lineTo(x + (w * 0.25), y + h);
    ctx.lineTo(x + (w * 0.25), y);
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
    ctx.moveTo(x + (w * 0.5) + radius, y + (h * 0.5));
    ctx.lineTo(x + w, y + (h * 0.5));
    ctx.stroke();
    
    ctx.restore();
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
    AND.draw(ctx, this.pos, this.width, this.height, this.#radius, this.bgColor);
  }
}
