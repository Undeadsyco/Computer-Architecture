class singleInputGate {
  constructor(input, output) {
    this._input = input | 0;
    this._output = output | 0;
  }

  /** @return {number} */
  get input() {
    return this.input;
  }

  /** @param {number} input */
  set input(input) {
    this.input = input;
  }

  /** @return {number} */
  get output() {
    return this._output;
  }

  /** @param {number} value */
  set output(value) {
    this._output = value;
  }
}

class twoInputGate {
  constructor(inputA, inputB, output) {
    this._inputA = inputA | 0;
    this._inputB = inputB | 0;
    this._output = output;
  }

  /** @return {number} */
  get inputA() {
    return this._inputA;
  }

  /** @param {number} input */
  set inputA(input) {
    this._inputA = input;
  }

  /** @return {number} */
  get inputB() {
    return this._inputB;
  }

  /** @param {number} input */
  set inputB(input) {
    this._inputB = input;
  }

  /** @return {number} */
  get output() {
    return this._output;
  }

  /** @param {number} value */
  set output(value) {
    this._output = value;
  }
}

class NOT extends singleInputGate {
  constructor(input) {
    super(input, input ? 0 : 1);
  }

  render(parent) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 80;
    canvas.setAttribute('style', 'border: 2px solid black;');

    this.x = (canvas.width * .5);
    this.y = canvas.height / 2;

    parent.append(canvas);
    this.draw(ctx, canvas.width, canvas.height, (canvas.width * 0.33) - 2);
  }

  draw(ctx, xStart, yStart, width, height) {
    const offset = 20;
    ctx.beginPath();
    ctx.moveTo(xStart - (width * 0.25), yStart);
    ctx.lineTo(xStart - (width * 0.25), yStart - (height * 0.35));
    ctx.lineTo(xStart + (width * 0.3), yStart);
    ctx.lineTo(xStart - (width * 0.25), yStart + (height * 0.35));
    ctx.closePath();

    ctx.moveTo(xStart - (width * 0.25), yStart);
    ctx.lineTo(xStart - (width * 0.5), yStart);
    
    ctx.moveTo(xStart + (width * 0.25), yStart);
    ctx.lineTo(xStart + (width * 0.5), yStart);

    ctx.fillStyle = 'blue';
    ctx.fill();

    ctx.font = 'bold 24px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this._input, xStart - (width * 0.25), yStart + 6);
    ctx.fillText(this._output, xStart + (width * 0.25) - offset, yStart + 6);

    ctx.stroke();
  }
}

class AND extends twoInputGate {
  constructor(inputA, inputB, x, y) {
    super(inputA, inputB, inputA && inputB ? 1 : 0);
    this.x = x;
    this.y = y;
  }

  render(parent) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 80;
    canvas.setAttribute('style', 'border: 2px solid black;');

    this.x = (canvas.width * .5);
    this.y = canvas.height / 2;

    parent.append(canvas);
    this.draw(ctx, canvas.width, canvas.height);
  }

  draw(ctx, xStart, yStart, width, height) {
    const radius = (width * 0.33) - 2, offset = 20;
    ctx.beginPath();
    // draw front arc
    ctx.arc(xStart, yStart, radius, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.lineTo(xStart - (width * 0.5) + radius, yStart + radius);
    ctx.lineTo(xStart - (width * 0.5) + radius, yStart - radius);
    ctx.closePath();
    // draw input line 1
    ctx.moveTo(xStart - (width * 0.5) + radius, yStart - radius + (height * 0.2));
    ctx.lineTo(xStart - (width * 0.5), yStart - radius + (height * 0.2));
    // // draw input line 2
    ctx.moveTo(xStart - (width * 0.5) + radius, yStart + radius - (height * 0.2));
    ctx.lineTo(xStart - (width * 0.5), yStart + radius - (height * 0.2));
    // // draw output line 
    ctx.moveTo(xStart + radius, yStart);
    ctx.lineTo(xStart + (width/2), yStart);

    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.font = 'bold 24px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.inputA, xStart - (width * 0.5) + radius,  yStart - radius + (height * 0.2) + 6, 100);
    ctx.fillText(this.inputB, xStart - (width * 0.5) + radius,  yStart + radius - (height * 0.2) + 6, 100);
    ctx.fillText(this.output, xStart + radius - offset,  yStart + 6, 100);

    ctx.stroke();
  }
}

class OR extends twoInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, inputA || inputB ? 1 : 0);
  }

  render(parent) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 80;
    canvas.setAttribute('style', 'border: 2px solid black;');

    this.x = (canvas.width * .5);
    this.y = canvas.height / 2;

    parent.append(canvas);
    this.draw(ctx, canvas.width, canvas.height);
  }

  draw(ctx, width, height) {
    const radius = (width * 0.33) - 2;

    ctx.beginPath();
    ctx.arc(0, height / 2, radius, Math.PI * 1.70, Math.PI * 0.30, false);
    ctx.lineTo(width * 0.75 + 8, height * 0.5);
    ctx.closePath();

    // draw input line 1
    ctx.moveTo(width / 2 - radius + 8, height / 2 - radius + (height / 5));
    ctx.lineTo(width / 2 - radius - 20, height / 2 - radius + (height / 5));
    // draw input line 2
    ctx.moveTo(width / 2 - radius + 8, height / 2 + radius - (height / 5));
    ctx.lineTo(width / 2 - radius - 20, height / 2 + radius - (height / 5));
    // draw output line 
    ctx.moveTo(width / 2 + radius, height / 2);
    ctx.lineTo(width / 2 + radius + 20, height / 2);

    ctx.fillStyle = 'green';

    ctx.fill();
    ctx.stroke();
  }
}

class NAND extends twoInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);
  }
}

class NOR extends twoInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);
  }
}

class XOR extends twoInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, (inputA && !inputB) || (!inputA && inputB) ? 1 : 0);
  }
}
