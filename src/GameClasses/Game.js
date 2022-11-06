// @ts-check

import InputHandler from "./InputHandler";
import Sprite from "./sprites/Sprite";
import { Switch, Wire } from "./sprites/circuits";
import UI from "./UI";
import { Gate } from "./sprites/circuits/gates/structure";

export default class Game {
  /** @type {number} */ #width;
  /** @type {number} */ #height;

  /** @type {import('../type/types').pos} */ #mousePos = { x: 0, y: 0 };

  /** @type {Array<Gate>} */ #gates = [];
  /** @type {Array<Switch>} */ #switches = [];
  /** @type {Array<Wire>} */ #wires = [];

  /** @type {(HTMLElement | null)} */ #container = document.getElementById('canvasContainer');
  /** @type {InputHandler} */ #inputHandler;
  /** @type {UI} */ #ui = new UI(this);
  
  /** @type {number} */ #timer = 0;
  /** @type {boolean} */ #wireMode = false;
  /** @type {boolean} */ #wireBuildMode = false;
  /** @type {boolean} */ #deleteMode = false;

  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.#width = width;
    this.#height = height;

    this.#inputHandler = new InputHandler(this);
  }

  get ui() { return this.#ui;  }

  get container() { return this.#container };

  get gates() { return this.#gates; }
  set gates(gates) { this.#gates = gates; }

  get switches() { return this.#switches; }
  set switches(switches) { this.switches = switches; }

  get wires() { return this.#wires; }
  set wires(wires) { this.#wires = wires; }

  get mousePos() { return this.#mousePos; }
  set mousePos(pos) { this.#mousePos = pos; }

  get timer() { return this.#timer; }
  set timer(value) { this.#timer = value; }

  get wireMode() { return this.#wireMode; }
  set wireMode(value) { this.#wireMode = value; }

  get wireBuildMode() { return this.#wireBuildMode; }
  set wireBuildMode(value) { this.#wireBuildMode = value; }

  get deleteMode() { return this.#deleteMode; }
  set deleteMode(value) { this.#deleteMode = value; }
  toggleDeleteMode() { this.#deleteMode = !this.#deleteMode}

  /**
   * @param {number} deltaTime 
   */
  update(deltaTime) {
    this.#timer += deltaTime;
    this.#gates.forEach(/** @type {Gate} */(sprite) => {
      sprite.update();
    });
    this.#switches.forEach(/** @type {Switch} */(input) => {
      input.update();
    });
    this.#wires.forEach(/** @type {Wire} */(wire) => {
      wire.update();
    });

    this.#ui.update();

    this.#gates = this.#gates.filter(/** @type {Gate} */(sprite) => !sprite.shouldDelete);
    this.#switches = this.#switches.filter(/** @type {Switch} */(input) => !input.shouldDelete);
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    if (this.#wireMode) {
      ctx.save();

      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.strokeRect(2, 2, this.#width - 4, this.#height - 4);
      ctx.restore();
    }
    if (this.#deleteMode) {
      ctx.save();

      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.strokeRect(2, 2, this.#width - 4, this.#height - 4);
      ctx.restore();
    }

    this.#gates.forEach(/** @type {Gate} */ (sprite) => {
      sprite.draw(ctx);
    });
    this.#switches.forEach(/** @type {Switch} */ (input) => {
      input.draw(ctx);
    });
    this.#wires.forEach(/** @type {Wire} */ (wire) => {
      wire.draw(ctx);
    });

    this.#ui.draw(ctx);
  }

  /**
   * @param {number} x 
   * @param {number} y 
   */
  detectMouseMove(x, y) {
    this.#container?.classList.remove('curser-grab', 'curser-pointer', 'curser-grabbing');
    this.#mousePos = { x: x - 30, y: y - 28 };
  }

  /**
   * @param {Sprite} rect1
   * @param {Sprite} rect2
   */
  detectCollision(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  }

  /** 
   * @param {import('../type/types').rect} rect
   */
  detectMouseOver(rect) {
    return (
      this.#mousePos.x > rect.x &&
      this.#mousePos.x < rect.x + rect.width &&
      this.#mousePos.y > rect.y &&
      this.#mousePos.y < rect.y + rect.height
    );
  }
}