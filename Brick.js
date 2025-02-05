// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Brick extends Sprite {
  constructor(x, y, width, height, color = '#87ae73') {
    super(x, y, width, height, color); // Calls constructor of Sprite
    this.status = 1;
  }

  render(ctx) {
    if (this.status === 1) {
      super.render(ctx);
    }
  }
}

export default Brick;
