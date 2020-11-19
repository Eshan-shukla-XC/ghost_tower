var tower,towerImg;
var door,doorImg,doorGrp;
var climber,climberImg,climberGrp;
var ghost,ghostImg;
var invisibleblock,invisibleblockGrp;


function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
  
}

function setup(){
  createCanvas=(600,600);
  
  tower=createSprite(300,300,30,30);
  tower.addImage("tower",towerImg);
  tower.velocityY=4;
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
ghost.scale=0.3; 
  
  invisibleblock=createSprite(200,15,30,2);
  
  doorGrp=new Group();
  climberGrp=new Group();
  invisibleblockGrp=new Group();
  
  
}

function draw(){
  background(0);
  if(tower.y>400){
    tower.y=300;
  }
  
  if(keyDown("space")){
    ghost.velocityY=-10;
  }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-5;
  }
  
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+5;
  }
  
  ghost.velocityY=ghost.velocityY+0.4;
  
  if(climberGrp.isTouching(ghost)||doorGrp.isTouching(ghost)){
    ghost.velocityY=0;
    
  }
  if(invisibleblockGrp.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
  }
  
  spawnDoors();
  drawSprites();
  
}

function spawnDoors(){
  if(frameCount%140===0){
  door=createSprite(200,-50,30,30);
  climber=createSprite(200,10,30,30);
  climber.addImage(climberImg);
  climber.velocityY=4;
  door.addImage(doorImg);
  door.x=Math.round(random(120,400));
  door.velocityY=4;
  climber.x=door.x;
  climber.lifetime=600;
  door.lifetime=600;
  doorGrp.add(door);
  climberGrp.add(climber);
    ghost.depth=door.depth+1;
  }
}
