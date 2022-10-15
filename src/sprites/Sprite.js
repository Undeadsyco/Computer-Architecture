export default class Sprite {
  #width;
  #height;
  #mid;
  #cords;

  constructor(x, y, w, h) {
    this.#width = w;
    this.#height = h;
    this.#mid = [x, y];
    this.#cords = [
      [x - (w / 2), y - (h / 2)],
      [this.#width, this.#height],
    ];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.#cords[0][0], this.#cords[0][1], this.#cords[1][0], this.#cords[1][1]);

    ctx.strokStyle = 'black';
    ctx.stroke();
  }

  update(x, y) {
    this.#mid.x = x, this.#mid.y = y;
    this.#cords = [
      [x - (this.#width / 2), y - (this.#height / 2)],
      [this.#width, this.#height],
    ];
  }
}