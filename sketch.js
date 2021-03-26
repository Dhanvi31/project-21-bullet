var bullet,speed,weight
var wall, thickness

function setup() {
createCanvas(800,400);
bullet=createSprite(50, 200, 35, 5);
bullet.shapeColor="red"
wall=createSprite(700,200,thickness,height/2)
wall.shapeColor="brown"
}
function draw() {
background("black"); 
thickness=random(2,9)
speed=random(220,390)
weight=random(30,50)
console.log(bullet.x-wall.x)
if(bullet.x-wall.x<-50){
  bullet.changeColor="yellow"
}
else{
  bullet.shapeColor="yellow"
}
if(bullet.x-wall.x<-55){
  bullet.changeColor="blue"
}
else{
  bullet.shapeColor="yellow"
}
if(bullet.isTouching(wall)){
  bullet.velocity=0
}

if (keyDown("space")) { 
  bullet.velocityX = 20;
}
drawSprites();
}