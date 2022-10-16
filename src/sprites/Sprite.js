// ts-check

export default class Sprite {
  /** @type {number} */ #width;
  /** @type {number} */ #height;
  /** @type {Array<number>} */ #mid;
  /** @type {Array<Array<number>>} */ #cords;
  /** @type {boolean} */ #outline = false;
  /** @type {boolean} */ #isDraggable = false;

  /**
   * 
   * @param {number} x 
   * @param {number} y 
   * @param {number} w 
   * @param {number} h 
   */
  constructor(x, y, w, h) {
    /** @type {number} */ this.#width = w;
    /** @type {number} */ this.#height = h;
    /** @type {Array<number>} */ this.#mid = [x, y];
    /** @type {Array<Array<number>>} */ 
    this.#cords = [
      [x - (w / 2), y - (h / 2)],
      [this.#width, this.#height],
    ];
  }

  /** @return {number} */
  get width() {
    return this.#width;
  }

  /** @return {number} */
  get height() {
    return this.#height;
  }

  /** @return {Array<number>} */
  get midPosition() {
    return this.#mid;
  }

  /** @return {Array<Array<number>>} */
  get cordinates() {
    return this.#cords;
  }

  
  /** @return {boolean} */
  get outline() {
    return this.#outline
  }

  /** @return {boolean} */
  get draggable() {
    return this.#isDraggable;
  }

  toggleOutline() {
    this.#outline = !this.#outline;
  }

  toggleIsDraggable() {
    this.#isDraggable = !this.#isDraggable;
  }

  updatePosition(x, y) {
    this.#mid = [x, y];
    this.#cords = [
      [x - (this.#width / 2), y - (this.#height / 2)],
      [this.#width, this.#height],
    ];
  }

  updateDementions(width, height) {
    this.#width = width, this.#height = height;
    this.#cords = [
      [this.#mid[0] - (this.#width / 2), this.#mid[1] - (this.#height / 2)],
      [this.#width, this.#height],
    ];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokStyle = 'black';

    ctx.rect(this.#cords[0][0], this.#cords[0][1], this.#cords[1][0], this.#cords[1][1]);
    ctx.stroke();
  }

  update() {

  }
}