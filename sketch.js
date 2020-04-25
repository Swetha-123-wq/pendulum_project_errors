const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,cord;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  holder = new Holder(200,100,200,20);
  ball = new Ball(220,200,40);
 cord = new Cord(holder.holder,ball.ball);
    
 }

function draw() {
  background(150); 
  Engine.update(engine);
  text("Press space bar to oscillate the pendulam to left and right with mouse",10,20);
  text("Press Enter to stop the Pendulum from oscillating",100,50);
  holder.display();
ball.display();
cord.display();

  if(keyCode===32){
    Matter.body.setPosition(ball.body, {x: mouseX, y:mouseY});
   // ball.position.y = mouseY;
    //ball.position.x = mouseX;
    }
    
    else if (keyCode === ENTER){
    ball.position.x = 200;
    
    }
  
}