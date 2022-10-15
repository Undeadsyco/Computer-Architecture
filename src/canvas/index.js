// import { MOUSE_POSITION } from "..";
import { Sprite } from "../sprites";

export default class Canvas {
  static #container = document.getElementById('canvasContainer');
  static #canvas = document.createElement('canvas');
  static #ctx = Canvas.#canvas.getContext('2d');
  static #animationFrame;
  /** @type {Array<Sprite>} */ static #sprites = [];
  /** @type {Sprite} */ static #dragable = null;
  static #MOUSE_POSITION = { x: undefined, y: undefined };

  static {
    Canvas.#canvas.width = Canvas.#container.offsetWidth * 2, Canvas.#canvas.height = Canvas.#container.offsetHeight * 2;
    Canvas.#ctx.strokeStyle = 'black', Canvas.#ctx.fillStyle = 'black', Canvas.#ctx.font = 'bold 24px serif';
    Canvas.#container.append(Canvas.#canvas);
    Canvas.#canvas.addEventListener('addSprite', (e) => {
      Canvas.#sprites.push(e['detail']);
    });
    Canvas.#canvas.addEventListener('createDragable', (e) => {
      Canvas.#dragable = e['detail'];
    });
    Canvas.#canvas.addEventListener('mousemove', (e) => {
      Canvas.#MOUSE_POSITION.x = e.x, Canvas.#MOUSE_POSITION.y = e.y;
    });
    Canvas.#canvas.addEventListener('mouseup', (e) => {
      if (Canvas.#dragable) {
        console.log('added sprite');
        Canvas.#sprites.push(Canvas.#dragable);
        Canvas.#dragable = null;
      }
    });
  }

  static get ctx() {
    return Canvas.#ctx;
  }

  static get sprites() {
    return Canvas.#sprites;
  }

  static init() {
    Canvas.#sprites.forEach((/** @type {Sprite} */ sprite) => {
      sprite.draw();
    })
  }

  static animate() {
    Canvas.#ctx.clearRect(0, 0, Canvas.#canvas.width, Canvas.#canvas.height);

    Canvas.#sprites.forEach(component => {
      // component.update(Canvas.#ctx);
      component.draw(Canvas.#ctx);
    });

    if (Canvas.#dragable) {
      Canvas.#dragable.update(Canvas.#MOUSE_POSITION.x - 325, Canvas.#MOUSE_POSITION.y - 65);
      Canvas.#dragable.draw(Canvas.#ctx);
    }

    Canvas.#animationFrame = requestAnimationFrame(Canvas.animate);
  }

  static stopAnimation() {
    cancelAnimationFrame(Canvas.#animationFrame);
  }

  static clearCanvas() {
    Canvas.#ctx.clearRect(0, 0, Canvas.#canvas.width, Canvas.#canvas.height);
    Canvas.#sprites = [];
  }

  static resize() {
    Canvas.#canvas.width = Canvas.#container.offsetWidth, Canvas.#canvas.height = Canvas.#container.offsetHeight;
  }

  static dispatchEvent(event) {
    Canvas.#canvas.dispatchEvent(event);
  }
}

