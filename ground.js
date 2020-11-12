//to create a class = class (classname)

class Ground{


    constructor(x,y,width,height){              //function setup()
        var options = {
            isStatic:true
        }
    //this = object that is to be created inside the sketch.js
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    
    
    display(){                  //function draw()
        var pos = this.body.position;
        rectMode(CENTER);
        //color
        fill("green");
        rect(pos.x,pos.y,this.width,this.height)
    
    }
    
        
    }