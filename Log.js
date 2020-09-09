class Log extends BaseClass { 
    constructor(x, y, height, angle) {
      super(x,y,20,height);
      //to change the angle of the log with each frame
      Matter.Body.setAngle(this.body, angle);
      this.image=loadImage("sprites/wood2.png");
    
    }
  };
  