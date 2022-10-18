// ts-check

import Sprite from "../../../Sprite";
import Circut from "../../Circuit";

/** 
 * @typedef {Object} pos
 * @property {number} x
 * @property {number} y
 */

/** @type {Sprite} */
export default class NOT extends Circut {

  static invert(input) {
    return input === 1 ? 0 : 1;
  }

  static timer = 100;
  /** 
   * @param {Game} game 
   * @param {pos} pos
   * @param {number} w
   * @param {number} h
   */
  static update(game, { x, y }, w, h) {
    if (game.mousePress && game.detectMouseOver({ x, y, w, h }) && NOT.timer > 100) {
      game.sprites.push(new NOT(game, game.mousePos.x, game.mousePos.y, [0, 0], true));
      NOT.timer = 0;
      console.log(game.sprites);
    } else NOT.timer++;

    if (NOT.timer > 500) NOT.timer = 0;
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {pos} pos
   * @param {number} w
   * @param {number} h
   * @param {number} radius
   */
  static draw(ctx, { x, y }, w, h, bgColor) {
    ctx.save();
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'black';

    ctx.beginPath();
    ctx.moveTo(x + (w * 0.75), y + (h * 0.5));
    ctx.lineTo(x + (w * 0.25), y);
    ctx.lineTo(x + (w * 0.25), y + h);
    // ctx.lineTo(this.midPosition[0] - (this.width * 0.25), this.midPosition[1] + (this.height * 0.5));
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + (h * 0.5));
    ctx.lineTo(x + (w * 0.25), y + (h * 0.5));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + (w * 0.75), y + (h * 0.5));
    ctx.lineTo(x + w, y + (h * 0.5));
    ctx.stroke();

    ctx.restore();
  }

  constructor(game, x, y, input, draggable = false) {
    super(game, x, y, 40, 40 * 0.6, [input], [NOT.invert(input)], draggable);
    this.bgColor = 'blue';
  }

  update() {
    super.update();
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);
    NOT.draw(ctx, this.pos, this.width, this.height, this.bgColor);
  }
}
