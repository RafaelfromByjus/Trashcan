class Paper{
    constructor(x,y,width,height){
    var options = {
        isStatic:false,
        restitution: 0.3,
        density: 1.2
    }
        this.x=x;
		this.y=y;
		this.width=width
		this.height=height
		this.body=Bodies.rectangle(x, y, width, height, options);
 		World.add(world, this.body);

         this.image = loadImage("paper.png");
    }
    display()
	{
			
			var PaperPos=this.body.position;		

			push()
			translate(PaperPos.x, PaperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(200,700,this.width, this.height);
			pop()
			
	}
}