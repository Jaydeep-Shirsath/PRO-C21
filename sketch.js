var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 4;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
 if(tower.y > 600){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("Left")){
        ghost.x = ghost.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("Right")){
  
          ghost.x = ghost.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("Space")){
  
         ghost.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
      ghost.velocityY = ghost.velocityY + 0.8;
  
  //ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
      
      //invisibleBlockGroup.setcolaider("circle",0,0,40)
     
      spawnDoors();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.velocityY = 0;
      gameState = "end"
    }
    
  
  drawSprites();
  invisibleBlockGroup.debug=true
}
  if (gameState === "end"){
    invisibleBlockGroup.visible = false;
    climbersGroup.visible = false;
    ghost.visible = false;
    tower.visible = true;
    stroke("black");
    fill("red");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function

    invisibleBlock.x = Math.round(random(100,500));
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = tower.velocityY;
    climber.velocityY = tower.velocityY;
    invisibleBlock.velocityY = tower.velocityY;

    door.x = invisibleBlock.x;
    climber.x = invisibleBlock.x;
 //change the depth of the ghost and door
     
     
    ghost.depth = door.depth;
         ghost.depth =1;
    
    //assign lifetime for the  door, climber and invisible block

 door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

