class Dustbin{

constructor(x,y){

    this.x=x;
    this.y=y;
    this.dustbinWidth=300;
    this.dustbinHeight=320;
    this.wallThickness=20;
    this.angle=0;	
    

    this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2+10, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
    Matter.Body.setAngle(this.leftWallBody, this.angle);
    

    this.rightWallBody=Bodies.rectangle(this.x+150, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight+100, {isStatic:true})
    Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
    this.rectBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
    World.add(world, this.bottomBody)
    World.add(world, this.leftWallBody)
    World.add(world, this.rightWallBody);
    World.add(world,this.rectBody);
  




}
display(){
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var posRight=this.rightWallBody.position;
    var posRect = this.rectBody.position;

    push()
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER)
    //strokeWeight(4);
    angleMode(RADIANS)
    fill(255)
    stroke("white")
    rotate(this.angle)
    rect(0,0,this.wallThickness, this.dustbinHeight);
    pop()

    push()
    translate(posRight.x, posRight.y);
    rectMode(CENTER)
    //strokeWeight(4);
    stroke("white")
    angleMode(RADIANS)
    fill(255)
    rotate(-1*this.angle)
    rect(0,0,this.wallThickness, this.dustbinHeight);
    pop()

    push()
    translate(posBottom.x, posBottom.y);
    rectMode(CENTER)
    //strokeWeight(4);
    stroke("white")
    angleMode(RADIANS)
    fill(255)
    rect(0,0,this.dustbinWidth, this.wallThickness);
    pop()


  
    
}


}