const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
function setup() {
  createCanvas(800,400);
   engine = Engine.create();
    world = engine.world;

  rectangle1 = new Rectangle(150,230,20,100);
  rectangle2 = new Rectangle(250,230,80,100);
  rectangle3 = new Rectangle(335,230,20,100);
}

function draw() {
  Engine.update(engine);
  background(0,0,0);  
  fill("pink");
  triangle(320,50,140,180,350,180);
  fill("brown");
  rectangle1.display();
  fill("blue");
  rectangle2.display();
  fill("green");
  rectangle3.display();
  
  drawSprites();
}