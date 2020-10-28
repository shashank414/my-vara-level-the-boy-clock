function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);
  hr=hour();
mn=minute();
sc=second();
scAngles=map(sc,0,60,0,360)
mnAngles=map(mn,0,60,0,360)
hrAngles=map(hr,0,60,0,360)
push();
translate(200,200)
rotate(scAngles)
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
  pop();
  push();
translate(200,200)
rotate(mnAngles)
stroke("blue");
strokeWeight(7);
line(0,0,75,0);
  pop();
  push();
translate(200,200)
rotate(hrAngles)
stroke("yellow");
strokeWeight(7);
line(0,0,50,0);
  pop();
  drawSprites();
}