class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  display(colour){
    push();
      translate(this.body.position.x, this.body.position.y);
      switch (colour){
        case 1 :  fill(rgb(139,0,247))
                  break;
        case 2 : fill("indigo")
                  break;
        case 3 : fill("blue")
                  break;
        case 4 : fill("green")
                  break;
        case 5 : fill("yellow")    
                  break;
        case 6 : fill("orange")
                  break;
        case 7 : fill("red")
                  break;
        default : fill(255)   
      }
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
    pop();
    }
}