
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgimg
var paper;
var ground;
var dustbin;
function preload()
{
	bgimg = loadImage("park.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper (100,300,30);
	ground = Bodies.rectangle(width / 2, 700, width, 10,{  isStatic: true});
		ground = 
		World.add(world,ground);
		dustbin = new Dustbin(600,700,300,10)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(bgimg);
  paper.display();
  dustbin.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyDown ( "UP_ARROW" )) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 120,
		y: -150
	  });
	}
  }


