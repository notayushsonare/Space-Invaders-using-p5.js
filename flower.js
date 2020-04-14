function Flower(x, y, r){
  this.x = x;
  this.y = y;
  this.r = r;
  this.dir = 1;
  ant = loadImage('vfinal.png');
  
  this.evaporate = function() {
    //this.r = 0;
    return true
    
  }
  
  this.show = function(){
    fill(0, 200, 0);  
    noStroke();
    image(ant,this.x, this.y, this.r, this.r);  
  }
  
  this.move = function(){
    this.x += this.dir;
    // if (this.x < 0 || this.x > width){
    //   this.dir = -this.dir;
    // }
  }
  
  this.shiftdown = function(){
    this.y = this.y + this.r / 2;
    this.dir = -this.dir;
  }
}