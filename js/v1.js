let ball;

function setup() {

  ball = {
    posX : random(50,windowWidth - 50),
    posY: random(50, windowHeight - 50),
    radius: 10,
    color: "green",
    speedX: 2,
    speedY: 2
  };
  
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(0);
  //Affichage
  fill(ball.color);
  ellipse(ball.posX, ball.posY, ball.radius * 2);

  //Déplacement
  ball.posX += ball.speedX;
  ball.posY += ball.speedY;

  //Rebond
  if(ball.posX > windowWidth - ball.radius || ball.posX < ball.radius){
    ball.speedX = -ball.speedX;
  }
  
  if(ball.posY > windowHeight - ball.radius|| ball.posY < ball.radius){
    ball.speedY = -ball.speedY;
  }
}

