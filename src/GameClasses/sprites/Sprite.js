// @ts-check

import { v4 } from 'uuid';
import Game from "../Game";

/** @typedef {import('../../type/types').pos} pos */
/** @typedef {import('../../type/types').gate} gate */
export default class Sprite {
  /** 
   * @param {CanvasRenderingContext2D} ctx
   * @param {pos} pos
   * @param {number} width
   * @param {number} height
   */
  static draw(ctx, { x, y }, width, height) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'blue';
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  /** @type {Game} */ #game;
  /** @type {string} */ #id;

  /** @type {number} */ #x;
  /** @type {number} */ #y;
  /** @type {number} */ #width;
  /** @type {number} */ #height;
  /** @type {number} */ #radius;

  /** @type {string} */ #bgColor;
  /** @type {string} */ #borderColor;

  /** @type {boolean} */ #outline;
  /** @type {boolean} */ #isDraggable;
  /** @type {boolean} */ #isStatic;
  /** @type {boolean} */ #shouldDelete;

  /**
   * @param {Game} game
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   */
  constructor(game, x, y, w, h) {
    this.#game = game;
    this.#id = v4();

    this.#x = x;
    this.#y = y;
    this.#width = w;
    this.#height = h;

    this.#bgColor = 'black'
    this.#borderColor = 'black'
  
    this.#outline = false;
    this.#isDraggable = false;
    this.#isStatic = false;
    this.#shouldDelete = false;
  }

  get game() { return this.#game; }
  get id() { return this.id; }

  get x() { return this.#x; }
  set x(x) { if (!this.isStatic) this.#x = x; }

  get y() { return this.#y; }
  set y(y) { if (!this.isStatic) this.#y = y; }

  get width() { return this.#width; }
  set width(w) { this.#width = w; }

  get height() { return this.#height; }
  set height(h) { this.#height = h; }

  get radius() { return this.#radius; }
  set radius(r) { this.#radius = r; }

  get bgColor() { return this.#bgColor }
  set bgColor(color) { this.#bgColor = color }

  get borderColor() { return this.#borderColor; }
  set borderColor(color) { this.#borderColor = color; }

  get outline() { return this.#outline }
  set outline(value) { this.#outline = value; }
  toggleOutline() { this.#outline = !this.#outline; }

  get draggable() { return this.#isDraggable; }
  set draggable(value) { this.#isDraggable = value; }
  toggleDraggable() { this.#isDraggable = !this.#isDraggable; }

  get isStatic() { return this.#isStatic; }
  set isStatic(value) { this.#isStatic = value; }
  toggleStatic() { this.#isStatic = !this.#isStatic; }

  get shouldDelete() { return this.#shouldDelete; }
  set shouldDelete(value) { this.#shouldDelete = value; }

  update() {
    if (this.#isDraggable && !this.#isStatic) {
      this.#x = this.#game.mousePos.x - (this.#width * 0.5), this.#y = this.#game.mousePos.y - (this.#height * 0.5);
    }
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    if (this.#outline) {
      ctx.save();
      ctx.strokeStyle = 'black';
      ctx.rect(this.#x, this.#y, this.#width, this.#height);
      ctx.stroke();
      ctx.restore();
    }
  }

  detectMouseOver() {}
  
  detectMouseDown() {}

  detectMouseUp() {}

  /**
   * @param {number} x
   * @param {number} y 
   */
  detectClick(x, y) {}

  detectDbClick() {}
}