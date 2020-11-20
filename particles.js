class particle{

constructor(x,y,width,height){
var options={

restitution: 1,
friction: 0.1,
density: 0.3

}
this.body= Bodies.rectangle(x,y,width,height,options)

this.width= width;
this.height= height;

World.add(world,this.body)

}

display(){

var pos= this.body.position;
var angle= this.body.angle;
push();

ellipseMode(CENTER);

rotate(angle);

fill("green");

ellipse(pos.x,pos.y,this.width,this.height);

pop();
}

















}