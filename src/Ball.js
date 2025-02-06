import Sprite from './Sprite.js';

class Ball extends Sprite {
  constructor(x, y, ballRadius, dx = 2, dy = -2, color = '#E35336') {
    super(x, y, ballRadius * 2, ballRadius * 2, color);
    this.ballRadius = ballRadius;
    this.dx = dx;
    this.dy = dy;
  }

  // Overrides the render in Sprite
  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

export default Ball;
