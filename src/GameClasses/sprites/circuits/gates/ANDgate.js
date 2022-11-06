// @ts-check

import Game from "../../../Game";
import { DISOGate } from "./structure";
import Wire from "../Wire";

export default class AND extends DISOGate {

  /**
   * @param {Array<number>} inputs 
   * @returns {number}
   */
  static calculateOutput([A, B]) {
    return A && B ? 1 : 0;
  }

  /**
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y 
   * @param {Array<number>} inputs 
   */
  constructor(game, x, y, inputs) {
    super(game, x, y, 60, parseInt(`${60 * 0.6}`));
    this.radius = (this.height * 0.5);
    this.bgColor = 'red';
    this.input1.value = inputs[0];
    this.input2.value = inputs[1];
    this.output.value = AND.calculateOutput(inputs);
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
    ctx.arc(this.x + (this.width * 0.5), this.y + (this.height * 0.5), this.radius, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.lineTo(this.x + (this.width * 0.25), this.y + this.height);
    ctx.lineTo(this.x + (this.width * 0.25), this.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.restore();
  }
}
