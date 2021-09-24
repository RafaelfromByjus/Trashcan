class Paper{
    constructor(x,y,r){
    var options = {
        isStatic:false,
        restitution: 0.3,
        density: 1.2
    }
        this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
 		World.add(world, this.body);

         this.image = loadImage("paper.png");
    }
    display()
	{
			
			var PaperPos=this.body.position;		
			image(this.image, 0,0,this.r, this.r)
			push()
			translate(PaperPos.x, PaperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rec(200,700,this.width, this.height);
			pop()
			
	}
}