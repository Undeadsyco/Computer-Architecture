const utilFunctions = {
  decToBinary: (input) => {
    let decimal = input, binary = '';

    for (let i = 0; decimal >= 1; i += 1) {
      binary = `${decimal % 2}${binary}`;
      decimal = parseInt(decimal / 2, 10);
    }

    return binary;
  },
  
  drawLine: (ctx, step = 0, cords = []) => {
    ctx.strokeStyle = 'black';

    ctx.beginPath();
    cords.forEach(({ x, y }, i) => {
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  },
  
  drawPolygon: (ctx, sides, radius, options = { lineColor: 'black', fillColor: 'white' }) => {
    ctx.strokeStyle = options.lineColor;
    ctx.fillStyle = options.fillColor;

    const cords = [];

    ctx.beginPath();
    cords.forEach(({ x, y }) => {
      if (i === 0) ctx.moveTo(x, y);
      ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  },
  
  drawHalfCircle: (ctx, x, y, r, options = { lineColor: 'black', fillColor: 'white', direction: 'right' }) => {
    ctx.strokeStyle = options.lineColor;
    ctx.fillStyle = options.fillColor;

    let a1, a2;
    switch (options.direction) {
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
  },
  
  drawCurvedRect: (ctx, rect, r, color) => {
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(rect.x + r, rect.y);
    ctx.lineTo(rect.x + (rect.width) - r, rect.y);
    ctx.quadraticCurveTo(
      rect.x + rect.width,
      rect.y,
      rect.x + rect.width,
      rect.y + r,
    );
    ctx.lineTo(rect.x + rect.width, rect.y + rect.height - r);
    ctx.quadraticCurveTo(
      rect.x + rect.width,
      rect.y + rect.height,
      rect.x + rect.width - r,
      rect.y + rect.height,
    );
    ctx.lineTo(rect.x + r, rect.y + rect.height);
    ctx.quadraticCurveTo(
      rect.x,
      rect.y + rect.height,
      rect.x,
      rect.y + rect.height - r
    );
    ctx.lineTo(rect.x, rect.y + r);
    ctx.quadraticCurveTo(
      rect.x, rect.y,
      rect.x + r, rect.y,
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
};

export default utilFunctions;
