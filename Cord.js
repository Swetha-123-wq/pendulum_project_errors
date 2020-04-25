class Cord {
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness: 0.004,
            length : 100
          }
          //this.bodyA = bodyA;
          //this.bodyB = bodyB; 
          this.cord = Constraint.create(options);
          World.add(world,this.cord);

    }

    display(){
  var pointA = this.cord.bodyA.position;
var pointB = this.cord.bodyB.position;
push();
strokeWeight(6);
fill("yellow");
stroke("skyblue");
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();
    }
}