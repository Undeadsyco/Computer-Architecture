// @ts-check

import Game from "../../Game";
import Circuit from "./Circuit";
import { Gate } from "./gates/structure";

/** @typedef {import('../../../type/types').pos} pos */
/** @typedef {import('../../../type/types').input} input */
/** @typedef {import('../../../type/types').output} output */
/** @typedef {import('../../../type/types').gate} gate */
/** @typedef {import('../../../type/types').circuit} circuit */

export default class Wire extends Circuit {
  /** @type {number} */ #step = 0.0;
  /** @type {number} */ #speed = 0.05;
  /** @type {Array<pos>} */ #lineCords = [];
  /** @type {boolean} */ #constructing;
  /** @type {circuit} */ #inputGate;
  /** @type {circuit} */ #outputGate;
  /** @type {input} */ #input;
  /** @type {output} */ #output;

  /**
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y 
   * @param {circuit} [inputCircuit]
   * @param {circuit} [outputCircuit]
   */
  constructor(game, x, y, inputCircuit, outputCircuit) {
    super(game, x, y, 0, 0);
    this.isStatic = true;
    this.#constructing = true;
    if (inputCircuit) this.#inputGate = inputCircuit;
    if (outputCircuit) this.#outputGate = outputCircuit;
  }

  get input() { return this.#input; }
  set input(value) { this.#input = value; }

  get output() { return this.#output; }
  set output(value) { this.#output = value; }

  get lineCords() { return this.#lineCords; }
  set lineCords(cords) { this.#lineCords = cords; }

  get inputGate() { return this.#inputGate; }
  set inputGate(gate) { this.#inputGate = gate; }

  get outputGate() { return this.#outputGate; }
  set outputGate(gate) { this.#outputGate = gate; }

  get constructing() { return this.#constructing; }
  set constructing(value) { this.#constructing = value; }

  update() {
    super.update();

    // if (this.#inputGate && this.#outputGate) {

    // }

    // if (this.#inputGate) {
    //   // this.#input = this.#inputGate.outputs[0];
    // }

    // if (this.#outputGate) {

    // }

    // this.#output = this.#input;

    if (this.inputs[0].value === 1 && this.#step < 1) this.#step += this.#speed;
    else if (this.inputs[0].value === 0 && this.#step > 0) this.#step -= this.#speed;

    if (this.#step > 1) this.#step = 1;
    else if (this.#step < 0) this.#step = 0;
    else null;
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);

    ctx.save();
    const xStart = this.x < this.game.mousePos.x ? this.x : this.game.mousePos.x,
      xEnd = this.x >= this.game.mousePos.x ? this.x : this.game.mousePos.x,
      yStart = this.y < this.game.mousePos.y ? this.y : this.game.mousePos.y,
      yEnd = this.y >= this.game.mousePos.y ? this.y : this.game.mousePos.y;

    const gradient = ctx.createLinearGradient(
      xStart, yStart,
      this.#constructing ? xEnd : this.#lineCords[this.#lineCords.length - 1].x,
      this.#constructing ? yEnd : this.#lineCords[this.#lineCords.length - 1].y
    );
    gradient.addColorStop(this.#step, 'red');
    gradient.addColorStop(this.#step, 'black');

    ctx.strokeStyle = gradient;

    ctx.beginPath();

    for (let i = 0; i < this.#lineCords.length; i += 1) {
      if (i === 0) ctx.moveTo(this.#lineCords[i].x, this.#lineCords[i].y);
      ctx.lineTo(this.#lineCords[i].x, this.#lineCords[i].y);
    }
    if (this.#constructing) {
      ctx.lineTo(this.game.mousePos.x, this.game.mousePos.y);
    }

    ctx.stroke();
    ctx.restore();
  }

  /**
   * @param {number} x
   * @param {number} y 
   */
  mouseOverAction(x, y) {

  }

  mouseDownAction() {

  }

  mouseUpAction() {

  }

  /**
   * @param {number} [x]
   * @param {number} [y]
   */
  clickAction(x, y) {
    if (x && y) {
      if (this.constructing) this.lineCords.push({ x, y });
    } else {

    }
  }

  /**
   * @param {number} [x]
   * @param {number} [y]
   */
  DbClickAction(x, y) {
    if (x && y) {

    } else {

    }
  }
}
