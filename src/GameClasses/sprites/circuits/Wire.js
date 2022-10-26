import Sprite from "../Sprite";
import Circut from "./Circuit";

/** 
 * @typedef {Object} pos
 * @property {number} x
 * @property {number} y
 */

/** @type {Sprite} */
export default class Wire extends Circut {
  #step = 0.0;
  #speed = 0.05;
  /** @type {Array<pos>} */ #lineCords;

  constructor(game, x, y, input, lineCords = []) {
    super(game, x, y, 0, 0, [input], [input], true);
    this.isStatic = true;

    this.#lineCords = lineCords;
  }

  get lineCords() {
    return this.#lineCords;
  }
  set lineCords(cords) {
    this.#lineCords = cords;
  } 

  update() {
    super.update();

    if (this.inputs[0] === 1 && this.#step < 1) this.#step += this.#speed;
    else if (this.inputs[0] === 0 && this.#step > 0) this.#step -= this.#speed;
    
    if (this.#step > 1) this.#step = 1;
    else if (this.#step < 0) this.#step = 0;
    else null;
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);

    ctx.save();
    const gradient = ctx.createLinearGradient(
      this.pos.x, this.pos.y,
      this.#lineCords[this.#lineCords.length - 1]?.x ?? this.game.mousePos.x,
      this.#lineCords[this.#lineCords.length - 1]?.y ?? this.game.mousePos.y,
    );
    gradient.addColorStop(this.#step, 'black');
    gradient.addColorStop(this.#step, 'red');

    ctx.strokeStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);

    for (let i = 0; i < this.#lineCords.length; i += 1) {
      ctx.lineTo(this.#lineCords[i].x, this.#lineCords[i].y)
    }
    if (this.draggable) ctx.lineTo(this.game.mousePos.x, this.game.mousePos.y);

    ctx.stroke();
    ctx.restore();
  }

}
