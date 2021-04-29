class Dustbin{
    constructor(x,y,a,b){
    var op={
     isStatic:true 
    }
    this.body=Bodies.rectangle(x,y,a,b,op);
    this.width=a;
    this.height=b;
    this.image=loadImage("dustbin.png")
     World.add(world,this.body);
    }
    display(){
    var pos= this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
    }
    }