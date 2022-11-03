// @ts-check

import Game from "./Game";
import { Sprite } from "./sprites";
import Circut from "./sprites/circuits/Circuit";
import AND from "./sprites/circuits/gates/SimpleGates/ANDgate";
import NOT from "./sprites/circuits/gates/SimpleGates/NOTgate";
import OR from "./sprites/circuits/gates/SimpleGates/ORgate";
import Input from "./sprites/circuits/Input";

/** 
 * @typedef {Object} rect
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 */

export default class UI {

  /** @type {Game} */ #game
  /** @type {Array<Circut>} */ #sprites = [];

  /** @type {import("./Game").rect} */ #gateBox = { x: 5, y: 5, width: 280, height: 45 };
  /** @type {import("./Game").rect} */ #wireBtn = { x: 15 + this.#gateBox.width, y: 5, width: 60, height: 20 };
  /** @type {Array<import("./Game").rect>} */ #gateboxes = [
    { x: 10, y: 10, width: 60, height: 36 },
    { x: 80, y: 10, width: 60, height: 36 },
    { x: 150, y: 10, width: 60, height: 36 },
    { x: 220, y: 10, width: 60, height: 36 },
  ];


  /** @param {Game} game */
  constructor(game) {
    this.#game = game;
    this.#sprites.push(
      new Input(this.#game, 10, 10, 0, false),
      new NOT(this.#game, 80, 10, 0, false),
      new AND(this.#game, 150, 10, [0, 0], false),
      new OR(this.#game, 220, 10, [0, 0], false),
    );
    this.#sprites.forEach(/** @type {Circut} */(sprite) => {
      sprite.width = 60;
      sprite.height = 60 * 0.6;
      // sprite.showInputs = false;
      // sprite.showOutputs = false;
      if (sprite.radius) sprite.radius = 60 * 0.6 * 0.5;
    });
    // this.#sprites[0].showOutputs = false;
  }

  get gateBox() {
    return this.#gateBox;
  }

  set gateBox(rect) {
    this.#gateBox = rect;
  }

  get gateBoxes() {
    return this.#gateboxes;
  }

  get wireBtn() {
    return this.#wireBtn;
  }

  update() {
    if (this.#game.detectMouseOver(this.#gateBox)) {
      if (this.#game.mousePress && this.#game.spawnTimer > 500) {
        if (this.#game.detectMouseOver(this.#gateboxes[0])) {
          this.#game.spawnTimer = 0;
          this.#game.inputs.push(new Input(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, 0, true));
        } else if (this.#game.detectMouseOver(this.#gateboxes[1])) {
          this.#game.spawnTimer = 0;
          this.#game.sprites.push(new NOT(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0], true));
        } else if (this.#game.detectMouseOver(this.#gateboxes[2])) {
          this.#game.spawnTimer = 0;
          this.#game.sprites.push(new AND(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0], true));
        } else if (this.#game.detectMouseOver(this.#gateboxes[3])) {
          this.#game.spawnTimer = 0;
          this.#game.sprites.push(new OR(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0], true));
        }
      }
    }

    this.#sprites.forEach(/** @type {Sprite} */(sprite) => {
      sprite.update();
    });
  }

  /** @param {CanvasRenderingContext2D | null} ctx */
  draw(ctx) {
    this.#drawUI(ctx);

    this.#gateboxes.forEach(/** @type {rect} */(rect) => {
      ctx?.beginPath();
      ctx?.rect(rect.x, rect.y, rect.width, rect.height);
      ctx?.stroke();
    });

    this.#sprites.forEach(/** @type {Circut} */(sprite) => {
      sprite.draw(ctx);
    });
  }

  /** @param {CanvasRenderingContext2D | null} ctx */
  #drawUI(ctx) {
    ctx?.save();

    ctx?.beginPath();
    // @ts-ignore
    ctx?.strokeStyle = 'black';
    // @ts-ignore
    ctx?.fillStyle = 'white';
    // @ts-ignore
    ctx?.shadowOffsetX = -5;
    // @ts-ignore
    ctx?.shadowOffsetY = -2;
    // @ts-ignore
    ctx?.shadowBlur = 5;
    // @ts-ignore
    ctx?.shadowColor = 'gray';

    ctx?.rect(this.#gateBox.x, this.#gateBox.y, this.#gateBox.width, this.#gateBox.height);
    ctx?.fill();
    ctx?.stroke();

    const r = 10;
    ctx?.beginPath();
    // @ts-ignore
    ctx?.fillStyle = '#666'
    ctx?.moveTo(this.#wireBtn.x + r, this.#wireBtn.y);
    ctx?.lineTo(this.#wireBtn.x + (this.#wireBtn.width) - r, this.#wireBtn.y);
    ctx?.quadraticCurveTo(
      this.#wireBtn.x + this.#wireBtn.width,
      this.#wireBtn.y,
      this.#wireBtn.x + this.#wireBtn.width,
      this.#wireBtn.y + r,
    );
    ctx?.lineTo(this.#wireBtn.x + this.#wireBtn.width, this.#wireBtn.y + this.#wireBtn.height - r);
    ctx?.quadraticCurveTo(
      this.#wireBtn.x + this.#wireBtn.width,
      this.#wireBtn.y + this.#wireBtn.height,
      this.#wireBtn.x + this.#wireBtn.width - r,
      this.#wireBtn.y + this.#wireBtn.height,
    );
    ctx?.lineTo(this.#wireBtn.x + r, this.#wireBtn.y + this.#wireBtn.height);
    ctx?.quadraticCurveTo(
      this.#wireBtn.x,
      this.#wireBtn.y + this.#wireBtn.height,
      this.#wireBtn.x,
      this.#wireBtn.y + this.#wireBtn.height - r
    );
    ctx?.lineTo(this.#wireBtn.x, this.#wireBtn.y + r);
    ctx?.quadraticCurveTo(
      this.#wireBtn.x, this.#wireBtn.y,
      this.#wireBtn.x + r, this.#wireBtn.y,
    );
    ctx?.closePath();
    ctx?.fill();
    ctx?.stroke();

    // @ts-ignore
    ctx?.fillStyle = 'white';
    // @ts-ignore
    ctx?.font = '16px Helvetica'
    ctx?.fillText('wire', this.#wireBtn.x + (this.#wireBtn.width * 0.25), this.#wireBtn.y + (this.#wireBtn.height * 0.75));

    ctx?.restore();
  }
}