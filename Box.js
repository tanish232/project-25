class Box{
    constructor(x,y,a,b){
    var op={
     isStatic:true 
    }
    this.body=Bodies.rectangle(x,y,a,b,op);
    this.width=a;
    this.height=b;
     World.add(world,this.body);
    }
    display(){
    var pos= this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x,pos.y,this.width,this.height);
    }
    }