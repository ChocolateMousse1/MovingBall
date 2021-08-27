var ball;
var box;

function setup() {
  createCanvas(640,640);
  ball = createSprite(200,200,30,40);
  box = createSprite(350,525);
}

function draw() 
{

  background("turquoise");
  if(keyIsDown(RIGHT_ARROW)){
    ball.x = ball.x+5
  }

  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y-5
  }
  drawSprites();
}




