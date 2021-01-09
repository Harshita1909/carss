//declaring car and wall
var car;
var wall;

//declaring speed and weight
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
 
//random values for speed and weight
speed=random(55,90);
weight=random(400,1500);

//creating car and wall
car=createSprite(50,200,50,50);
wall=createSprite(1500,200,60,height/2);

//moving the car
car.velocityX=speed;

}

function draw() {
  background("black");
 
  //deformation of car
if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){
 car.shapeColor=("red");
}
if(deformation<180&&deformation>100){
car.shapeColor=("yellow");
}
if(deformation<100){
car.shapeColor=("green");
}
}
 
  drawSprites();

}