// ts-check

export default class circut {
  #inputs = [];
  #output;
  #width;
  #height;
  #gatePosition = [[], []];
  #midPosition = { x: undefined, y: undefined };
  #outline = false;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  /** @return {number} */
  get width() {
    return this.#width;
  }

  /** @param {number} width */
  set width(width) {
    this.#width = width;
  }

  /** @return {number} */
  get height() {
    return this.#height;
  }

  /** @return {Array<Array<number>>} */
  get gatePosition() {
    return this.#gatePosition;
  }

  /** @param {Array<number>} position */
  set gatePosition([x, y]) {
    this.#gatePosition = position;
  }

  /** @return {Array<number>} */
  get midPosition() {
    return this.#midPosition;
  }

  /** @param {cordinates} cordinates */
  set midPosition(cordinates) {
    this.#midPosition = cordinates;
  }

  /** @return {boolean} */
  get outline() {
    return this.#outline;
  }

  /** @param {boolean} value */
  set outline(value) {
    this.#outline = value;
  }

  toggleOutline() {
    this.#outline = !this.#outline;
  }

  updateDimentions(width, height) {
    this.#width = width, this.#height = height;
    this.#gatePosition = [
      { x: this.#midPosition.x - (this.#width / 2), y: this.midPosition.y - (this.#height / 2) },
      { x: this.#width, y: this.#height },
    ]
  }
}