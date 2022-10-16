import Canvas from './canvas';
import { Sprite } from './sprites';
import { XOR } from './sprites/circuits/gates/ComplexGates';
import { NOT, AND, OR } from './sprites/circuits/gates/SimpleGates';
import './styles/main.css';

export const MOUSE_POSITION = { x: undefined, y: undefined };

// window events
window.addEventListener('resize', (e) => {
  e.preventDefault();
  Canvas.resize();
});
window.addEventListener('mousemove', (e) => {
  e.preventDefault();
  MOUSE_POSITION.x = e.x, MOUSE_POSITION.y = e.y;
});

// animation control btn events
document.getElementById('cancelBtn').addEventListener('click', (e) => {
  e.preventDefault();
  cancelAnimationFrame(animationFrame);
});

document.getElementById('startBtn').addEventListener('click', (e) => {
  e.preventDefault();
  Canvas.animate();
});

document.getElementById('clearBtn').addEventListener('click', (e) => {
  e.preventDefault();
  Canvas.clearCanvas();
});

Array.from(document.forms[0]).slice(4).forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const inputs = Array.from(document.forms[0]).slice(0, 4);

    const x = parseInt(inputs[0].value),
      y = parseInt(inputs[1].value),
      inputA = parseInt(inputs[2].value),
      inputB = parseInt(inputs[3].value);

    let sprite;

    e.preventDefault();
    switch (btn.textContent) {
      case 'NOT Gate':
        console.log('NOT');
        sprite = new NOT(x, y, inputA);
        break;
      case 'AND Gate':
        console.log('AND');
        sprite = new AND(x, y, [inputA, inputB]);
        break;
      case 'OR Gate':
        console.log('OR');
        sprite = new OR(x, y, [inputA, inputB]);
        break;
      case 'XOR Gate':
        console.log('XOR');
        sprite = new XOR(x, y, [inputA, inputB]);
        break;
      default:
        console.log('default');
        break;
    }

    Canvas.dispatchEvent(new CustomEvent('addSprite', { detail: sprite }));
  });
});
