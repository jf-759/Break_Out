import Brick from './Brick';
import Paddle from './Paddle';
import Ball from './Ball';
import Label from './Label';
import {
  canvas,
  ctx,
  ballRadius,
  brickRowCount,
  brickColumnCount,
  brickWidth,
  brickHeight,
  brickPadding,
  brickOffsetLeft,
  brickOffsetTop,
  paddleWidth,
  paddleHeight,

} from './Constants';

/* eslint-disable no-alert */
/* eslint-disable no-undef */
const x = canvas.width / 2;
const y = canvas.height - 30;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
let score = 0;
let lives = 3;

const bricks: any = [];
const ball = new Ball(x, y, ballRadius);
const scoreLabel = new Label(8, 20, `Score: ${score}`);
const livesLabel = new Label(canvas.width - 65, 20, `Lives: ${lives}`);
const p = new Paddle(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);

for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    // bricks[c][r] = { x: 0, y: 0, status: 1 };
    const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
    const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
    bricks[c][r] = new Brick(brickX, brickY, brickWidth, brickHeight);
  }
}

function mouseMoveHandler(e: any) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

function keyDownHandler(e: any) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e: any) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          ball.x > b.x
          && ball.x < b.x + brickWidth
          && ball.y > b.y
          && ball.y < b.y + brickHeight
        ) {
          ball.dy = -ball.dy;
          b.status = 0;
          score += 1;
          if (score === brickRowCount * brickColumnCount) {
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawScore() {
  scoreLabel.text = `Score: ${score}`;
  scoreLabel.render(ctx);
}

function drawLives() {
  livesLabel.text = `Lives: ${lives}`;
  livesLabel.render(ctx);
}

function drawBall() {
  ball.render(ctx);
}

function drawPaddle() {
  p.x = paddleX;
  p.render(ctx);
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      if (bricks[c][r].status === 1) {
        bricks[c][r].render(ctx);
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.x < ballRadius) {
    ball.dx = -ball.dx;
  }

  if (ball.y + ball.dy < ballRadius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ballRadius) {
    if (ball.x > paddleX && ball.x < paddleX + paddleWidth) {
        ball.dy = -ball.dy;
    } else {
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 2;
        ball.dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }

  ball.x += ball.dx;
  ball.y += ball.dy;

  requestAnimationFrame(draw);
}

draw();
