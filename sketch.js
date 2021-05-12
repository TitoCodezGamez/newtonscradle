
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var c1,c2,c3,c4,c5,r;
var a1,a2,a3,a4,a5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var opt = {
		isStatic: true
	}

	var opt1 = {
	density: 1
	}

	strokeWeight(4);

	c1 = Bodies.rectangle(-50,75,75,75,opt1);
	World.add(world,c1);
	c2 = Bodies.rectangle(275,250,75,75,opt1);
	World.add(world,c2);
	c3 = Bodies.rectangle(350,250,75,75,opt1);
	World.add(world,c3);
	c4 = Bodies.rectangle(425,250,75,75,opt1);
	World.add(world,c4);
	c5 = Bodies.rectangle(500,250,75,75,opt1);
	World.add(world,c5);
	r = Bodies.rectangle(350,75,500,50,opt);
	World.add(world,r);

	a1 = new Attach(c1,{x:200, y:75},1,400);
	a2 = new Attach(c2,{x:275, y:75},1,400);
	a3 = new Attach(c3,{x:350, y:75},1,400);
	a4 = new Attach(c4,{x:425, y:75},1,400);
	a5 = new Attach(c5,{x:500, y:75},1,400);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(128);
	fill("pink");
	ellipse(c1.position.x, c1.position.y, 75);
	ellipse(c2.position.x, c2.position.y, 75);
	ellipse(c3.position.x, c3.position.y, 75);
	ellipse(c4.position.x, c4.position.y, 75);
	ellipse(c5.position.x, c5.position.y, 75);
	fill(155);
	rect(r.position.x, r.position.y,500,50);

	a1.display();
	a2.display();
	a3.display();
	a4.display();
	a5.display();

	//console.log(c1);
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(c1,{x: c1.position.x, y: c1.position.y},{x:-100,y:0});
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(c5,{x: c5.position.x, y: c5.position.y},{x:100,y:0});
	}
}



