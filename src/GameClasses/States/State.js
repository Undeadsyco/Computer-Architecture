// @ts-check

import Game from "../Game";
import UI from "../UI";

/** @typedef {import('../../type/types').sprite} sprite */

export default class State {
  /** @type {Game} */ #game;

  /** @type {number} */ #x;
  /** @type {number} */ #y;
  /** @type {number} */ #width;
  /** @type {number} */ #height;

  /** @type {boolean} */ #shouldPop = false;

  /** @param {Game} game */
  constructor(game,) {
    this.#game = game;
    this.#x = 0;
    this.#y = 0;
    this.#width = game.width;
    this.#height = game.height;
  }

  get game() { return this.#game; }

  get x() { return this.#x; }
  set x(value) { this.#x = value; }

  get y() { return this.#y; }
  set y(value) { this.#y = value; }

  get width() { return this.#width; }
  set width(value) { this.#width = value; }

  get height() { return this.#height; }
  set height(value) { this.#height = value; }

  get shouldPop() { return this.#shouldPop; }
  toggleShouldPop() { this.#shouldPop = !this.#shouldPop; }

  /** @param {number} deltaTime */
  update(deltaTime) {

  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {

  }
}