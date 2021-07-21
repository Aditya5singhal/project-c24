class Iron{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 150;
        this.height = 40;
        World.add(world, this.body);
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r)
          var options={
			'restitution':0.8,
			'friction':3.,
			'density':30
		  }
			pop()
	}

}