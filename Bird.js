//made as a child class which inherits codes from parent class
class Bird extends BaseClass{
  constructor(x,y){
    //the keyword 
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}