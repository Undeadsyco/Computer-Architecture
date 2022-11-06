// @ts-check

import Game from "./Game";
import { Switch, Wire } from "./sprites/circuits";
import { AND, NOT, OR } from "./sprites/circuits/gates";
import { Gate } from "./sprites/circuits/gates/structure";

/** @typedef {import('../type/types').pos} pos */
/** @typedef {import('../type/types').rect}  rect */
/** @typedef {import('../type/types').circuit} circuit */
/** @typedef {import('../type/types').input} input */
/** @typedef {import('../type/types').output} output */

export default class InputHandler {
  /** @type {Game} */ #game
  /** @type {number} */ #lastClick;

  /** @param {Game} game */
  constructor(game) {
    this.#game = game;
    this.#lastClick = game.timer;

    addEventListener('mousemove', (e) => {
      e.preventDefault();
      this.#game.detectMouseMove(e.x, e.y);
      this.#game.ui.detectMouseOver();
      this.#game.gates.forEach(/** @type {Gate} */(gate) => {
        gate.detectMouseOver();
      });
      this.#game.switches.forEach(/** @type {Switch} */(input) => {
        input.detectMouseOver();
      });
    });

    addEventListener('click', (e) => {
      this.#game.ui.detectClick();

      if (((this.#game.timer - this.#lastClick) / 1000) > 0.5) {
        this.#game.gates.forEach(/** @type {Gate} */(gate) => {
          gate.detectClick(this.#game.mousePos.x, this.#game.mousePos.y);
        });
        this.#game.switches.forEach(/** @type {Switch} */(input) => {
          input.detectClick(this.#game.mousePos.x, this.#game.mousePos.y);
        });
        this.#game.wires.forEach(/** @type {Wire} */(wire) => {
          wire.detectClick(this.#game.mousePos.x, this.#game.mousePos.y);
        });
      }
      
      this.#lastClick = this.#game.timer;
    });

    addEventListener('dblclick', (e) => {
      this.#game.wires.forEach(/** @type {Wire} */(wire) => {
        wire.detectDbClick();
      })
    });

    addEventListener('mousedown', () => {
      this.#game.ui.detectMouseDown();

      // TODO: move into gate detectMouseDown method
      this.#game.gates.forEach(/** @type {Gate} */(gate) => {
        gate.detectMouseDown();
      });
      this.#game.switches.forEach(/** @type {Switch} */(input) => {
        input.detectMouseDown();
      })
    });

    addEventListener('mouseup', () => {
      this.#game.gates.forEach(/** @type {Gate} */(gate) => {
        gate.detectMouseUp();
      });
      this.#game.switches.forEach(/** @type {Switch} */(input) => {
        input.detectMouseUp();
      });
    });
  }
}