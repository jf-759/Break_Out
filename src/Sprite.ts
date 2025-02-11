import { brickHeight, brickWidth } from './Constants';

class Sprite {
  x: number
  y: number
  width: number
  height: number
  color: string
  status: number

  constructor(x: number, y: number, width: number = brickWidth, height: number = brickHeight, color: string = '#0095DD') {
    this.x = x;
    this.y = y;
    this.status = 1;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Sprite;
