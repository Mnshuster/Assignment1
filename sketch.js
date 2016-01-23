function setup() {
  createCanvas(500,500);
  background(255,204,0);
  
}

//Ben-Day dots

function draw() {
  var x = 0;
    while(x < 500){
  var y = 0;
    while(y < 500){
      noStroke(0);
      fill(255,0,0);
      ellipse(x,y,20,20);
  y = y + 40;
}
  x = x + 40;
}
}