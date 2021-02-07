
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var mango,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var tree1;
var ground;
var boy,boyImage;
var stone;
var lanche;
function preload(){

boyImage = loadImage("boy.png")	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,580,10,50);
	boy.addImage(boyImage);
	boy.scale = 0.15;
	stone = new Stone(130,500,50);
	ground = new Ground(500,670,1000,20);
	mango = new Mango(650,400,50);
	mango2 = new Mango(850,250,40);
	mango3 = new Mango(750,330,45);
	mango4 = new Mango(740,280,40);
	mango5 = new Mango(885,350,32);
	mango6 = new Mango(825,325,40);
	mango7 = new Mango(725,400,35);
	mango8 = new Mango(820,400,50);
	mango9 = new Mango(900,410,25);
	mango10 = new Mango(950,390,40);
	tree1 = new Tree(800,430,400,500);	
    lanche = new Lancher(stone.body,{x:130,y:500})
	Engine.run(engine);
  
}


function draw() {
  background(rgb(104,62,220));

  drawSprites();
  tree1.display();
  ground.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
	stone.display();
	lanche.display();
	detectcollosion(stone,mango);
	detectcollosion(stone,mango2);
	detectcollosion(stone,mango3);
	detectcollosion(stone,mango4);
	detectcollosion(stone,mango5);
	detectcollosion(stone,mango6);
	detectcollosion(stone,mango7);
	detectcollosion(stone,mango8);
	detectcollosion(stone,mango9);
	detectcollosion(stone,mango10);
}

function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	lanche.fly();

}

function detectcollosion(lstone, lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	Matter.Body.setPosition(stone.body,{x:130,y:500})
	lanche.attach(stone.body)
}
