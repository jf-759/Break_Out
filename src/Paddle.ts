import Sprite from './Sprite';

class Paddle extends Sprite {
  constructor(x: number, y: number, width: number, height: number, color: string = '#7B4B36') {
    super(x, y, width, height, color);
  }
}

export default Paddle;
