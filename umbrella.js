class Umbrella{
    constructor(x,y,radius){
        var boxOptions={
            isStatic:true,
            friction:0.5,         
        }
        
        this.man=Bodies.circle(x,y,radius/2,boxOptions);
        this.x=x;
        this.y=y;
        this.radius=radius;
        World.add(world,this.man);
        this.image=loadImage("images/Walking Frame/walking_1.png")
    }

    display(){
        var angle=this.man.angle;
        push();
        fill("red");
        translate(this.man.position.x,this.man.position.y);
        rotate(angle);
       //ellipseMode(CENTER);
        //ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
       pop();
    }
}