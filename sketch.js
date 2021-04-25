
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint

var launcherObject
var launcherForce = 100;
var boy1;
var ground1;
var stoneObj;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1 = new Ground (600,height,1200,20);
   boy1 = new Boy(200,200)
   stoneObj = new stone

   launcherObject = new Launcher (stoneObj.body, {x:235,y:420})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  boy1.display();
  ground1.display();
  stoneObj.display();
  
 
  launcherObject.display();
}




function mouseDragged(){
   Matter.Body.setPosition(stoneObj.body ,{x:mouseX, y:mouseY})
}

function mouseReleased(){
   Launcher.fly();
}