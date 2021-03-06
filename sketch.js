const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine,man,rand,thunder1,thunder2,thunder,thunderFrame=10;
var drops=[];

function preload(){
thunder1=loadImage("images/thunderbolt/1.png");
thunder2=loadImage("images/thunderbolt/2.png");
}


function setup(){
   createCanvas(1000,800);
   engine = Engine.create();
   world = engine.world;
   man=new Umbrella(500,760,400);
   var maxDrops=100;
   for(var i=0;i<=maxDrops;i++){
     drops.push(new Drops(random(0,100),random(0,400),10));
   }
   Engine.run(engine);
}

function draw(){
  background(0);
  rand=Math.round(random(1,2));
  if(frameCount%80===0){
    thunderFrame=frameCount;
    thunder=createSprite(random(10,870),random(10,30),10,10);
   switch(rand){
    case 1:thunder.addImage(thunder1);
    break;
    case 2:thunder.addImage(thunder2);
    break;
    default: break;
   }
   thunder.scale=random(0.3,0.6);
  }
  for(i=0;i<100;i++){
    drops[i].display();
    drops[i].update();
}
man.display();
drawSprites();   
}
