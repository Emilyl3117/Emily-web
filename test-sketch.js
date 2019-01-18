var count = 0; 
function setup() {
createCanvas(800, 700);
rectMode(CENTER);
}
function draw() {
background(250,250, 250);
	var x = -100+count
	var y = -100
noStroke()
//rect 1
fill(255,255,204)
rect(x,y+200,50,50)
//rec 2
fill(161,218,180)
rect(x+100,y+250,50,50)
//rect 3
fill(65,182,196)
rect(x+200,y+300,50,50)
//rect 4
fill(44,127,184)
rect(x+300,y+350,50,50)
//rect 5
fill(37,52,148)
rect(x+400,y+400,50,50)

	count+=1
}
