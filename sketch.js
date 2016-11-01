var blue = [];
var cell;

function preload() {
  imageMode(CENTER);
  cell = loadImage('imgs/cell.png');

}

function setup() {
 createCanvas(1000, 700);

 for (var i = 0; i < 100; i++) {
   var x = random(width);
   var y = random(height);
   blue[i] = new Cellshuffle(cell, x, y);
 }

}

function draw() {
  background(255);
  background(220, 0, 0, 100);

  for (var i = 0; i < blue.length; i++) {
    blue[i].move();
    blue[i].display();
  }
}

function Cellshuffle(img, tempX, tempY) {

  this.x = tempX;
  this.y = tempY;
  this.cellImage = img;

  this.move = function() {
    this.x += sin(HALF_PI) * 5;
    this.y += random(-200, 800);
  }

  this.display = function() {
    image(this.cellImage, this.x, this.y);
  }
  
}
