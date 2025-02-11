import Sprite from './Sprite';

class Label extends Sprite {
  text: string
  font: string
  constructor(x: number, y: number, text: string, color: string = '#54738E', font: string = '16px Arial') {
    super(x, y, 0, 0, color);
    this.text = text;
    this.font = font;
  }

  // Overrides the render in Sprite
  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.x, this.y);
    ctx.closePath();
  }
}

export default Label;
