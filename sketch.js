const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

box1 = new Box(600,50,70,70);
box2 = new Box(600,50,70,70);
box3 = new Box(600,50,70,70);
box4 = new Box(600,50,70,70);
box5 = new Box(600,50,70,70);
box6 = new Box(600,50,70,70);
box7 = new Box(600,50,70,70);
box8 = new Box(600,50,70,70);
//box9 = new Box(600,50,70,70);
//box10 = new Box(600,50,70,70);
//box11= new Box(600,50,70,70);
ground = new Ground(600,390,1200,10);
ball = new Ball(300,300,30,30);
rope=new Rope(ball.body,{x:300,y:20});

}
function draw(){
    background(277);
    Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
//box9.display();
//box10.display();
//box11.display();
ball.display();

rope.display();

ground.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }