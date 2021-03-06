const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine;
var drops=[];
function setup(){
   createCanvas(800,800);
   engine = Engine.create();
   world = engine.world;
   var maxDrops=100;
   for(var i=0;i<=maxDrops;i++){
     drops.push(new Drops(random(0,100),random(0,400),30));
   }
   Engine.run(engine);
}

function draw(){
  background(0);
  for(i=0;i<100;i++){
    drops[i].display();
    drops[i].update();
}   
}
