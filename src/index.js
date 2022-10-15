import Canvas from './canvas';
import { Sprite } from './sprites';

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
