// @ts-check

import Game from "../../../../Game";
import Circuit from "../../Circuit";
import Wire from "../../Wire";

/** @typedef {import('../../../../../type/types').gate2} gate */

export default class Gate extends Circuit {
  /** @type {Array<Wire>} */ #wires;

  /**
   * @param {Game} game 
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   */
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
    this.#wires = [];
  }

  get wires() { return this.#wires; }
  set wires(wires) { this.#wires = wires; }

  update() {
    super.update();
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    super.draw(ctx);
  }

  detectMouseOver() {
    super.detectMouseOver();

    if (!this.game.wireMode  && !this.game.deleteMode && this.game.detectMouseOver(this)) {
      document.getElementById('canvasContainer')?.classList.add('curser-grab');
    } else if (this.game.wireMode) {
      const length = this.inputs.length >= this.outputs.length ? this.inputs.length : this.outputs.length;
      for (let i = 0; i < length; i += 1) {
        if (this.inputs[i]) {
          if (this.game.detectMouseOver({ x: this.inputs[i].x - 5, y: this.inputs[i].y - 5, width: 15, height: 15 }) && this.game.wireMode) {
            document.getElementById('canvasContainer')?.classList.add('curser-pointer');
          }
        }
        if (this.outputs[i]) {
          if (this.game.detectMouseOver({ x: this.outputs[i].x - 5, y: this.outputs[i].y - 5, width: 15, height: 15 }) && this.game.wireMode) {
            document.getElementById('canvasContainer')?.classList.add('curser-pointer');
          }
        }
      }
    } else if (this.game.deleteMode && this.game.detectMouseOver(this)) {
      this.game.container?.classList.replace('curser-grab', 'curser-pointer');
    }
  }

  detectMouseDown() {
    super.detectMouseDown();

    if (this.game.detectMouseOver(this) && !this.game.wireMode && !this.game.deleteMode && this.#wires.length === 0) {
      document.getElementById('canvasContainer')?.classList.replace('curser-grab', 'curser-grabbing');
      this.draggable = true;
    }
  }

  detectMouseUp() {
    super.detectMouseUp();

    this.game.gates.forEach(/** @type {gate} */(gate) => {
      document.getElementById('canvasContainer')?.classList.replace('curser-grabbing', 'curser-grab');
      gate.draggable = false;
    });
  }

  /**
   * @param {number} x
   * @param {number} y 
   */
  detectClick(x, y) {
    super.detectClick(x, y);

    if (this.game.wireMode && !this.game.wireBuildMode) {
      const length = this.inputs.length >= this.outputs.length ? this.inputs.length : this.outputs.length;
      for (let i = 0; i < length; i += 1) {
        if (this.inputs[i] && this.game.detectMouseOver({ x: this.inputs[i].x - 5, y: this.inputs[i].y - 5, width: 15, height: 15 })) {
          this.game.wireBuildMode = true;
          const wire = new Wire(this.game, this.inputs[i].x, this.inputs[i].y, 0);
          wire.inputGate = this;
          this.#wires.push(wire);
          this.game.wires.push(wire);
        }
        if (this.outputs[i] && this.game.detectMouseOver({ x: this.outputs[i].x - 5, y: this.outputs[i].y - 5, width: 15, height: 15 })) {
          this.game.wireBuildMode = true;
          const wire = new Wire(this.game, this.outputs[i].x, this.outputs[i].y, this.outputs[i].value);
          wire.outputGate = this;
          this.#wires.push(wire);
          this.game.wires.push(wire);
        }
      }
    }

    if (this.game.deleteMode && this.game.detectMouseOver(this)) {
      this.shouldDelete = true;
    }
  }

  detectDbClick() {
    super.detectDbClick();
  }
}