// eslint-disable-next-line import/extensions
import { brickHeight, brickWidth } from './Constants.js';

class Sprite {
  constructor(x, y, width = brickWidth, height = brickHeight, color = '#0095DD') {
    this.x = x;
    this.y = y;
    this.status = 1;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Sprite;
