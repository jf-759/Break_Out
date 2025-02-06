import Sprite from './Sprite.js';

class Label extends Sprite {
  constructor(x, y, text, color = '#54738E', font = '16px Arial') {
    super(x, y, 0, 0, color);
    this.text = text;
    this.font = font;
  }

  // Overrides the render in Sprite
  render(ctx) {
    ctx.beginPath();
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.x, this.y);
    ctx.closePath();
  }
}

export default Label;
