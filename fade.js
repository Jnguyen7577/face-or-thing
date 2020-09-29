class Fade {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
    
    
  }

  display() {
    //Small dark circle
  
  fill(27, 29, 82, 95);
  strokeWeight(0);
  circle(this.xPos, this.yPos, this.size);
  }
  
  
  move(){
   if (this.yPos <= height + this.size / 2){
   this.yPos += 2; 
  }else{
    this.yPos = - this.size/2;
    this.xPos = random(width);
    this.size = random(10, 60);
  }
}
}
//function drawFadecircle(){
  
  //Small dark circle
  //fill(27, 29, 82, 95);
  //strokeWeight(0);
  //circle(290, 280, 100);
  //}