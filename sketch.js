var hr,mn,sc;

function setup() {
  createCanvas(1366, 657);
  angleMode(DEGREES);
}
function draw() {
background(0);  
  hr = hour();
  mn = minute();
  sc = second();

  translate(683,328.5);
  rotate(-90);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,140,0);
  pop();

  push();
  rotate(hrAngle);
  strokeWeight(7);
  stroke("blue");
  line(0,0,100,0);
  pop();

  stroke("red");
  strokeWeight(7);
  noFill();
  arc(0,0,370,370,0,scAngle);

  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,355,355,0,mnAngle);

  stroke("blue");
  strokeWeight(7);
  noFill();
  arc(0,0,340,340,0,hrAngle);

  drawSprites();
}