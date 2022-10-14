// TODO: create server

/**
 * @typedef {(number|boolean)} boolLike
 */

import { FullAdder } from './logic/components/FullAdder';
import { XOR } from './logic/gates/ComplexGates';
import { AND } from './logic/gates/SimpleGates';

const _01Test = /^[0-1]*$/;

const container = document.getElementById('container');
const canvasContainer = document.getElementById('canvasContainer');
const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
canvas.width = canvasContainer.offsetWidth, canvas.height = canvasContainer.offsetHeight;
canvas.setAttribute('style', 'border: 2px solid black');
canvasContainer.append(canvas);

const componentList = [];
function init() {
  // const adder = new FullAdder(0, 0, 0);
  // componentList.push(adder);
  const gate = new XOR(0, 1, 260, 130);
  const gate2 = new XOR(0, 1, 260, 360);
  componentList.push(gate, gate2);
  console.log('gate', gate, 'gate2', gate);
}

let animationFrame;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  componentList[0].draw(ctx);
  componentList[1].draw(ctx);

  animationFrame = requestAnimationFrame(animate);
}

animationFrame = requestAnimationFrame(animate);

window.addEventListener('resize', (e) => {
  canvas.width = canvasContainer.offsetWidth, canvas.height = canvasContainer.offsetHeight;
});
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

init();
animate();
