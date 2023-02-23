let balls = [];
let ballModel;
function setup() {

  for(let i = 0; i < 4;i++){
  balls.push(new Ball(random(50,windowWidth-50),random(50,windowHeight-50)));
  }
let d = new Date()
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(0);

  for(let ball of balls){
      //Affichage
displayBall(ball)


  //Déplacement
  ball.pos.x += ball.speed.x;
  ball.pos.y += ball.speed.y;

  //Rebond
  if(ball.pos.x > windowWidth - ball.radius || ball.pos.x < ball.radius){
    ball.speed.x = -ball.speed.x;
  }
  
  if(ball.pos.y > windowHeight - ball.radius|| ball.pos.y < ball.radius){
    ball.speed.y = -ball.speed.y;
      balls.push(new Ball(ball.x,ball.y));
  }
  }
}

function displayBall(ball){
        fill(ball.color);
  ellipse(ball.posX, ball.posY, ball.radius * 2);
    
}