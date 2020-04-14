function Ship(){
  this.x = width/2;
  this.xdir = 0;
  ship1 = loadImage('finalship.png');
  
  
  this.show = function(){
    fill(200, 0,0);
    rectMode(CENTER);
    image(ship1, this.x, height - 50, 40, 50);
  }
  
  this.setDir = function(dir){
    this.xdir = dir;
  }
  
  this.move = function(dir){
    this.x += this.xdir*5;
  }
}