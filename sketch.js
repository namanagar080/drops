const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var drops=[];
function setup(){
   createCanvas(800,800);
   var maxDrops=100;
   for(var i=0;i<=maxDrops;i++){
     drops .push(new Drops(random(0,100),random(0,400)));
   }
}

function draw(){
    drops.display();
    drops.update();
}   

