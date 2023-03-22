var balls = [];

var createBall = function(x, y){
  var ball = {};
  ball.position = createVector(x,y);
  ball.angle = createVector(8,3);
  return ball;
}

var redness = 220
var myCounter = 0
var myCounterTwo = 0

function setup() {
  createCanvas(600, 400);  
  for (var i = 0; i < 200; i++){
  balls.push(createBall(width*Math.random(),0));
  balls[i].position.x = Math.random()
  balls[i].position.y = Math.random()
  }
}

var count = 0;
var flipper = 0.5

function draw() {
  background("#03A9F4");
  count++;
  noStroke();
  
  
  fill(redness, 0, 0);
  
  for (var i = 0; i < balls.length; i++){
    balls[i].position.add(balls[i].angle); 
    square(balls[i].position.x,balls[i].position.y,15);
    
    if (balls[i].position.x > (width-50) || balls[i].position.x < 0){
      balls[i].angle.x = -balls[i].angle.x;
    }
  
    if (balls[i].position.y > (height-50) || balls[i].position.y < 0){
      balls[i].angle.y = -balls[i].angle.y;
    }  

      balls[i].angle.y = balls[i].angle.y + flipper*5

if (!mouseIsPressed) {
    balls[i].position.x = balls[i].position.x + 1/12*(mouseX - balls[i].position.x)
      balls[i].position.y = balls[i].position.y + 1/25*(mouseY - balls[i].position.y)
}
    else
      {
        balls[i].position.x = balls[i].position.x - 0.02*(mouseX - balls[i].position.x)
      balls[i].position.y = balls[i].position.y - 0.02*(mouseY - balls[i].position.y)
      }
  

  balls[i].angle.y = balls[i].angle.y + (Math.random()*2-1);
  balls[i].angle.x = balls[i].angle.x + (Math.random()-0.5);
  redness = 180 + 40 * Math.random()
  blueness = 220 * Math.random()
  greenness  = 90 * Math.random()
  fill(redness, greenness, blueness);
  myCounter++
    myCounterTwo++
  if (myCounter > 70000) {flipper = flipper; myCounter = 0}
  }
  if (myCounterTwo > 70000) {for (var i = 0; i < balls.length; i++){
    balls[i].position.x = Math.random()
balls[i].position.y = Math.random()
balls[i].angle.x = Math.random()*10
balls[i].angle.y = Math.random()*10
myCounterTwo = 0
  }
  }
}
