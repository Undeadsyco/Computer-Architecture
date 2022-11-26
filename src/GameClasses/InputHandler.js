// @ts-check

import Game from "./Game";
import { Switch, Wire } from "./sprites/circuits";
import { AND, NOT, OR } from "./sprites/circuits/gates";
import { Gate } from "./sprites/circuits/gates/structure";

/** @typedef {import('../type/types').pos} pos */
/** @typedef {import('../type/types').rect}  rect */
/** @typedef {import('../type/types').input} input */
/** @typedef {import('../type/types').output} output */
/** @typedef {import('../type/types').circuit} circuit */

export default class InputHandler {
  /** @type {Game} */ #game
  /** @type {number} */ #lastClick;

  /** @param {Game} game */
  constructor(game) {
    this.#game = game;

    addEventListener('mousemove', (e) => {
      e.preventDefault();

      this.#game.detectMouseMove(e.x, e.y);
    });

    addEventListener('click', (e) => {
      this.#game.UI.clickAction(e.x, e.y);
    });

    addEventListener('dblclick', (e) => {

    });

    addEventListener('mousedown', () => {

    });

    addEventListener('mouseup', () => {
      
    });
  }
}