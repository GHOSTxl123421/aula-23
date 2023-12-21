
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;
function preload()
{
	
}

function setup() {
	createCanvas(500, 800);
	

	 
var particle_options = {
 restitution:0.4,
 friction:0.02
} 
	
	 




   var plane_options={
     isStatic: true
   
	}
	
	
	   


	engine = Engine.create();
	world = engine.world;

	
	//Crie os Corpos aqui.
	var block1_options = {
		isStatic: true
	  }

	 

	  var rotator_options = {
		isStatic: true
	}
	block1 = Bodies.rectangle(400,455,80,30,block1_options);
  World.add(world,block1);
  
 
  
block2 = Bodies.rectangle(100,455,80,30,block1_options);
	World.add(world,block2);

	Engine.run(engine);
  



rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
World.add(world,rotator1);

rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
World.add(world,rotator2);

rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
World.add(world,rotator3);



var particle_options = {
	restitution:0.4,
	friction:0.02
   } 


 
 particle1 = Bodies.circle(220,10,10,particle_options);
 World.add(world,particle1);
 
 particle2 = Bodies.circle(220,10,10,particle_options);
 World.add(world,particle2);
 
 particle3 = Bodies.circle(220,10,10,particle_options);
 World.add(world,particle3);
 
 particle4 = Bodies.circle(220,10,10,particle_options);
 World.add(world,particle4);
 
 particle5 = Bodies.circle(220,10,10,particle_options);
 World.add(world,particle5);
 

 ground = Bodies.rectangle(0,800,800,20,plane_options);
 World.add(world,ground);


rectMode();


}


function draw() {
  rectMode(CENTER);
  
  ellipseMode();
  background(103,203,102);
  Engine.update(engine);
  fill('red');

 rect(100,450,110,20);
 rect(400,450,110,20);
 rect(ground.position.x,ground.position.y,1800,20)


Matter.Body.rotate(rotator1,angle1)
push();
translate(rotator1.position.x,rotator1.position.y);
rotate(angle1);
rect(0,0,150,20);
pop();
angle1 +=10.2;

Matter.Body.rotate(rotator2,angle2)
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle2 +=20.5;

Matter.Body.rotate(rotator3,angle3)
push();
translate(rotator3.position.x,rotator3.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle3 +=15.0;
   

ellipse(particle1.position.x,particle1.position.y,20);
ellipse(particle2.position.x,particle2.position.y,20);
ellipse(particle3.position.x,particle3.position.y,20);
ellipse(particle4.position.x,particle4.position.y,20);
ellipse(particle5.position.x,particle5.position.y,20);


rectMode();
  drawSprites();
 
}



