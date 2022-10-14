// TODO: create server

/**
 * @typedef {(number|boolean)} boolLike
 */

import { FullAdder } from './logic/components/FullAdder';
import { XOR } from './logic/gates/ComplexGates';
import { AND, OR } from './logic/gates/SimpleGates';

const _01Test = /^[0-1]*$/;

const container = document.getElementById('container');
const canvasContainer = document.getElementById('canvasContainer');
const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
canvas.width = canvasContainer.offsetWidth * 4, canvas.height = canvasContainer.offsetHeight * 2;
canvasContainer.append(canvas);

const componentList = [];
function init() {
  const XORgate1 = new XOR(0, 1, 240, 120);
  const XORgate2 = new XOR(XORgate1.output, 0, 240, 340);
  const ANDgate1 = new AND(0, 1, 90, 490);
  const ANDgate2 = new AND(XORgate1.output, 0, 240, 490);
  const ORgate = new OR(ANDgate1.output, ANDgate2.output, 390, 490);
  componentList.push(XORgate1, XORgate2, ANDgate1, ANDgate2, ORgate);
  // componentList.forEach(component => component.toggleOutline({ interior: true }));
  componentList.forEach(component => { component.draw(ctx); });
  console.log(componentList);
}

let animationFrame;
let logOnce = true;
function animate() {
  if(logOnce) {
    console.log(componentList);
    logOnce = false;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  componentList.forEach(component => { component.update(ctx); });

  animationFrame = requestAnimationFrame(animate);
}


window.addEventListener('resize', (e) => {
  canvas.width = canvasContainer.offsetWidth, canvas.height = canvasContainer.offsetHeight;
});
document.getElementById('cancelBtn').addEventListener('click', (e) => {
  e.preventDefault();
  cancelAnimationFrame(animationFrame);
});
document.getElementById('startBtn').addEventListener('click', (e) => {
  e.preventDefault();

  animationFrame = requestAnimationFrame(animate);
  animate();
});
// TODO implement clear btn
document.getElementById('clearBtn').addEventListener('click', (e) => {
  e.preventDefault();

});

init();
