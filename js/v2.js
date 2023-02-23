let balls = [];
// frequence en milliseondes
let spawnFreq = 100;
let startTime;

function setup() {
  startTime = millis();
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  let elapsedTime = millis() - startTime;

  //Toutes les "spawnFreq" millisecondes et si le tableau ne contient pas deja 30
  if (elapsedTime % spawnFreq === 0 && balls.length < 30) {

    //changement de la frequence pour la prochain spawn
    spawnFreq = parseInt(random(50, 200));
    //Ajout de l'objet dans le tableau
    balls.push(
      {
      radius: random(3, 30),
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
  
    //Rebond
    if(ball.pos.x >= windowWidth - ball.radius || ball.pos.x <= ball.radius){
      ball.speed.x = -ball.speed.x;
    }
    
    if(ball.pos.y >= windowHeight - ball.radius|| ball.pos.y <= ball.radius){
      ball.speed.y = -ball.speed.y;
    }
  });
}

