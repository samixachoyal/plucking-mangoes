class Lancher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.lanch = Constraint.create(options);
        World.add(world, this.lanch);
    }

    attach(body){
        this.lanch.bodyA = body;
    }

    fly(){
        this.lanch.bodyA = null;
      }

    display(){
        if(this.lanch.bodyA){
        var pointA = this.lanch.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    } 
}  
