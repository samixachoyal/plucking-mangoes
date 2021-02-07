class Ground{
    constructor(x,y,width,height){
    
    var options={
    isStatic:true
    }
    this.x=x;
    this.y=y;
   this.width=width;
   this.height=height;
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body);
    }  
    display(){

 var posg=this.body.position;
rectMode(CENTER);
fill("lime")
 rect(posg.x,posg.y,this.width,this.height)
 } 


    }  