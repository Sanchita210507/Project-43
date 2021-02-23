var hr, mn, sc;


function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(0);  
hr = hour();
mn= minute();
sc= second();


stroke(255)
strokeWeight(1)
fill(255)
textSize(24)
textAlign(CENTER, CENTER)
//text('${hr} ${mn} ${sc}', 200, height-20)

hr = map(hr, 0, 24, 0, 360)
mn = map(mn, 0, 60, 0, 360)
sc = map(sc, 0, 60, 0, 360)

angleMode(DEGREES)

push()
stroke(255, 0, 0)
strokeWeight(7)
translate(width/2, height/2)
rotate(hr)
line(0, 0, 0, -50)
pop()

push()
stroke(0, 255, 0)
strokeWeight(7)
translate(width/2, height/2)
rotate(mn)
line(0, 0, 0, -75)
pop()

push()
stroke(0, 0, 255)
strokeWeight(7)
translate(width/2, height/2)
rotate(sc)
line(0, 0, 0, -100)
pop()

noFill()
strokeWeight(7)
stroke(255, 0, 0)
arc(width/2, height/2, 275, 275, -90, hr-90)
stroke(0, 255, 0)
arc(width/2, height/2, 300, 300, -90, mn-90)
stroke(0, 0, 255)
arc(width/2, height/2, 325, 325, -90, sc-90)


  drawSprites();
}