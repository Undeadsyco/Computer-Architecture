// @ts-check

import InputHandler from "./InputHandler";
import Sprite from "./sprites/Sprite";
import { Switch, Wire } from "./sprites/circuits";
import UI from "./UI";
import { Gate } from "./sprites/circuits/gates/structure";
import { MainState } from "./States";

/** @typedef {import('../type/types').rect} rect */
/** @typedef {import('../type/types').gate} gate */
/** @typedef {import('../type/types').sprite} sprite */
/** @typedef {import('../type/types').switches} switches */
/** @typedef {import('../type/types').wire} wire */
/** @typedef {import('../type/types').state} state */

export default class Game {
  /** @type {(HTMLElement | null)} */ #container = document.getElementById('canvasContainer');
  
  /** @type {UI} */ #UI;

  /** @type {number} */ #width;
  /** @type {number} */ #height;
  /** @type {InputHandler} */ #inputHandler;
  /** @type {Array<state>} */ #stateStack = [new MainState(this)];
  /** @type {state} */ #currentState = this.#stateStack[0];
  /** @type {import('../type/types').pos} */ #mousePos = { x: 0, y: 0 };

  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.#width = width;
    this.#height = height;
    this.#inputHandler = new InputHandler(this);
    this.#currentState = this.#stateStack[this.#stateStack.length - 1];
    this.#UI = new UI(this, this.currentState);
  }

  get container() { return this.#container };

  get UI() { return this.#UI };

  get width() { return this.#width; }
  set width(width) { this.#width = width; }

  get height() { return this.#height; }
  set height(height) { this.#height = height; }

  get currentState() { return this.#currentState; }

  get stateStack() { return this.#stateStack; }
  set stateStack(stack) { this.#stateStack = stack; }

  get mousePos() { return this.#mousePos; }
  set mousePos(pos) { this.#mousePos = pos; }

  /** @param {number} deltaTime */
  update(deltaTime) {
    // console.log(this.#currentState.constructor.name);
    this.#stateStack.forEach((state) => {
      if (state.shouldPop) {
        this.#stateStack.pop();
      }
    });

    this.#currentState = this.#stateStack[this.#stateStack.length - 1];

    this.#stateStack.forEach(state => state.update(deltaTime));

    this.#UI.update();
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    this.#stateStack.forEach(state => state.draw(ctx));
    
    this.#UI.draw(ctx);
  }

  /**
   * @param {number} x 
   * @param {number} y 
   */
  detectMouseMove(x, y) {
    this.mousePos = { x, y };
  }

  /**
   * @param {sprite} rect1
   * @param {sprite} rect2
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
   * @param {rect} rect
   */
  detectMouseOver(rect) {
    return (
      this.mousePos.x > rect.x &&
      this.mousePos.x < rect.x + rect.width &&
      this.mousePos.y > rect.y &&
      this.mousePos.y < rect.y + rect.height
    );
  }
}