// ts-check

import Game from "./Game";
import { Sprite } from "./sprites";
import AND from "./sprites/circuits/gates/SimpleGates/ANDgate";
import NOT from "./sprites/circuits/gates/SimpleGates/NOTgate";
import OR from "./sprites/circuits/gates/SimpleGates/ORgate";
import Input from "./sprites/circuits/Input";

export default class UI {

  /** @type {Game} */ #game
  /** @type {Array<Sprite>} */ #sprites = [];
  #gateBoxPos = { x: 5, y: 5 };
  #gateBoxWidth = 280;
  #gateBoxHeight = 45;
  #wireBtnPos = { x: 15 + this.#gateBoxWidth, y: 5 };
  #wireBtnWidth = 60;
  #wireBtnHeight = 20;

  /** @param {Game} game */
  constructor(game) {
    this.#game = game;
    this.#sprites.push(
      new Input(this.#game, 10, 10, 0, false),
      new NOT(this.#game, 80, 10, 0, false),
      new AND(this.#game, 150, 10, [0, 0], false),
      new OR(this.#game, 220, 10, [0, 0], false),
    );
    this.#sprites.forEach(/** @type {Sprite} */(sprite) => {
      sprite.width = 60;
      sprite.height = 60 * 0.6;
      sprite.showInputs = true;
      sprite.showOutputs = true;
      if (sprite.radius) sprite.radius = 60 * 0.6 * 0.5;
    });
    this.#sprites[0].showOutputs = false;
  }

  update() {
    const mouseOverGateBox = this.#game.detectMouseOver({ 
      x: this.#gateBoxPos.x, 
      y: this.#gateBoxPos.y, 
      w: this.#gateBoxWidth, 
      h: this.#gateBoxHeight,
    });

    if (this.#game.mousePress && mouseOverGateBox && this.#game.spawnTimer > 500) {
      const firstQuad = (
        this.#game.mousePos.x > this.#gateBoxPos.x &&
        this.#game.mousePos.x < this.#gateBoxPos.x + (this.#gateBoxWidth * 0.25)
      ),
        secondQuad = (
          this.#game.mousePos.x > this.#gateBoxPos.x + (this.#gateBoxWidth * 0.25) &&
          this.#game.mousePos.x < this.#gateBoxPos.x + (this.#gateBoxWidth * 0.5)
        ),
        thirdQuad = (
          this.#game.mousePos.x > this.#gateBoxPos.x + (this.#gateBoxWidth * 0.5) &&
          this.#game.mousePos.x < this.#gateBoxPos.x + (this.#gateBoxWidth * 0.75)
        ),
        forthQuad = (
          this.#game.mousePos.x > this.#gateBoxPos.x + (this.#gateBoxWidth * 0.25) &&
          this.#game.mousePos.x < this.#gateBoxPos.x + this.#gateBoxWidth
        );

      if (firstQuad) {
        this.#game.spawnTimer = 0;
        this.#game.inputs.push(new Input(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, 0, true));
      } else if (secondQuad) {
        this.#game.spawnTimer = 0;
        this.#game.sprites.push(new NOT(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0], true));
      } else if (thirdQuad) {
        this.#game.spawnTimer = 0;
        this.#game.sprites.push(new AND(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0], true));
      } else if (forthQuad) {
        this.#game.spawnTimer = 0;
        this.#game.sprites.push(new OR(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0], true));
      }
    }

    const mouseOverBtn = this.#game.detectMouseOver({
      x: this.#wireBtnPos.x,
      y: this.#wireBtnPos.y,
      w: this.#wireBtnWidth,
      h: this.#wireBtnHeight,
    });

    if (!this.#game.wireMode) {
      if (this.#game.mousePress && mouseOverBtn) {
        this.#game.wireMode = true;
      } else if (this.#game.mousePress && mouseOverBtn) this.#game.wireMode = false;
    }

    this.#sprites.forEach(/** @type {Sprite} */(sprite) => {
      sprite.update();
    });
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    this.#drawUI(ctx);

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

  /** @param {CanvasRenderingContext2D} ctx */
  #drawUI(ctx) {
    ctx.save();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.shadowOffsetX = -5;
    ctx.shadowOffsetY = -2;
    ctx.shadowBlur = 5;
    ctx.shadowColor = 'gray';

    ctx.rect(this.#gateBoxPos.x, this.#gateBoxPos.y, this.#gateBoxWidth, this.#gateBoxHeight);
    ctx.fill();
    ctx.stroke();

    const r = 10;
    ctx.beginPath();
    ctx.rect(this.#wireBtnPos.x, this.#wireBtnPos.y, this.#wireBtnWidth, this.#wireBtnHeight);
    ctx.moveTo(this.#wireBtnPos.x + r, this.#wireBtnPos.y);
    ctx.lineTo(this.#wireBtnPos.x + (this.#wireBtnWidth) - r, this.#wireBtnPos.y);
    ctx.quadraticCurveTo(
      this.#wireBtnPos.x + this.#wireBtnWidth, 
      this.#wireBtnPos.y, 
      this.#wireBtnPos.x + this.#wireBtnWidth,
      this.#wireBtnPos.y + r,
    );
    ctx.lineTo(this.#wireBtnPos.x + this.#wireBtnWidth, this.#wireBtnPos.y + this.#wireBtnHeight - r);
    // ctx.quadraticCurveTo()

    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}