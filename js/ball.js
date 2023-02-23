

class Ball{

  static circle = true;
 
  constructor(posX,posY,color = "white"){
    this.pos = createVector(posX,posY);
    this.radius = random(5,10);
    this.color = color;
    this.speed = createVector(random(-2,2),random(-2,2));

  }
  
}


