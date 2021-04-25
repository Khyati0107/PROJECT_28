class stone{
    constructor(x, y, width, height, ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(400, 250, width, height, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("stone.png");
        this.image.scale = 0.1
        World.add(world, this.body);
      }
      display(){
        push();

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}