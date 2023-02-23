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

  if (elapsedTime % spawnFreq === 0 && balls.length < 30) {

    spawnFreq = parseInt(random(50, 150));

    balls.push(new Ball(100,100));
    
}
  
  background(0);
  
  balls.forEach((ball)=>{
    ball.display();
    ball.bounce();
    ball.bounce();
  });
}

