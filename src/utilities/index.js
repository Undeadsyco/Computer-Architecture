export const decToBinary = (input) => {
  let decimal = input, binary = '';

  for (let i = 0; decimal >= 1; i += 1) {
    binary = `${decimal % 2}${binary}`;
    decimal = parseInt(decimal / 2, 10);
  }

  return binary;
}

export const drawLine = (ctx, color = 'black', cords = []) => {
  ctx.strokeStyle = color;
  ctx.beginPath();
  cords.forEach(({ x, y }, i) => {
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

export const drawPolygon = (ctx, cords = [], options = { lineColor: 'black', fillColor: 'white' }) => {
  ctx.strokeStyle = options.lineColor;
  ctx.fillStyle = options.fillColor;

  ctx.beginPath();
  cords.forEach(({ x, y }) => {
    if (i === 0) ctx.moveTo(x, y);
    ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

export const drawHalfCircle = (ctx, x, y, r, options = { lineColor: 'black', fillColor: 'white', direction: 'right' }) => {
  ctx.strokeStyle = options.lineColor;
  ctx.fillStyle = options.fillColor;

  let a1, a2;
  switch(options.direction) {
    case 'right':
      a1 = Math.PI * 1.5, a2 = Math.PI * 0.5;
      break;
    case 'left':
      a1 = Math.PI * 0.5, a2 = Math.PI * 1.5;
      break;
    case 'up':
      a1 = Math.PI * 1, a2 = Math.PI * 2;
      break;
    case 'down':
      a1 = Math.PI * 2, a2 = Math.PI * 1;
      break;
    default:
  }

  ctx.beginPath();
  ctx.arc(x, y, r, a1, a2, false);
  ctx.fill();
  ctx.stroke();
}