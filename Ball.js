// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Ball extends Sprite {
  constructor(x, y, ballRadius, color) {
    super(x, y, ballRadius * 2, ballRadius * 2, color);
    this.ballRadius = ballRadius;
  }

  // Overrides the render in Sprite
  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.yy, this.ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
