// @ts-check

import Game from "../../../Game";
import { SISOGate } from "./structure";
import Wire from "../Wire";

/** @typedef {import('../../../../type/types').pos} pos */

export default class NOT extends SISOGate {
  /** @param {number} input */
  static invert(input) {
    return input === 1 ? 0 : 1;
  }

  /**
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y 
   * @param {number} input 
   */
  constructor(game, x, y, input) {
    super(game, x, y, 60, 60 * 0.6);
    this.bgColor = 'blue';
    this.input.value = input;
    this.output.value = NOT.invert(input);
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
    ctx.strokeStyle = this.borderColor;

    ctx.beginPath();
    ctx.moveTo(this.x + (this.width * 0.75), this.y + (this.height * 0.5));
    ctx.lineTo(this.x + (this.width * 0.25), this.y);
    ctx.lineTo(this.x + (this.width * 0.25), this.y + this.height);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}
