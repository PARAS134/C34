class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.04,
    }
    //A RECTANGLE BODY WILL BE CREATED WITH THE PROPERTIES OF CONSTUCTOR;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    //THE BODY IS ADDED TO THE THE WORLD;
    World.add(world, this.body);
  }
  
  display(){
    //THIS.BODY.POSITION IS SAVED IN VARIABLE POS;
    var pos =this.body.position;
    var angle = this.body.angle;
    //PUSH AND POP ARE TO RETAIN TO NORMAL SETTINGS;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("white");
    rect(0, 0, this.width, this.height);
    pop();
  }
}