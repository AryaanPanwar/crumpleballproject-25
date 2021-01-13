const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var dustbingreen;


function setup() {
	createCanvas(1200,870)
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dustbin(1000,550);
	dustbingreen=new Dustbingreen(1000,395,10,10);
	paperObject=new Paper(100,350,140);
	groundObject=new Ground(width/2,570,width,20);
	

	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  
  dustbingreen.display();
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1200,y:-1200});
    
  	}
}






