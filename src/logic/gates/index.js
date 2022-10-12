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

export class NOT extends singleInputGate {
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

  draw(ctx, xStart, yStart, width = 100, height = 60) {
    const offset = 15;
    ctx.beginPath();
    ctx.moveTo(xStart - (width * 0.25), yStart);
    ctx.lineTo(xStart - (width * 0.25), yStart - (height * 0.5));
    ctx.lineTo(xStart + (width * 0.3), yStart);
    ctx.lineTo(xStart - (width * 0.25), yStart + (height * 0.5));
    ctx.closePath();

    ctx.moveTo(xStart - (width * 0.25), yStart);
    ctx.lineTo(xStart - (width * 0.5), yStart);

    ctx.moveTo(xStart + (width * 0.25), yStart);
    ctx.lineTo(xStart + (width * 0.5), yStart);

    ctx.fillStyle = 'blue';
    ctx.fill();

    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this._input, xStart - (width * 0.25) + 5, yStart + 6);
    ctx.fillText(this._output, xStart + (width * 0.25) - offset, yStart + 6);

    ctx.stroke();

    this.inputPositions = {
      input: { x: xStart - (width * 0.5), y: yStart },
      output: { x: xStart + (width * 0.5), y: yStart },
    }
  }
}

export class AND extends twoInputGate {
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

  draw(ctx, xStart, yStart, width = 100, height = 60) {
    const radius = (width * 0.33) - 2, offset = 15;
    ctx.beginPath();
    // draw front arc
    ctx.arc(xStart, yStart, radius, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.lineTo(xStart - (width * 0.6) + radius, yStart + radius);
    ctx.lineTo(xStart - (width * 0.6) + radius, yStart - radius);
    ctx.closePath();
    // draw input line 1
    ctx.moveTo(xStart - (width * 0.6) + radius, yStart - radius + (height * 0.2));
    ctx.lineTo(xStart - (width * 0.5), yStart - radius + (height * 0.2));
    // // draw input line 2
    ctx.moveTo(xStart - (width * 0.6) + radius, yStart + radius - (height * 0.2));
    ctx.lineTo(xStart - (width * 0.5), yStart + radius - (height * 0.2));
    // // draw output line 
    ctx.moveTo(xStart + radius, yStart);
    ctx.lineTo(xStart + (width / 2), yStart);

    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.inputA, xStart - (width * 0.6) + radius + 5, yStart - radius + (height * 0.2) + 6, 100);
    ctx.fillText(this.inputB, xStart - (width * 0.6) + radius + 5, yStart + radius - (height * 0.2) + 6, 100);
    ctx.fillText(this.output, xStart + radius - offset, yStart + 6, 100);

    ctx.strokeStyle = 'black';
    ctx.stroke();

    this.inputPositions = {
      inputA: { x: xStart - (width * 0.5), y: yStart - radius + (height * 0.2) },
      inputB: { x: xStart - (width * 0.5), y: yStart + radius - (height * 0.2) },
      output: { x: xStart + (width / 2), y: yStart }
    }
  }
}

export class OR extends twoInputGate {
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

  draw(ctx, x, y, width = 100, height = 60) {
    const radius = (width * 0.35) - 2;

    ctx.beginPath();
    ctx.arc(x - (width / 2), y, radius, Math.PI * 1.70, Math.PI * 0.30, false);
    ctx.lineTo(x + (width * 0.25) + 8, y);
    ctx.closePath();

    // draw input line 1
    ctx.moveTo(x - (width * 0.25) + 5, y - (height / 5));
    ctx.lineTo(x - (width * 0.5), y - (height / 5));
    // draw input line 2
    ctx.moveTo(x - (width * 0.25) + 5, y + (height / 5));
    ctx.lineTo(x - (width * 0.5), y + (height / 5));
    // draw output line 
    ctx.moveTo(x + (width * 0.25), y);
    ctx.lineTo(x + (width * 0.5), y);

    ctx.fillStyle = 'green';
    ctx.fill();

    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.inputA, x - (width * 0.25) + 8, y - (height / 5) + 6);
    ctx.fillText(this.inputB, x - (width * 0.25) + 8, y + (height / 5) + 6);
    ctx.fillText(this.output, x + (width * 0.25) - 12, y + 6);

    ctx.stroke();

    this.inputPositions = {
      inputA: { x: x - (width * 0.5), y: y - (height / 5) },
      inputB: { x: x - (width * 0.5), y: y + (height / 5) },
      output: { x: x + (width * 0.5), y }
    }
  }
}

export class NAND extends twoInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA && inputA) ? 1 : 0);
  }
}

