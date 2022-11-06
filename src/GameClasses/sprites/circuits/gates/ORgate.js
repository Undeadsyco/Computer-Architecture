// @ts-check

import Game from "../../../Game";
import { DISOGate } from "./structure";
import Wire from "../Wire";



export default class OR extends DISOGate {

  /**
   * @param {Array<number>} inputs 
   * @returns {number}
   */
  static calculateOutput([A, B]) {
    return A || B ? 1 : 0;
  }

  /**
   * 
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y 
   * @param {Array<number>} inputs 
   */
  constructor(game, x, y, inputs) {
    super(game, x, y, 60, (60 * 0.6));
    this.radius = (this.height * 0.5);
    this.bgColor = 'green';
    this.input1.value = inputs[0];
    this.input2.value = inputs[1];
    this.output.value = OR.calculateOutput(inputs)
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

    ctx.arc(this.x + (this.width * 0.15), this.y + (this.height * 0.5), this.radius, Math.PI * 1.65, Math.PI * 0.35, false);
    ctx.lineTo(this.x + (this.width * 0.75), this.y + (this.height * 0.5));
    ctx.closePath();
    ctx.fill();

    if (this.input1.visible) {
      ctx.moveTo(this.x + (this.width * 0.25), this.y + (this.height * 0.25));
      ctx.lineTo(this.x + (this.width * 0.75) - this.radius, this.y + (this.height * 0.25));
    }
    if (this.input2.visible) {
      ctx.moveTo(this.x + (this.width * 0.25), this.y + (this.height * 0.75));
      ctx.lineTo(this.x + (this.width * 0.75) - this.radius, this.y + (this.height * 0.75));
    }

    ctx.stroke();

    ctx.restore();
  }
}
