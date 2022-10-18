import Game from "./Game";

export default class InputHandler {
  /** @type {Game} */ #game

  /** @param {Game} game */
  constructor(game) {
    this.#game = game;

    addEventListener('mousemove', (e) => {
      e.preventDefault();
      this.#game.mousePos = { x: e.x, y: e.y };
    });

    addEventListener('click', (e) => {
      
    });

    addEventListener('mousedown', () => {
      this.#game.mousePress = true;
    });
    
    addEventListener('mouseup', () => {
      this.#game.mousePress = false;
    });
  }
}