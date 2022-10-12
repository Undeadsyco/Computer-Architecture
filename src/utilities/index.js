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