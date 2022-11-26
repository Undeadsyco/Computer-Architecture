// @ts-check

import Game from "../../Game";
import Circuit from "./Circuit";

/** @typedef {import('../../../type/types').output} output */

export default class Switch extends Circuit {
  /** @type {output} */ #output;
  /** @type {boolean} */ #isActive;

  /**
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y
   */
  constructor(game, x, y) {
    super(game, x, y, 40, 40 * 0.6);

    this.#isActive = true;
    this.#output = {
      type: 'output1', value: 0, visible: true,
      x: x + (this.width), y: y + (this.height * 0.5),
    }
    this.inputs = [];
    this.outputs = [this.#output];
  }

  get output() { return this.#output; }

  get isActive() { return this.#isActive; }
  toggleActive() { this.#isActive = !this.#isActive; }

  update() {
    super.update();

    if (this.#isActive) this.#output.value = 1;
    else this.#output.value = 0;
  }

  /** @param {CanvasRenderingContext2D} ctx*/
  draw(ctx) {
    super.draw(ctx);

    ctx.save();

    ctx.font = "12px Helvetica";
    ctx.fillStyle = 'gray';

    ctx.beginPath();
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
    ctx.stroke();

    ctx.strokeText(this.#isActive ? 'ON' : 'OFF', this.x + this.width * 0.25, this.y + this.height * 0.75 - 2);

    ctx.restore();
  }

  detectMouseOver() {

  }

  detectMouseDown() {
    
  }

  detectMouseUp() {
    
  }

  /**
   * @param {number} [x]
   * @param {number} [y]
   */
  detectClick(x, y) {
    
  }

  /**
   * @param {number} [x]
   * @param {number} [y]
   */
  detectDbClick(x, y) {
    
  }
}