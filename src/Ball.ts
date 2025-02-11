import Sprite from './Sprite';

class Ball extends Sprite {
  // Declare class properties here!
  ballRadius: number
  dx: number
  dy: number

  constructor(x: number, y: number, ballRadius: number, dx: number = 2, dy: number = -2, color: string = '#E35336') {
    super(x, y, ballRadius * 2, ballRadius * 2, color);
    this.ballRadius = ballRadius;
    this.dx = dx;
    this.dy = dy;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  // Overrides the render in Sprite
  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
