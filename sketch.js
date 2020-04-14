var ship;
var flowers = [];
var drops = [];
var counter = 0;
//function preload(){
  
function setup() {
  createCanvas(400, 300);
  ship = new Ship();
  
  for (var i = 0; i < 7; i++){
    flowers[i] = new Flower(i * 50 + 50, 40, 20);
    
  }
}


function draw() {
  background(255);
  ship.show();
  ship.move();
  
  
  
  //button = createButton('Score:'+ counter);
  //button.position(width-55, 19);
  for (var i = 0; i < drops.length; i++){
      drops[i].show();
      drops[i].move();
      for (var j = 0; j < flowers.length; j++){
        if (drops[i].hits(flowers[j])) {
           
          flowers.splice(j, 1);
          counter += 1;
          
          drops[i].evaporate();
      }
    }
    
    }
  
   
   var edge = false;
   for (i = 0; i < flowers.length; i++){
      flowers[i].show();
      flowers[i].move();
      if (flowers[i].x < 0 || flowers[i].x > width){
        edge = true;  
      } 
    }
  if (flowers.length == 0){
     for (var f = 0; f < 7; f++){
       flowers[f] = new Flower(f * 50 + 50, 40, 20);
      }
   }
  
    if (edge){
      for (var a = 0; a < flowers.length; a++){
      flowers[a].shiftdown()
      }
    }
           
    for (i = drops.length - 1; i >= 0; i--) {
      if (drops[i].toDelete) {
        drops.splice(i, 1);
      }
    }
   text('Score-'+counter, width-70, 20);
}


function keyReleased(){
  if (key != ' '){
    ship.setDir(0);
  }
}

function keyPressed(){
  if (key === ' '){
    var drop = new Drop(ship.x + 20, height - 34, 13);
    drops.push(drop);
  }
  
  if (keyCode === RIGHT_ARROW){
    ship.setDir(1);
  }else if (keyCode === LEFT_ARROW){
    ship.setDir(-1);
  }
  
}


