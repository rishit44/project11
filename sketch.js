
var ship, ship_sailing, edges;
var seaImage;
var sea;

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImage = loadImage("sea.png")
 if(sea.x<0){
   sea.x=sea.width/2;
 }
}


function setup(){
  createCanvas(10000,10000);
  
  // creating trex
  ship = createSprite(0,200,40,50);
  ship.addAnimation("ship_sailing", ship_sailing);
 
  sea=createSprite(300 ,300)
  sea.addImage(seaImage) 
  sea.x=sea.width/2
 ship.scale=0.5
 ship.x=50
 sea.scale=0.25
 sea.X=50
 
}







function draw(){
  //set background color 
    background("lightblue")
  //logging the y position of the trex
  console.log(ship.y)
  ship.collide(sea)

sea.velocityX=-2

  drawSprites();
}