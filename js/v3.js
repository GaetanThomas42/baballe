let balls = [];
// frequence en milliseondes
let spawnFreq = 10;
let startTime;

function setup() {
  startTime = millis();
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  let elapsedTime = millis() - startTime;

  //Toutes les "spawnFreq" millisecondes et jusqu'a 30 balles, on en ajoute une
  if (elapsedTime % spawnFreq === 0 && balls.length < 30) {
    //changement de la frequence pour la prochain spawn
    spawnFreq = parseInt(random(50, 150));
    //Ajout de l'objet dans le tableau
    balls.push(
      {
      radius: random(5,19),
      color: color(random(255), random(255), random(255)),
      pos: createVector(random(50, windowWidth - 50), random(50, windowHeight - 50)),
      speed: createVector( random(-1.5, 1.5), random(-1.5, 1.5))
      }
    );
    
}
  
  background(0);
  
  balls.forEach((ball)=>{
    //Affichage
    fill(ball.color);
    ellipse(ball.pos.x, ball.pos.y, ball.radius * 2);
  
    //Déplacement
    ball.pos.x += ball.speed.x;
    ball.pos.y += ball.speed.y;
  
    //Rebond X
    if(ball.pos.x >= windowWidth - ball.radius || ball.pos.x <= ball.radius){
      ball.speed.x = -ball.speed.x;
    }
    //Rebond Y
    if(ball.pos.y >= windowHeight - ball.radius|| ball.pos.y <= ball.radius){
      ball.speed.y = -ball.speed.y;
    }
    
    //Souris
     if (
    mouseX > ball.pos.x - ball.radius &&
    mouseX < ball.pos.x + ball.radius &&
    mouseY > ball.pos.y - ball.radius &&
    mouseY < ball.pos.y + ball.radius
  ) {
       balls.splice(balls.indexOf(ball),1);
  }
    
  });

}

