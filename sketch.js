const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,50,1200,20);
  

    box1 = new Box(120,235,70,70);
    box2 = new Box(150,235,70,70);
    box3 = new Box(180,235,70,70);
    box4 = new Box(210,235,70,70);
    box5 = new Box(240,235,70,70);
    box6 = new Box(270,235,70,70);
    box7 = new Box(300,235,70,70);
    box8 = new Box(330,235,70,70);
    box9 = new Box(360,235,70,70);
    box10 = new Box(390,235,70,70);
    box11= new Box(410,235,70,70);
    box12= new Box(440,235,70,70);
    box13= new Box(470,235,70,70);
}
function draw(){

    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    ground.display();    
}