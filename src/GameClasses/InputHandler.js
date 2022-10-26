import Game from "./Game";
import { Sprite } from "./sprites";
import Circut from "./sprites/circuits/Circuit";
import Wire from "./sprites/circuits/Wire";

export default class InputHandler {
  /** @type {Game} */ #game

  /** @param {Game} game */
  constructor(game) {
    this.#game = game;

    addEventListener('mousemove', (e) => {
      e.preventDefault();
      document.getElementById('canvasContainer').classList.remove('curser-pointer');
      this.#game.mousePos = { x: e.x - 30, y: e.y - 30 };

      const mouseOverBtn = this.#game.detectMouseOver(this.#game.ui.wireBtn),
        mouseOverGateBox = this.#game.detectMouseOver(this.#game.ui.gateBox);

      this.#game.sprites.forEach((sprite) => {
        sprite.inputPos.forEach((pos) => {
          if (this.#game.detectMouseOver({ x: pos.x - 2, y: pos.y - 5, width: 10, height: 10 }) && this.#game.wireMode) {
            document.getElementById('canvasContainer').classList.add('curser-pointer');
          }
        });
        sprite.outputPos.forEach((pos) => {
          if (this.#game.detectMouseOver({ x: pos.x - 2, y: pos.y - 5, width: 10, height: 10 }) && this.#game.wireMode) {
            document.getElementById('canvasContainer').classList.add('curser-pointer');
          }
        });
      });

      if (mouseOverBtn || mouseOverGateBox) document.getElementById('canvasContainer').classList.add('curser-pointer');
    });

    window.addEventListener('click', (e) => {
      if (this.#game.detectMouseOver(this.#game.ui.wireBtn)) {
        if (!this.#game.wireMode) {
          this.#game.wireMode = true;
        } else {
          this.#game.wireMode = false;
        }
      }
    });

    window.addEventListener('dblclick', (e) => {
      
    });

    addEventListener('mousedown', () => {
      this.#game.mousePress = true;
    });

    addEventListener('mouseup', () => {
      this.#game.mousePress = false;
    });
  }
}