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

    if (this.#output.visible) {
      if (this.game.wireMode) {
        ctx.beginPath();
        ctx.arc(this.#output.x, this.#output.y, 5, 0, Math.PI, false);
        ctx.stroke(); 
      }
    }

    ctx.strokeText(this.#isActive ? 'ON' : 'OFF', this.x + this.width * 0.25, this.y + this.height * 0.75 - 2);

    ctx.restore();
  }

  detectMouseOver() {
    super.detectMouseOver();

    if (this.game.detectMouseOver(this) && !this.game.wireMode) {
      this.game.container?.classList.add('curser-pointer');
    }
  }

  detectMouseDown() {
    super.detectMouseDown();
    // if (this.game.detectMouseOver(this)) {
    //   this.game.container?.classList.replace('curser-grab', 'curser-grabbing');
    //   this.draggable = true;
    // }
  }

  detectMouseUp() {
    super.detectMouseUp();

    this.draggable = false;
    this.game.container?.classList.replace('curser-grabbing', 'curser-grab');
  }

  /**
   * @param {number} x
   * @param {number} y 
   */
  detectClick(x, y) {
    super.detectClick(x, y);

    if (this.game.detectMouseOver(this) && !this.game.wireMode) {
      this.#isActive = !this.#isActive;
    }
  }

  detectDbClick() {
    super.detectDbClick();
  }
}