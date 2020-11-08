const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
	paper = new Paper(5, 350, 40);
	rightside = new Dustbin(700, 600, 10, 100);
	leftside = new Dustbin(500, 600, 10, 100);
	baseside = new Dustbin(600, 650, 200, 10);
	ground = new Ground(400, 680, 800, 20)
}

function draw(){
    background(0);
    Engine.update(engine);
	paper.display();
	rightside.display();
	leftside.display();
	baseside.display();
    ground.display();
	drawSprites();
}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
	}
}



