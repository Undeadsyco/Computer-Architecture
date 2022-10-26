// ts-check

import Game from './GameClasses/Game';
import './styles/main.css';

window.addEventListener('load', () => {
  const container = document.getElementById('canvasContainer');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = container.offsetWidth - 4, canvas.height = container.offsetHeight - 8;
  console.log(container.offsetWidth)
  if (canvas.width >= container.offsetWidth) {
    container.classList.add('customScroll');
  }
  container.append(canvas);

  window.addEventListener('resize', (e) => {
    e.preventDefault();
    canvas.width = container.offsetWidth, canvas.height = container.offsetHeight;
  });

  const game = new Game(canvas.width, canvas.height);

  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(animate);
  }

  animate(0);
});
