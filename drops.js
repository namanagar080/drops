class Drops{
    constructor(x,y,radius){
        var boxOptions={
            isStatic:false,
            friction:0.5,         
        }
        
        this.rain=Bodies.circle(x,y,radius/2,boxOptions);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.radius=radius;
        
    }

    display(){
        var angle=this.body.angle;
        push();
        fill("red");
        translate(this.rain.position.x,this.rain.position.y);
        rotate(angle);
       ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
       pop();
    }
     update(){
     if(this.rain.position.y>400){
         Matter.Body.setPosition(this.rain,{x:random (0,400),y=random(0,400)});
     }
    }
}   
