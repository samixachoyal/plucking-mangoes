class Mango{
constructor(x,y,r){

var options={
isStatic:true,
restitution:0,
friction:1
}
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("mango.png");
this.body=Bodies.circle(this.x,this.y,this.r/3,options);
World.add(world,this.body);
}  
display(){

    var posm=this.body.position;
    push();
    translate(posm.x,posm.y);
   imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
   pop();
    }   
}