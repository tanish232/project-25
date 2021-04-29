class Ball{
constructor(x,y){
 var option={
  restitution:0.3,
  friction:0.5,
  density:1.2,
} 
 this.body=Bodies.circle(x,y,70,option); 
 //this.radius=r;
 this.body.scale=0.4
 this.image=loadImage("paper.png");
 World.add(world,this.body);
}
display(){
//ellipseMode(CENTER);
imageMode(CENTER);
//ellipse(this.image,this.body.position.x,this.body.position.y,this.radius);
image(this.image,this.body.position.x,this.body.position.y,70);
}
}