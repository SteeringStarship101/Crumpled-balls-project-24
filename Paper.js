class Paper {
    constructor(x,y,radius ){
      var   option  = {
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
        }
       this.radius = radius;
       this.body = Bodies.circle(x,y,radius,option)
       World.add(world,this.body);
    }
    display(){
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);


    }
}