// @ts-check

import Game from "../../../../Game";
import Gate from "./Gate";

/** @typedef {import('../../../../../type/types').input} input */
/** @typedef {import('../../../../../type/types').output} output */

export default class DISOGate extends Gate {
  /** @type {input} */ #input1;
  /** @type {input} */ #input2;
  /** @type {output} */ #output;

  /**
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   */
   constructor(game, x, y, w, h) {
    super(game, x, y, w, h);

    this.#input1 = { 
      type: 'input1', value: 0, visible: true,
      x, y: y + (this.height * 0.25),
    };
    this.#input2 = { 
      type: 'input2', value: 0, visible: true,
      x, y: y + (this.height * 0.75),
    };
    this.#output = { 
      type: 'output', value: 0, visible: true,
      x: x + this.width, y: y + (this.height * 0.5),
    };

    this.inputs = [this.#input1, this.#input2];
    this.outputs = [this.#output];
  }

  get input1() { return this.#input1; }
  set input1(value) { this.#input1 = value; }

  get input2() { return this.#input2; }
  set input2(value) { this.#input2 = value; }

  get output() { return this.#output; }
  set output(value) { this.#output = value; }

  update() {
    super.update();

    this.#input1.x = this.x, this.#input1.y = this.y + (this.height * 0.25);
    this.#input2.x = this.x, this.#input2.y = this.y + (this.height * 0.75);
    this.#output.x = this.x + this.width, this.#output.y = this.y + (this.height * 0.5);
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);

    ctx.save();

    if (this.#input1.visible && this.#input2.visible && this.#output.visible) {
      ctx.beginPath();
      ctx.moveTo(this.#input1.x, this.#input1.y);
      ctx.lineTo(this.#input1.x + (this.width * 0.25), this.#input1.y)
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(this.#input2.x, this.#input2.y);
      ctx.lineTo(this.#input2.x + (this.width * 0.25), this.#input2.y)
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(this.#output.x, this.#output.y);
      ctx.lineTo(this.#output.x - (this.width * 0.25), this.#output.y);
      ctx.stroke();

      if (this.game.wireMode) {
        ctx.beginPath();
        ctx.arc(this.#input1.x, this.#input1.y, 5, 0, Math.PI * 2, false);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.#input2.x, this.#input2.y, 5, 0, Math.PI * 2, false);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.output.x, this.output.y, 5, 0, Math.PI * 2, false);
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