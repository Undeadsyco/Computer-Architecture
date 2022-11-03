// @ts-check

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
    
    ctx.save();
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'black';

    ctx.beginPath();
    ctx.moveTo(this.pos.x + (this.width * 0.75), this.pos.y + (this.height * 0.5));
    ctx.lineTo(this.pos.x + (this.width * 0.25), this.pos.y);
    ctx.lineTo(this.pos.x + (this.width * 0.25), this.pos.y + this.height);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}
