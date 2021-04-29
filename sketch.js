
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground,ball1;
var ballImg;
var rect2,rect3,rect4;
function preload(){

}
function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
ball1= new Ball(100,350);
ball1.debug=true;
ground=new Ground(400,675,800,10);
rect1=new Dustbin(700,600,150,150);
rect2=new Box(620,590,10,150);
rect3=new Box(780,590,10,150);
rect4=new Box(700,665,150,20);

Engine.run(engine);
 console.log(ball1); 
}


function draw() {
  background("white");
  ball1.display();
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
  if (keyCode ===UP_ARROW) {
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:800,y:-800});
 }	
 }
