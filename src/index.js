// TODO: create server

/**
 * @typedef {(number|boolean)} boolLike
 */

import { FullAdder } from './logic/components';
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
  const adder = new FullAdder(1, 1, 0, { x: 320, y: 345 });
  componentList.push(adder);
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

  componentList.forEach(component => { 
    component.update(ctx); 
    component.draw(ctx); 
  });

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
  animate();
});
// TODO implement clear btn
document.getElementById('clearBtn').addEventListener('click', (e) => {
  e.preventDefault();

});

init();
