function Drop(x, y, r){
  this.x = x;
  this.y = y;
  this.r = r;
  this.toDelete = false;
  
  this.show = function(){
    fill(0, 0, 200, 80);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }
  
  this.move = function(){
    this.y = this.y - 5;
  }
  
  this.evaporate = function() {
    this.toDelete = true;
  };

  
  this.hits = function(flow){
   return (this.r + flow.r > dist(this.x, this.y, flow.x, flow.y));
 }
}
