class Drops{
    constructor(x,y,radius){
        var boxOptions={
            isStatic:false,
            friction:0.5,         
        }
        
        this.rain=Bodies.circle(x,y,radius/2,boxOptions);
        this.x=x;
        this.y=y;
        this.radius=radius;
        World.add(world,this.rain);
        this.image=loadImage("images/download.png")
    }

    display(){
        var angle=this.rain.angle;
        push();
        fill("red");
        translate(this.rain.position.x,this.rain.position.y);
        rotate(angle);
       //ellipseMode(CENTER);
        //ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
       pop();
    }
     update(){
     if(this.rain.position.y>800){
         Matter.Body.setPosition(this.rain,{x:random (0,1000),y:random(0,800)});
     }
    }
}   
