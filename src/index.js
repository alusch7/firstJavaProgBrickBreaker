import Game from "/src/game.js";
let canvas = document.getElementById("gameScreen");
//ctx means context, just shortened it
let ctx = canvas.getContext("2d");
//clearing the canvas:
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
ctx.clearRect(0, 0, 800, 600);
/*fillStyle (colour):
  ctx.fillStyle = '#f00';
  // Once you set the fill style (colour) it's going to use that same colour for all
  // following shapes or whatever
  ctx.fillRect(20,20,100,100);
  ctx.fillStyle = '#00f';
  ctx.fillRect(240,200,50,50); */

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {
  //how much time has passed
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  //clears the screen
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  //updates the state
  game.update(deltaTime);
  //re-draws the state
  game.draw(ctx);
  //calls next frame with next frame's timestamp
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
