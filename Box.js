class Box{
    constructor(x,y,width,height){
        var options={
            friction:10,
            density:2,
            restitution:0,
            isStatic:true
            
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    
    }
    display(){
        push ();
        var pos=this.body.position
        var angle=this.body.position
        translate(pos.x,pos.y)

        rotate (angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}