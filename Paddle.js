// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Paddle extends Sprite {
  constructor(x, y, width, height, color = '#7B4B36') {
    super(x, y, width, height, color);
  }
}

export default Paddle;
