// ts-check

/**
 * @typedef {Object} pos
 * @property {number} x
 * @property {number} y
 */

import InputHandler from "./InputHandler";
import { Sprite } from "./sprites";
import UI from "./UI";

export default class Game {
  /** @type {number} */ #width;
  /** @type {number} */ #height;
  /** @type {Array<Sprite>} */ #sprites = [];
  /** @type {Array<Input>} */ #inputs = [];
  /** @type {pos} */ #mousePos = { x: 0, y: 0 };
  /** @type {boolean} */ #mousePress = false;

  /** @type {InputHandler} */ #inputHandler;
  /** @type {UI} */ #ui;
  
  /**
   * @param {number} width
   * @param {number} height 
   * @param {pos} mousePos
   */
  constructor(width, height) {
    this.#width = width;
    this.#height = height;
    this.#inputHandler = new InputHandler(this);
    this.#ui = new UI(this);
  }

  update() {
    this.#sprites.forEach(/** @type {Sprite} */ (sprite) => {
      sprite.update();
    });
    // this.#inputs.forEach(/** @type {Input} */ (input) => {
    //   input.update();
    // });

    this.#ui.update();

    this.#sprites = this.#sprites.filter(/** @type {Sprite} */ (sprite) => !sprite.shouldDelete);
    // this.#inputs = this.#inputs.filter(/** @type {Input} */ (input) => !input.shouldDelete);
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    this.#sprites.forEach(/** @type {Sprite} */ (sprite) => {
      sprite.draw(ctx);
    });
    // this.#inputs.forEach(/** @type {Input} */ (input) => {
    //   input.draw(ctx);
    // });

    this.#ui.draw(ctx);
  }

  /**
   * @param {Sprite} rect1
   * @param {Sprite} rect2
   */
  detectCollision(rect1, rect2) {

  }

  /** 
   * @typedef {Object} rect
   * @property {number} x 
   * @property {number} y
   * @property {number} w
   * @property {number} h
   * @param {rect} rect
   */
  detectMouseOver(rect) {
    return (
      this.#mousePos.x > rect.x &&
      this.#mousePos.x < rect.x + rect.w &&
      this.#mousePos.y > rect.y &&
      this.#mousePos.y < rect.y + rect.h
    );
  }

  get sprites() {
    return this.#sprites;
  }

  set sprites(sprites) {
    this.#sprites = sprites;
  }

  /** @return {pos} */
  get mousePos() {
    return this.#mousePos;
  }

  /** @param {pos} pos */
  set mousePos(pos) {
    this.#mousePos = pos;
  }

  get mousePress() {
    return this.#mousePress;
  }
  
  set mousePress(value) {
    this.#mousePress = value;
  }
}