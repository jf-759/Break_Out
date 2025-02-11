import Sprite from './Sprite';

class Brick extends Sprite {
  constructor(x: number, y: number, width: number , height: number, color: string = '#87ae73') {
    super(x, y, width, height, color); // Calls constructor of Sprite
    this.status = 1;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (this.status === 1) {
      super.render(ctx);
    }
  }
}

export default Brick;
