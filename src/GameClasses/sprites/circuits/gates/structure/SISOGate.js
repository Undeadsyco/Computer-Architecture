// @ts-check

import Game from "../../../../Game";
import Gate from "./Gate";

/** @typedef {import('../../../../../type/types').input} input */
/** @typedef {import('../../../../../type/types').output} output */

export default class SISOGate extends Gate {
  /** @type {input} */ #input
  /** @type {output} */ #output

  /**
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   */
   constructor(game, x, y, w, h) {
    super(game, x, y, w, h);

    this.#input = {
      type: 'input1', value: 0,
      x: x, y: y + (this.height * 0.5),
      visible: true,
    };
    this.#output = {
      type: 'output1', value: 0,
      x: x + this.width, y: y + (this.height * 0.5),
      visible: true,
    };
    this.inputs = [this.#input];
    this.outputs = [this.#output];
  }

  get input() { return this.#input; }
  set input(value) { this.#input = value; }

  get output() { return this.#output; }
  set output(value) { this.#output = value; }

  update() {
    super.update();

    this.#input.x = this.x, this.#input.y = this.y + (this.height * 0.5);
    this.#output.x = this.x + this.width, this.output.y = this.y + (this.height * 0.5);
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);

    ctx.save();

    if (this.#input.visible && this.#output.visible) {
      ctx.beginPath();
      ctx.moveTo(this.#input.x, this.#input.y);
      ctx.lineTo(this.#input.x + (this.width * 0.25), this.#input.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(this.#output.x, this.#output.y);
      ctx.lineTo(this.#output.x - (this.width * 0.25), this.#output.y);
      ctx.stroke();

      if (this.game.wireMode) {

        ctx.beginPath();
        ctx.arc(this.#input.x, this.#input.y, 5, 0, Math.PI * 2, false);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.#output.x, this.#output.y, 5, 0, Math.PI * 2, false);
        ctx.stroke();
      }
    }

    ctx.restore();
  }

  detectMouseOver() {
    super.detectMouseOver();
  }
  
  detectMouseDown() {
    super.detectMouseDown();
  }

  detectMouseUp() {
    super.detectMouseUp();
  }

  detectClick() {
    super.detectClick()
  }

  detectDbClick() {
    super.detectDbClick();
  }
}