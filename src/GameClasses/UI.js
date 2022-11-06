// @ts-check

import Game from "./Game";
import { Switch } from "./sprites/circuits";
import { NOT, AND, OR } from './sprites/circuits/gates';


/** @typedef {import("../type/types").rect} rect */
/** @typedef {import('../type/types').circuit} circuit */
/** @typedef {import("../type/types").input} input */
/** @typedef {import("../type/types").output} output */

export default class UI {

  /** @type {Game} */ #game
  /** @type {Array<circuit>} */ #sprites = [];

  /** @type {rect} */ #gateBox = { x: 5, y: 5, width: 280, height: 45 };
  /** @type {Array<rect>} */ #gateboxes = [
    { x: 10, y: 10, width: 60, height: 36 },
    { x: 80, y: 10, width: 60, height: 36 },
    { x: 150, y: 10, width: 60, height: 36 },
    { x: 220, y: 10, width: 60, height: 36 },
  ];

  /** @type {rect} */ #wireBtn = { x: 15 + this.#gateBox.width, y: 5, width: 60, height: 20 };
  /** @type {rect} */ #deleteBtn = {
    x: this.#wireBtn.x,
    y: this.#wireBtn.y + this.#wireBtn.height + 5,
    width: this.#wireBtn.width,
    height: this.#wireBtn.height,
  };

  /** @param {Game} game */
  constructor(game) {
    this.#game = game;
    this.#sprites.push(
      new Switch(this.#game, 10, 10),
      new NOT(this.#game, 80, 10, 0),
      new AND(this.#game, 150, 10, [0, 0]),
      new OR(this.#game, 220, 10, [0, 0]),
    );
    this.#sprites.forEach(/** @type {circuit} */(circuit) => {
      circuit.width = 60;
      circuit.height = 60 * 0.6;
      circuit.radius = circuit.height * 0.5;
      circuit.inputs?.forEach(/** @type {input} */(input) => {
        input.visible = false;
      });
      circuit.outputs?.forEach(/** @type {output} */(output) => {
        output.visible = false;
      })
    });
  }

  get gateBox() { return this.#gateBox; }
  set gateBox(rect) { this.#gateBox = rect; }

  get gateBoxes() { return this.#gateboxes; }
  get wireBtn() { return this.#wireBtn; }

  update() {
    this.#sprites.forEach(/** @type {circuit} */(sprite) => {
      sprite.update();
    });
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    ctx.save();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.shadowOffsetX = -5;
    ctx.shadowOffsetY = -2;
    ctx.shadowBlur = 5;
    ctx.shadowColor = 'gray';

    ctx.beginPath();
    ctx.rect(this.#gateBox.x, this.#gateBox.y, this.#gateBox.width, this.#gateBox.height);
    ctx.fill();
    ctx.stroke();

    const r = 10;
    ctx.beginPath();
    ctx.fillStyle = '#666'
    ctx.moveTo(this.#wireBtn.x + r, this.#wireBtn.y);
    ctx.lineTo(this.#wireBtn.x + (this.#wireBtn.width) - r, this.#wireBtn.y);
    ctx.quadraticCurveTo(
      this.#wireBtn.x + this.#wireBtn.width,
      this.#wireBtn.y,
      this.#wireBtn.x + this.#wireBtn.width,
      this.#wireBtn.y + r,
    );
    ctx.lineTo(this.#wireBtn.x + this.#wireBtn.width, this.#wireBtn.y + this.#wireBtn.height - r);
    ctx.quadraticCurveTo(
      this.#wireBtn.x + this.#wireBtn.width,
      this.#wireBtn.y + this.#wireBtn.height,
      this.#wireBtn.x + this.#wireBtn.width - r,
      this.#wireBtn.y + this.#wireBtn.height,
    );
    ctx.lineTo(this.#wireBtn.x + r, this.#wireBtn.y + this.#wireBtn.height);
    ctx.quadraticCurveTo(
      this.#wireBtn.x,
      this.#wireBtn.y + this.#wireBtn.height,
      this.#wireBtn.x,
      this.#wireBtn.y + this.#wireBtn.height - r
    );
    ctx.lineTo(this.#wireBtn.x, this.#wireBtn.y + r);
    ctx.quadraticCurveTo(
      this.#wireBtn.x, this.#wireBtn.y,
      this.#wireBtn.x + r, this.#wireBtn.y,
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.font = '16px Helvetica'
    ctx.fillText('wire', this.#wireBtn.x + (this.#wireBtn.width * 0.25), this.#wireBtn.y + (this.#wireBtn.height * 0.75));

    
    ctx.beginPath();
    ctx.fillStyle = '#bd0b1d'
    ctx.moveTo(this.#deleteBtn.x + r, this.#deleteBtn.y);
    ctx.lineTo(this.#deleteBtn.x + (this.#deleteBtn.width) - r, this.#deleteBtn.y);
    ctx.quadraticCurveTo(
      this.#deleteBtn.x + this.#deleteBtn.width,
      this.#deleteBtn.y,
      this.#deleteBtn.x + this.#deleteBtn.width,
      this.#deleteBtn.y + r,
    );
    ctx.lineTo(this.#deleteBtn.x + this.#deleteBtn.width, this.#deleteBtn.y + this.#deleteBtn.height - r);
    ctx.quadraticCurveTo(
      this.#deleteBtn.x + this.#deleteBtn.width,
      this.#deleteBtn.y + this.#deleteBtn.height,
      this.#deleteBtn.x + this.#deleteBtn.width - r,
      this.#deleteBtn.y + this.#deleteBtn.height,
    );
    ctx.lineTo(this.#deleteBtn.x + r, this.#deleteBtn.y + this.#deleteBtn.height);
    ctx.quadraticCurveTo(
      this.#deleteBtn.x,
      this.#deleteBtn.y + this.#deleteBtn.height,
      this.#deleteBtn.x,
      this.#deleteBtn.y + this.#deleteBtn.height - r
    );
    ctx.lineTo(this.#deleteBtn.x, this.#deleteBtn.y + r);
    ctx.quadraticCurveTo(
      this.#deleteBtn.x, this.#deleteBtn.y,
      this.#deleteBtn.x + r, this.#deleteBtn.y,
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.font = '16px Helvetica'
    ctx.fillText('Delete', this.#deleteBtn.x + (this.#deleteBtn.width * 0.15), this.#deleteBtn.y + (this.#deleteBtn.height * 0.75));

    ctx.restore();

    this.#gateboxes.forEach(/** @type {rect} */({ x, y, width, height }) => {
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.stroke();
    });

    this.#sprites.forEach(/** @type {circuit} */(sprite) => {
      sprite.draw(ctx);
    });
  }

  detectMouseOver() {
    if (this.#game.detectMouseOver(this.#wireBtn)) this.#game.container?.classList.add('curser-pointer');
    if (this.#game.detectMouseOver(this.#deleteBtn)) this.#game.container?.classList.add('curser-pointer');
    this.#gateboxes.forEach(/** @type {rect} */(box) => {
      if (this.#game.detectMouseOver(box) && !this.#game.wireMode) {
        this.#game.container?.classList.add('curser-grab');
      }
    });
  }

  detectMouseDown() {
    if (this.#game.detectMouseOver(this.#gateBox)) {
      this.#game.ui.gateBoxes.forEach(/** @type {rect} */(box, i) => {
        if (this.#game.detectMouseOver(box) && !this.#game.wireMode) {
          switch (i) {
            case 0:
              this.#game.container?.classList.replace('curser-grab', 'curser-grabbing');
              const input = new Switch(this.#game, this.#game.mousePos.x, this.#game.mousePos.y);
              input.draggable = true;
              this.#game.switches.push(input);
              break;
            case 1:
              this.#game.container?.classList.replace('curser-grab', 'curser-grabbing');
              const not = new NOT(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, 0);
              not.draggable = true;
              this.#game.gates.push(not);
              break;
            case 2:
              this.#game.container?.classList.replace('curser-grab', 'curser-grabbing');
              const and = new AND(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0]);
              and.draggable = true;
              this.#game.gates.push(and);
              break;
            case 3:
              this.#game.container?.classList.replace('curser-grab', 'curser-grabbing');
              const or = new OR(this.#game, this.#game.mousePos.x, this.#game.mousePos.y, [0, 0]);
              or.draggable = true;
              this.#game.gates.push(or);
              break;
            default:
              break;
          }
        }
      });
    }
  }

  detectMouseUp() { }

  detectClick() {
    if (this.#game.detectMouseOver(this.wireBtn)) {
      if (!this.#game.wireMode) {
        this.#game.wireMode = true;
      } else {
        this.#game.wireMode = false;
      }
    }

    if (this.#game.detectMouseOver(this.#deleteBtn)) {
      this.#game.toggleDeleteMode();
    }
  }

  detectDbClick() { }
}