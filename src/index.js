/**
 * @typedef {(number|boolean)} boolLike
 */

import { XOR } from './logic/gates';

const _01Test = /^[0-1]*$/;

const container = document.getElementById('container');
const canvasContainer = document.getElementById('canvasContainer');

function init() {
  const xorGate = new XOR(0, 1);
  xorGate.render(canvasContainer);
}

let animationFrame;

function animate() {
  animationFrame = requestAnimationFrame(animate);
}

animationFrame = requestAnimationFrame(animate);

document.getElementById('cancelBtn').addEventListener('click', (e) => {
  e.preventDefault();
  cancelAnimationFrame(animationFrame);
});
document.getElementById('startBtn').addEventListener('click', (e) => {
  e.preventDefault();
  init();
  animate();
});
// TODO implement clear btn
document.getElementById('clearBtn').addEventListener('click', (e) => {
  e.preventDefault();

});