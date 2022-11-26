// @ts-check

import Game from "../Game";
import UI from "../UI";
import State from "./State";

/** @typedef {import('../../type/types').rect} rect */
/** @typedef {import('../../type/types').sprite} sprite */
/** @typedef {import('../../type/types').gate} gate */
/** @typedef {import('../../type/types').switches} switches */
/** @typedef {import('../../type/types').wire} wire */

export default class MainState extends State {
  /** @type {Array<gate>} */ #gates = [];
  /** @type {Array<switches>} */ #switches = [];
  /** @type {Array<wire>} */ #wires = [];

  /** @param {Game} game */
  constructor(game) {
    super(game);
  }

  get gates() { return this.#gates; }
  set gates(gates) { this.#gates = gates; }

  get switches() { return this.#switches; }
  set switches(switches) { this.switches = switches; }

  get wires() { return this.#wires; }
  set wires(wires) { this.#wires = wires; }

  /** @param {number} deltaTime */
  update(deltaTime) {
    this.#wires = this.#wires.filter((wire) => !wire.shouldDelete);
    this.#gates = this.#gates.filter((sprite) => !sprite.shouldDelete);
    this.#switches = this.#switches.filter((input) => !input.shouldDelete);
    
    this.#wires.forEach((wire) => wire.update());
    this.#gates.forEach((sprite) => sprite.update());
    this.#switches.forEach((input) => input.update());
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {    
    this.#wires.forEach((wire) => wire.draw(ctx));
    this.#gates.forEach((sprite) => sprite.draw(ctx));
    this.#switches.forEach((input) => input.draw(ctx));
  }
}