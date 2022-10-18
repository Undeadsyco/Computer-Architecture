// ts-check

import Game from "./Game";
import { Sprite } from "./sprites";
import AND from "./sprites/circuits/gates/SimpleGates/ANDgate";
import NOT from "./sprites/circuits/gates/SimpleGates/NOTgate";
import OR from "./sprites/circuits/gates/SimpleGates/ORgate";

export default class UI {
  /** @param {CanvasRenderingContext2D} */
  static drawUI(ctx) {
    ctx.save();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.shadowOffsetX = -5;
    ctx.shadowOffsetY = -2;
    ctx.shadowBlur = 5;
    ctx.shadowColor = 'gray';

    ctx.rect(5, 5, 280, 45);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  /** @type {Game} */ #game
  /** @type {Array<Sprite>} */ #sprites = [];
  #pos = { x: 5, y: 5 };
  #width = 280;
  #height = 45;

  /** @param {Game} game */
  constructor(game) {
    this.#game = game;
    this.#sprites.push(
      new NOT(this.#game, 10, 10, 0, false),
      new AND(this.#game, 80, 10, [0, 0], false),
      new OR(this.#game, 150, 10, [0, 0], false),
    );
    this.#sprites.forEach(/** @type {Sprite} */(sprite) => {
      sprite.width = 60;
      sprite.height = 60 * 0.6;
      sprite.showInputs = true;
      sprite.showOutputs = true;
      if (sprite.radius) sprite.radius = 60 * 0.6 * 0.5;
    })
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    UI.drawUI(ctx);

    ctx.beginPath();
    ctx.rect(10, 10, 60, 60 * 0.6);
    ctx.rect(80, 10, 60, 60 * 0.6);
    ctx.rect(150, 10, 60, 60 * 0.6);
    ctx.rect(220, 10, 60, 60 * 0.6);
    ctx.stroke();

    this.#sprites.forEach(/** @type {Sprite} */(sprite) => {
      sprite.draw(ctx);
    });
  }

  update() {
    const mouseOver = this.#game.detectMouseOver({ x: this.#pos.x, y: this.#pos.y, w: this.#width, h: this.#height })
    if (this.#game.mousePress && mouseOver && this.#game.spawnTimer > 500) {
      const firstQuad = (
        this.#game.mousePos.x > this.#pos.x &&
        this.#game.mousePos.x < this.#pos.x + (this.#width * 0.25)
      ),
        secondQuad = (
          this.#game.mousePos.x > this.#pos.x + (this.#width * 0.25) &&
          this.#game.mousePos.x < this.#pos.x + (this.#width * 0.5)
        ),
        thirdQuad = (
          this.#game.mousePos.x > this.#pos.x + (this.#width * 0.5) &&
          this.#game.mousePos.x < this.#pos.x + (this.#width * 0.75)
        ),
        forthQuad = (
          this.#game.mousePos.x > this.#pos.x + (this.#width * 0.25) &&
          this.#game.mousePos.x < this.#pos.x + this.#width
        );

      if (firstQuad) {
        this.#game.spawnTimer = 0;
        this.#game.sprites.push(new NOT(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0], true));
        console.log(this.#game.sprites);
      } else if (secondQuad) {
        this.#game.sprites.push(new AND(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0], true));
        this.#game.spawnTimer = 0;
      } else if (thirdQuad) {
        this.#game.sprites.push(new OR(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0], true));
        this.#game.spawnTimer = 0;
      } else if (forthQuad) {
        this.#game.spawnTimer = 0;
      }
    }

    this.#sprites.forEach(/** @type {Sprite} */(sprite) => {
      sprite.update();
    });
  }
}