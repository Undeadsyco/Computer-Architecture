import Sprite from "../Sprite";
import Circut from "./Circuit";

/** 
 * @typedef {Object} pos
 * @property {number} x
 * @property {number} y
 */

/** @type {Sprite} */
export default class Input extends Circut {
  #isActive = false;

  constructor(game, x, y, output, draggable = false) {
    super(game, x, y, 40, 40 * 0.6, [], [output], draggable);
  }

  get isActive() {
    return this.#isActive;
  }

  activate() {
    this.#isActive = true;
  }

  deactivate() {
    this.#isActive = false;
  }

  update() {
    super.update();

    if (this.#isActive) this.output[0] = 1;
    else this.output[0] = 0;
  }

  /** @param {CanvasRenderingContext2D} ctx*/
  draw(ctx) {
    super.draw(ctx);

    ctx.save();

    ctx.font = "12px Helvetica";
    ctx.fillStyle = 'gray';

    ctx.beginPath();
    ctx.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.strokeRect(this.pos.x + 5, this.pos.y + 5, this.width - 10, this.height - 10);

    ctx.strokeText(this.#isActive ? 'ON' : 'OFF', this.pos.x + this.width * 0.25, this.pos.y + this.height * 0.75 - 2);

    ctx.stroke();

    ctx.restore();
  }
}