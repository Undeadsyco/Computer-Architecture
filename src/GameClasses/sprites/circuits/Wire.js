// @ts-check

import Game from "../../Game";
import Circuit from "./Circuit";
import { Gate } from "./gates/structure";

/** @typedef {import('../../../type/types').pos} pos */
/** @typedef {import('../../../type/types').input} input */
/** @typedef {import('../../../type/types').output} output */

export default class Wire extends Circuit {
  /** @type {number} */ #step = 0.0;
  /** @type {number} */ #speed = 0.05;
  /** @type {Array<pos>} */ #lineCords;
  /** @type {boolean} */ #constructing;
  /** @type {Gate} */ #inputGate;
  /** @type {Gate} */ #outputGate;
  /** @type {input} */ #input;
  /** @type {output} */ #output;

  /**
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y 
   * @param {number} input  
   */
  constructor(game, x, y, input) {
    super(game, x, y, 0, 0);
    this.isStatic = true;
    this.#constructing = true;
    this.#lineCords = [];
    this.#input = { type: 'input1', value: input, visible: true, x, y };
    this.inputs = [this.#input];
    this.outputs = [];
  }

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

    if (this.inputs[0].value === 1 && this.#step < 1) this.#step += this.#speed;
    else if (this.inputs[0].value === 0 && this.#step > 0) this.#step -= this.#speed;

    if (this.#step > 1) this.#step = 1;
    else if (this.#step < 0) this.#step = 0;
    else null;

    if (this.#inputGate && this.outputGate) {
      const length = this.#inputGate.inputs.length >= this.#inputGate.outputs.length ? this.#inputGate.inputs.length : this.#inputGate.outputs.length;


      // console.log('input gate', this.#inputGate);
      // console.log('output gate', this.#outputGate);
      // for (let i = 0; i < length; i += 1) {

      // }
    }
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);

    ctx.save();
    const gradient = ctx.createLinearGradient(
      this.x, this.y,
      this.#constructing ? this.game.mousePos.x : this.#lineCords[this.#lineCords.length - 1].x,
      this.#constructing ? this.game.mousePos.y : this.#lineCords[this.#lineCords.length - 1].y
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

  detectMouseOver() {
    super.detectMouseOver();
  }

  detectMouseDown() {
    super.detectMouseDown();
  }

  detectMouseUp() {
    super.detectMouseUp();
  }

  /**
   * @param {number} x
   * @param {number} y 
   */
  detectClick(x, y) {
    super.detectClick(x, y);

    if (this.game.wireMode && this.game.wireBuildMode) {
      if (this.#constructing) this.lineCords.push({ x, y });

      this.game.gates.forEach(/** @type {Gate} */(gate) => {
        const length = gate.inputs.length >= gate.outputs.length ? gate.inputs.length : gate.outputs.length;
        for (let i = 0; i < length; i += 1) {
          if (gate.inputs[i] && this.game.detectMouseOver({ x: gate.inputs[i].x - 5, y: gate.inputs[i].y - 5, width: 15, height: 15 })) {
            this.#outputGate = gate;
            if (this.#constructing) this.#lineCords.splice(this.#lineCords.length - 1, 1, { x: gate.inputs[i].x, y: gate.inputs[i].y });
          }
          if (gate.outputs[i] && this.game.detectMouseOver({ x: gate.outputs[i].x - 5, y: gate.outputs[i].y - 5, width: 15, height: 15 })) {
            this.#inputGate = gate;
            if (this.#constructing) this.#lineCords.splice(this.#lineCords.length - 1, 1, { x: gate.outputs[i].x, y: gate.outputs[i].y });
          }
        }
      });
    }
  }

  detectDbClick() {
    super.detectDbClick();

    this.game.gates.forEach(/** @type {Gate} */(gate) => {
      const length = gate.inputs.length >= gate.outputs.length ? gate.inputs.length : gate.outputs.length;
      for (let i = 0; i < length; i += 1) {
        if (gate.inputs[i] && this.game.detectMouseOver({ x: gate.inputs[i].x - 5, y: gate.inputs[i].y - 5, width: 15, height: 15 })) {
          this.#constructing = false;
          this.game.wireBuildMode = false;
        }
        if (gate.outputs[i] && this.game.detectMouseOver({ x: gate.outputs[i].x - 5, y: gate.outputs[i].y - 5, width: 15, height: 15 })) {
          this.#constructing = false;
          this.game.wireBuildMode = false;
        }
      }
    });
  }
}
