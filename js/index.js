/**
 * @typedef {(number|boolean)} boolLike
 */

const _01Test = /^[0-1]*$/;

const container = document.getElementById('container');
const canvasContainer = document.getElementById('canvasContainer');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 200;
canvas.height = 160;
canvas.setAttribute('style', 'border: 2px solid black;');

canvasContainer.append(canvas);

const notGate = new NOT(0);
// notGate.render(canvasContainer);
// notGate.draw(ctx, canvas.width * 0.25, canvas.height * 0.75, 100, 100);

const andGate = new AND(0, 1);
// andGate.render(canvasContainer);
andGate.draw(ctx, canvas.width * 0.25, canvas.height * 0.25, canvas.width * 0.5, canvas.height * 0.5);

const orGate = new OR(0,1);
// orGate.render(canvasContainer);
// orGate.draw(ctx, canvas.width * 0.5, canvas.height * .5);
