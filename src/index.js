// @ts-check

import Game from './GameClasses/Game';
import './styles/main.css';

window.addEventListener('load', () => {
  const container = document.getElementById('canvasContainer');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (container) {
    canvas.width = container.offsetWidth - 4, canvas.height = container.offsetHeight - 8;

    if (canvas.width >= container.offsetWidth) {
      container.classList.add('customScroll');
    }
    container?.append(canvas);
  }


  window.addEventListener('resize', (e) => {
    e.preventDefault();
    canvas.width = container?.offsetWidth ?? 0, canvas.height = container?.offsetHeight ?? 0;
  });

  const game = new Game(canvas.width, canvas.height);

  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx?.clearRect(0, 0, canvas.width, canvas.height);

    game.update(deltaTime);
    if (ctx) game.draw(ctx);

    requestAnimationFrame(animate);
  }

  animate(0);
});
