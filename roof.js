class Roof{
    constructor(x,y,width,height){
        var options = {
            //'restitution':1,
            'friction':2,
            'density':1,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
       
    rectMode(CENTER);
    fill("pink");
    rect(pos.x,pos.y, this.width, this.height);
    ;
    }
}