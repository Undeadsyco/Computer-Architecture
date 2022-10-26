// ts-check

import Game from "../Game";

/** 
 * @typedef {Object} pos
 * @property {number} x
 * @property {number} y
 */

export default class Sprite {
  /** 
   * @param {CanvasRenderingContext2D} ctx
   * @typedef {Object} pos
   * @property {number} x
   * @property {number} y
   * @param {pos} pos
   * @param {number} width
   * @param {number} height
   */
  static draw(ctx, { x, y }, width, height) {
    ctx.save();
    ctx.beginPath();
    ctx.strokStyle = 'black';
    ctx.fillStyle = 'blue';
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  /** @type {Game} */ #game;

  /** @type {pos} */ #pos = {};

  /** @type {number} */ #width;
  /** @type {number} */ #height;

  /** @type {string} */ #bgColor = 'black'
  /** @type {string} */ #borderColor = 'black'

  /** @type {boolean} */ #outline = false;
  /** @type {boolean} */ #isDraggable = false;
  /** @type {boolean} */ #isStatic = false;
  /** @type {boolean} */ #shouldDelete = false;

  /**
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   */
  constructor(game, x, y, w, h, draggable) {
    /** @type {Game} */ this.#game = game;
    /** @type {number} */ this.#width = w;
    /** @type {number} */ this.#height = h;
    /** @type {pos} */ this.#pos = { x, y };
    /** @type {boolean} */ this.#isDraggable = draggable;
  }

  get game() {
    return this.#game;
  }

  /** @return {pos} */
  get pos() {
    return this.#pos;
  }
  /** @param {pos} pos*/
  set pos(pos) {
    if (!this.isStatic) this.#pos = pos;
  }

  /** @return {number} */
  get width() {
    return this.#width;
  }
  /** @param {number} w */
  set width(w) {
    this.#width = w;
  }

  /** @return {number} */
  get height() {
    return this.#height;
  }
  /** @param {number} w */
  set height(h) {
    this.#height = h;
  }

  get bgColor() {
    return this.#bgColor
  }
  set bgColor(color) {
    this.#bgColor = color
  }

  get borderColor() {
    return this.#borderColor;
  }
  set borderColor(color) {
    this.#borderColor = color;
  }

  /** @return {boolean} */
  get outline() {
    return this.#outline
  }
  set outline(value) {
    this.#outline = value;
  }
  toggleOutline() {
    this.#outline = !this.#outline;
  }

  /** @return {boolean} */
  get draggable() {
    return this.#isDraggable;
  }
  set draggable(value) {
    this.#isDraggable = value;
  }
  toggleDraggable() {
    this.#isDraggable = !this.#isDraggable;
  }

  get isStatic() {
    return this.#isStatic;
  }
  set isStatic(value) {
    this.#isStatic = value;
  }
  toggleStatic() {
    this.#isStatic = !this.#isStatic;
  }

  get shouldDelete() {
    return this.#shouldDelete;
  }
  set shouldDelete(value) {
    this.#shouldDelete = value;
  }

  update() {
    if (this.#isDraggable && !this.#isStatic) {
      this.#pos.x = this.#game.mousePos.x - (this.#width * 0.5), this.#pos.y = this.#game.mousePos.y - (this.#height * 0.5);
    }

    if (!this.#game.mousePress && !this.#isStatic) {
      this.#isDraggable = false;
    }
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    if (this.#outline) {
      ctx.save();
      ctx.strokStyle = 'black';
      ctx.rect(this.#pos.x, this.#pos.y, this.#width, this.#height);
      ctx.stroke();
      ctx.restore();
    }
  }
}