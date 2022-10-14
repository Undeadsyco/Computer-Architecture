export default class Gate {
  #width;
  #height;
  #gatePosition = [{ x: undefined, y: undefined }, { x: undefined, y: undefined }];
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

  /** @param {number} height */
  set height(height) {
    this.#height = height;
  }

  /** @return {Array<cordinates>} */
  get gatePosition() {
    return this.#gatePosition;
  }

  /** @param {Array<cordinates>} position */
  set gatePosition(position) {
    this.#gatePosition = position;
  }

  /** @return {cordinates} */
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