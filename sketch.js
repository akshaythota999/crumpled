var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	containerSprite=createSprite(400,650,200,20);
	containerSprite2=createSprite(300,600,20,100);
	containerSprite3=createSprite(500,600,20,100);
	
	ground=createSprite(400,700,800,20);
	ball = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, ball);
	Engine.run(engine);
	

}


function draw() {
  background(0); 
  rectMode(CENTER)
  ball.bounceOff(containerSprite)
  ball.bounceOff(containerSprite2)
  ball.bounceOff(containerSprite3)
  
 
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Body.applyForce(ball.body,ball.body.position,{x:5,y:-10});
	   
	 }
   }


