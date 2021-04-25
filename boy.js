class Boy{
  constructor(x,y) {
    var options ={
      isStatic:true
    }

      
      this.body = (x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("boy.png");
      this.image.scale = 
      World.add(world, this.body);
  }
    display(){
      push();
      translate(200,100);
      pop();
    }
}