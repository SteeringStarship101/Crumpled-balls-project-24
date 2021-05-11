
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgimg
var paper;
var ground;
var dustbin;
var binImg;
function preload()
{
	bgimg = loadImage("park.png")
	binImg = loadImage("Dustbin.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	paper = new Paper (100,300,30);
	ground = Bodies.rectangle(width / 2, 700, width, 10,{  isStatic: true});
		ground = 
		World.add(world,ground);
		bin = createSprite(964,520,20,20);
		bin.addImage(binImg);
		bin.scale = 0.45;
	
		binPart1 = new Dustbin(902,505,10,120);
		binPart2 = new Dustbin(962,565,130,10);
		binPart3 = new Dustbin(1024,505,10,120);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(bgimg );
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


