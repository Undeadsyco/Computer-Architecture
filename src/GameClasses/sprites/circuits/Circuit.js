// @ts-check

import Game from "../../Game";
import Sprite from "../Sprite";

/** @typedef {import('../../../type/types').input} input */
/** @typedef {import('../../../type/types').output} output */

export default class Circuit extends Sprite {
  /** @type {Array<input>} */ #inputs
  /** @type {Array<output>} */ #outputs

  /**
   * @param {Game} game
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   */
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
  }

  get inputs() { return this.#inputs; }
  set inputs(inputs) { this.#inputs = inputs }

  get outputs() { return this.#outputs; }
  set outputs(outputs) { this.#outputs = outputs }

  update() {
    super.update();
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);
  }

  detectMouseOver() {
    super.detectMouseOver();

    if (!this.game.wireMode && this.game.detectMouseOver(this)) {
      document.getElementById('canvasContainer')?.classList.add('curser-grab');
    } else if (this.game.wireMode) {
      const length = this.inputs.length >= this.#outputs.length ? this.inputs.length : this.#outputs.length;
      for (let i = 0; i < length; i += 1) {
        if (this.#inputs[i]) {
          if (this.game.detectMouseOver({ x: this.#inputs[i].x - 5, y: this.#inputs[i].y - 5, width: 15, height: 15 }) && this.game.wireMode) {
            document.getElementById('canvasContainer')?.classList.add('curser-pointer');
          }
        }
        if (this.#outputs[i]) {
          if (this.game.detectMouseOver({ x: this.#outputs[i].x - 5, y: this.#outputs[i].y - 5, width: 15, height: 15 }) && this.game.wireMode) {
            document.getElementById('canvasContainer')?.classList.add('curser-pointer');
          }
        }
      }          
    }
  }
  
  detectMouseDown() {
    super.detectMouseDown();
  }

  detectMouseUp() {
    super.detectMouseUp();
  }


  /**
   * @param {number} x
   * @param {number} y 
   */
   detectClick(x, y) {
    super.detectClick(x, y);
  }

  detectDbClick() {
    super.detectDbClick();
  }
}