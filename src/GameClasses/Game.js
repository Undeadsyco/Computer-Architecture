// @ts-check

/**
 * @typedef {Object} pos
 * @property {number} x
 * @property {number} y
 */

/** 
 * @typedef {Object} rect
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 */

import InputHandler from "./InputHandler";
import { Sprite } from "./sprites";
import Circut from "./sprites/circuits/Circuit";
import Input from "./sprites/circuits/Input";
import Wire from "./sprites/circuits/Wire";
import UI from "./UI";

export default class Game {
  /** @type {number} */ #width;
  /** @type {number} */ #height;
  /** @type {pos} */ #mousePos = { x: 0, y: 0 };
  /** @type {boolean} */ #mousePress = false;
  /** @type {Array<Circut>} */ #sprites = [];
  /** @type {Array<Input>} */ #inputs = [];
  /** @type {Array<Wire>} */ #wires = [];
  /** @type {InputHandler} */ #inputHandler;
  /** @type {UI} */ #ui;
  /** @type {number} */ #spawnTimer = 0;
  /** @type {boolean} */ #wireMode = false;
  /** @type {boolean} */ #wireBuildMode = false;

  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.#width = width;
    this.#height = height;
    this.#ui = new UI(this);
    this.#inputHandler = new InputHandler(this);

    // this.#sprites.push();
    // this.#inputs.push();
  }

  update(deltaTime) {
    this.#spawnTimer += deltaTime;
    this.#sprites.forEach(/** @type {Circut} */(sprite) => {
      sprite.update();
    });
    this.#inputs.forEach(/** @type {Input} */(input) => {
      input.update();
    });

    this.#ui.update();

    this.#sprites = this.#sprites.filter(/** @type {Circut} */(sprite) => !sprite.shouldDelete);
    this.#inputs = this.#inputs.filter(/** @type {Input} */(input) => !input.shouldDelete);
  }

  /** @param {CanvasRenderingContext2D | null} ctx */
  draw(ctx) {
    if (this.#wireMode) {
      ctx?.save();
      // @ts-ignore
      ctx?.fillStyle = 'white';
      // @ts-ignore
      ctx?.strokeStyle = 'red';
      // @ts-ignore
      ctx?.lineWidth = 4;
      ctx?.beginPath();
      ctx?.strokeRect(2, 2, this.#width-4, this.#height-4);
      ctx?.restore();
    }

    this.#sprites.forEach(/** @type {Circut} */(sprite) => {
      sprite.draw(ctx);
    });
    this.#inputs.forEach(/** @type {Input} */(input) => {
      input.draw(ctx);
    });

    this.#ui.draw(ctx);

  }

  /**
   * @param {Sprite} rect1
   * @param {Sprite} rect2
   */
  detectCollision(rect1, rect2) {

  }

  /** 
   * @param {rect} rect
   */
  detectMouseOver(rect) {
    return (
      this.#mousePos.x > rect.x &&
      this.#mousePos.x < rect.x + rect.width &&
      this.#mousePos.y > rect.y  &&
      this.#mousePos.y < rect.y + rect.height
    );
  }

  get ui() {
    return this.#ui;
  }

  get sprites() {
    return this.#sprites;
  }

  set sprites(sprites) {
    this.#sprites = sprites;
  }

  get inputs() {
    return this.#inputs;
  }

  set inputs(inputs) {
    this.inputs = inputs;
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

  get spawnTimer() {
    return this.#spawnTimer;
  }

  set spawnTimer(value) {
    this.#spawnTimer = value;
  }

  get wireMode() {
    return this.#wireMode;
  }

  set wireMode(value) {
    this.#wireMode = value;
  }

  get wireBuildMode() {
    return this.#wireBuildMode;
  }

  set wireBuildMode(value) {
    this.#wireBuildMode = value;
  }
}