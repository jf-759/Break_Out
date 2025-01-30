class Brick {
  constructor(x, y, width, height, color = '#0095DD') {
    this.x = x;
    this.y = y;
    this.status = 1;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render(ctx) {
    // console.log(this.x, this.y, this.width, this.height, this.color);
    if (this.status === 1) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }
}

export default Brick;
