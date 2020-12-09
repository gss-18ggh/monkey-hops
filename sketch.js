var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaG, obstacleG;
var score;
var ground, groundImage;
var invisibleGround;
var gameState = 2;
var PLAY = 4;
var END = 0;



function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");


}



function setup() {
  createCanvas(600, 300)

  
  ground = createSprite(300, 280, 600, 40);
  ground.shapeColor = "green";
  ground.velocityX=-5;
  ground.x=ground.width/2;
  
  invisibleGround = createSprite(300, 280, 600, 10)
  invisibleGround.visible = false;

  monkey = createSprite(30, 250, 10, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  bananaG=createGroup();
  obstacleG=createGroup();
}





function draw() {
  background("white")

  if (ground.x<300){
    ground.x=ground.width/2;
  }
    if (keyDown("space") && monkey.y>=100){
    monkey.velocityY = -6;
  }
  
  monkey.velocityY = monkey.velocityY + 0.2

  monkey.collide(invisibleGround);
 
  obstaclesF();
  bananaF();
  drawSprites();

}

function bananaF() {
  if(frameCount%120===0){
  banana=createSprite(610, Math.round(random(120, 200)), 10, 10);
  banana.addImage(bananaImage);
  banana.velocityX=-3;
  banana.scale=0.06;
  banana.lifetime=300;
  bananaG.add(banana);
  }
}

function obstaclesF(){
 if (frameCount%180===0){
  obstacle=createSprite(Math.round(random(500, 600)), 250, 10, 10)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1;
  obstacle.velocityX=-5
obstacle.lifetime=300
  obstacleG.add(obstacle);
   
}
}