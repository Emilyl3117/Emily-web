function setup(){
	createCanvas(600,600);
	background(220);
}

function draw(){
  //challenge
  var x=10;
  var y=30;
  //vancouver
	fill(161,217,155)
	beginShape();
	vertex(400+x,50+y);
	vertex(400+x,200+y);
	vertex(200+x,250+y);
	vertex(50+x,150+y);
	vertex(50+x,80+y);
	vertex(120+x,70+y);
	vertex(150+x,40+y);
	vertex(100+x, 5+y)
	vertex(150+x, 5+y);
	vertex(190+x, 20+y);
	endShape(CLOSE);
	//circle
	fill(250)
	ellipse(100+x,120+y,70,70)
	//circle2
	fill(250)
	ellipse(200+x,150+y,50,50)
  
  fill(0,90,50)
  textSize(30)
  text('Vancouver', 180, 350)
}