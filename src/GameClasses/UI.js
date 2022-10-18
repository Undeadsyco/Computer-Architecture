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

  /** @param {Game} game */
  constructor(game) {
    this.#game = game;

    this.#sprites.push(
      new NOT(this.game, 10, 10, 0, false), 
      new AND(this.game, 80, 10, [0, 0], false),
      new OR(this.game, 150, 10, [0, 0], false),
    );
    this.#sprites.forEach(/** @type {Sprite} */ (sprite) => {
      sprite.width = 60;
      sprite.height = 60 * 0.6;
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
    
    this.#sprites.forEach(/** @type {Sprite} */ (sprite) => {
      sprite.draw(ctx);
    });
  }

  update() {
    NOT.update(this.#game, { x: 10, y: 10 }, 60, 60 * 0.6);
    AND.update(this.#game, { x: 80, y: 10 }, 60, 60 * 0.6);
    OR.update(this.#game, { x: 150, y: 10 }, 60, 60 * 0.6);
  }
}