// @ts-check

import Game from "./Game";
import GateState from "./States/GateState";
import { utilFunctions } from "../utilities";



/** @typedef {import("../type/types").state} state */
/** @typedef {import("../type/types").rect} rect */
/** @typedef {import('../type/types').circuit} circuit */
/** @typedef {import("../type/types").input} input */
/** @typedef {import("../type/types").output} output */

export default class UI {

  /** @type {Game} */ #game
  /** @type {string} */ #state;
  /** @type {number} */ #x;
  /** @type {number} */ #y;
  /** @type {number} */ #width;
  /** @type {number} */ #height;
  /** @type {number} */ #space = 10;

  /** @type {rect} */ #gateBox;
  /** @type {Array<rect>} */ #gateboxes;

  /** @type {rect} */ #wireBtn;
  /** @type {rect} */ #deleteBtn;
  /** @type {rect} */ #gateBtn;

  /** 
   * @param {Game} game 
   * @param {state} state
   */
  constructor(game, state) {
    this.#game = game;
    this.#selectState(state);
    this.#x = state.x;
    this.#y = state.y;
    this.#width = state.width;
    this.#height = state.height;

    this.#wireBtn = { x: this.#x + this.#space, y: this.#y + this.#space, width: 80, height: 25 };
    this.#deleteBtn = {
      x: this.#wireBtn.x,
      y: this.#wireBtn.y + this.#wireBtn.height + this.#space,
      width: this.#wireBtn.width,
      height: this.#wireBtn.height,
    };
    this.#gateBtn = {
      x: this.#wireBtn.x + this.#wireBtn.width + this.#space,
      y: this.#y + this.#space,
      width: 25,
      height: (this.#wireBtn.height * 2) + this.#space,
      maxWidth: 100 + (this.#space * 5) + 25,
    }

    this.#gateBox = { x: this.#gateBtn.x + this.#gateBtn.width + this.#space, y: this.#y + this.#space, width: this.#gateBtn.width, height: this.#gateBtn.height };
    this.#gateboxes = [
      { x: 15, y: 10, width: 60, height: 36 },
      { x: 80, y: 10, width: 60, height: 36 },
      { x: 150, y: 10, width: 60, height: 36 },
      { x: 220, y: 10, width: 60, height: 36 },
    ];
  }

  get gateBox() { return this.#gateBox; }
  set gateBox(rect) { this.#gateBox = rect; }

  get gateBoxes() { return this.#gateboxes; }
  get wireBtn() { return this.#wireBtn; }

  update() {
    console.log(this.#state);
    this.#selectState(this.#game.currentState);
    switch (this.#state) {
      case 'GateState':
        if (this.#gateBtn.maxWidth) {
          if (this.#gateBtn.width < this.#gateBtn.maxWidth) {
            this.#gateBtn.width += 25;
            console.log(this.#gateBtn.width);
          }
          else this.#gateBtn.width = this.#gateBtn.maxWidth;
        }
        break;
      default:
        if (this.#gateBtn.width < 25) {
          this.#gateBtn.width -= 25;
          console.log(this.#gateBtn.width);
        }
        else this.#gateBtn.width = 25;

        break;
    }

    if (
      this.#game.detectMouseOver(this.#wireBtn) ||
      this.#game.detectMouseOver(this.#gateBtn) ||
      this.#game.detectMouseOver(this.#deleteBtn)
    ) {
      this.#game.container?.classList.add('curser-pointer');
    } else this.#game.container?.classList.remove('curser-pointer');
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    ctx.save();

    const r = 10;

    switch (this.#state) {
      case 'GameState':
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

        this.#gateboxes.forEach(/** @type {rect} */({ x, y, width, height }) => {
          ctx.beginPath();
          ctx.rect(x, y, width, height);
          ctx.stroke();
        });
        break;
      default:
        break;
    }
    utilFunctions.drawCurvedRect(ctx, this.#wireBtn, r, 'green');
    ctx.fillStyle = 'white';
    ctx.font = '16px Helvetica'
    ctx.fillText('wire', this.#wireBtn.x + (this.#wireBtn.width * 0.325), this.#wireBtn.y + (this.#wireBtn.height * 0.75));

    utilFunctions.drawCurvedRect(ctx, this.#deleteBtn, r, '#bd0b1d');
    ctx.fillStyle = 'white';
    ctx.font = '16px Helvetica'
    ctx.fillText('Delete', this.#deleteBtn.x + (this.#deleteBtn.width * 0.2), this.#deleteBtn.y + (this.#deleteBtn.height * 0.75));

    utilFunctions.drawCurvedRect(ctx, this.#gateBtn, r, '#666');
    ctx.beginPath();
    ctx.moveTo(this.#gateBtn.x + this.#gateBtn.width * 0.25, this.#gateBtn.y + this.#gateBtn.height * 0.25);
    ctx.lineTo(this.#gateBtn.x + this.#gateBtn.width * 0.75, this.#gateBtn.y + this.#gateBtn.height * 0.5);
    ctx.lineTo(this.#gateBtn.x + this.#gateBtn.width * 0.25, this.#gateBtn.y + this.#gateBtn.height * 0.75);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();

  }

  /** @param {state} state */
  #selectState(state) {
    switch (state.constructor.name) {
      case 'MainState':
        this.#state = 'MainState';
      case 'GateState':
        this.#state = 'GateState';
      default:
        this.#state = 'MainState';
    }
  }

  mouseOverAction() { }

  mouseDownAction() { }

  mouseUpAction() { }

  /**
   * @param {number} x
   * @param {number} y 
   */
  clickAction(x, y) {
    if (this.#game.detectMouseOver(this.#gateBtn)) {
      this.#game.stateStack.push(new GateState(this.#game));
    }
  }

  dbClickAction() { }
}