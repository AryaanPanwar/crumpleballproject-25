class Dustbingreen{

constructor(x,y,height){

this.x=x;
this.y=y;
this.width=20;
this.height=height;
this.angle=0;
this.image=loadImage("dustbingreen.png");
this.image.width=300;
this.body=Bodies.rectangle(this.x,this.y,this.image.width,this.height,{isStatic:true});
World.add(world,this.body);
}

display(){
var dustbinpos=this.body.position;	

push();
translate(dustbinpos.x,dustbinpos.y)
imageMode(CENTER)
image(this.image,0,0,this.image.width)
fill(0,141,0);
stroke("black");
rotate(this.angle);
rect(0,0,this.width,this.height);
pop();
}

}