export class NOR extends twoInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, !(inputA || inputB) ? 1 : 0);
  }
}

export class XOR extends twoInputGate {
  constructor(inputA, inputB) {
    super(inputA, inputB, (inputA && !inputB) || (!inputA && inputB) ? 1 : 0);
  }

  render(parent) {
    const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');

    canvas.width = 200 * 2, canvas.height = (160 * 2) * 0.6;
    canvas.setAttribute('style', 'border: 2px solid black;');

    parent.append(canvas);

    this.draw(ctx, canvas.width * 0.5, canvas.height * 0.5, canvas.width, canvas.height);
  }

  draw(ctx, x, y, width, height) {
    console.log(width * 0.5)
    ctx.beginPath();
    ctx.rect(x - (width * 0.5), y - (height * 0.5), width, height);

    ctx.stroke();

    const xStart = width * 0.8, yStart = height * 0.5;

    const notGate1 = new NOT(this.inputB);
    notGate1.draw(ctx, xStart - (110 * 2), yStart - 35);
    const andGate1 = new AND(this.inputA, notGate1.output);
    andGate1.draw(ctx, xStart - 110, yStart - 35);

    const notGate2 = new NOT(this.inputA);
    notGate2.draw(ctx, xStart - (110 * 2), yStart + 35);
    const andGate2 = new AND(notGate2.output, this.inputB);
    andGate2.draw(ctx, xStart - 110, yStart + 35);

    const orGate = new OR(andGate1.output, andGate2.output);
    orGate.draw(ctx, xStart, yStart);

    ctx.beginPath();
    // draw line from NOTgate 1 output to ANDgate 1 inputB
    ctx.moveTo(notGate1.inputPositions.output.x, notGate1.inputPositions.output.y);
    ctx.lineTo(andGate1.inputPositions.inputB.x, andGate1.inputPositions.inputB.y);
    
    // draw line from NOTgate 2 output to ANDgate 2 inputA
    ctx.moveTo(notGate2.inputPositions.output.x, notGate2.inputPositions.output.y);
    ctx.lineTo(andGate2.inputPositions.inputA.x, andGate2.inputPositions.inputA.y);

    // draw line from ANDgate 1 output to ORgate inputA
    ctx.moveTo(andGate1.inputPositions.output.x, andGate1.inputPositions.output.y);
    ctx.lineTo(orGate.inputPositions.inputA.x, orGate.inputPositions.inputA.y);
    
    // draw line from ANDgate 2 output to ORgate inputB
    ctx.moveTo(andGate2.inputPositions.output.x, andGate2.inputPositions.output.y);
    ctx.lineTo(orGate.inputPositions.inputB.x, orGate.inputPositions.inputB.y);
    
    // draw line from inputA to ANDgate 1 inputA
    ctx.moveTo(x - (width * 0.5) + 20, y - (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 20, y - (height * 0.4));
    ctx.lineTo(andGate1.inputPositions.inputA.x, y - (height * 0.4));
    ctx.lineTo(andGate1.inputPositions.inputA.x, andGate1.inputPositions.inputA.y);
    
    // draw line from inputA to NOTgate 2 input
    ctx.moveTo(x - (width * 0.5) + 10, y - (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, y - (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, notGate2.inputPositions.input.y);
    ctx.lineTo(notGate2.inputPositions.input.x, notGate2.inputPositions.input.y);
    
    // draw line from inputB to ANDgate 2 inputB
    ctx.moveTo(x - (width * 0.5) + 10, y + (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, y + (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 30, y + (height * 0.4));
    ctx.lineTo(andGate2.inputPositions.inputB.x, y + (height * 0.4));
    ctx.lineTo(andGate2.inputPositions.inputB.x, andGate2.inputPositions.inputB.y);

    // draw line from inputB to NOTgate 1 input
    ctx.moveTo(x - (width * 0.5) + 20, y + (height * 0.25));
    ctx.lineTo(x - (width * 0.5) + 20, notGate1.inputPositions.input.y);
    ctx.lineTo(notGate1.inputPositions.input.x, notGate1.inputPositions.input.y);
    
    // draw line from ORgate oitput to output
    ctx.moveTo(orGate.inputPositions.output.x, orGate.inputPositions.output.y);
    ctx.lineTo(orGate.inputPositions.output.x + 20, orGate.inputPositions.output.y);
    ctx.stroke();

    ctx.fillText(this.inputA, x - (width * 0.5), y - (height * 0.25) + 6);
    ctx.fillText(this.inputB, x - (width * 0.5), y + (height * 0.25) + 6);
    ctx.fillText(this.output, x + (width * 0.5) - 10, y + 6);
  }
}
