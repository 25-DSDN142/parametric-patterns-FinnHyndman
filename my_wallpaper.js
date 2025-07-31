//palette
let colOrange = [227, 72, 30]
let colRed = [207, 0, 0]
let colYellow = [219, 176, 33]
let colPink = [209, 13, 108]
let colPurple = [24, 0, 41]
let colBlue = [0, 17, 46]
let colBlack = [0,0,0]

//your parameter variables go here!

//background variables
let backgroundColour = colBlue
let showAmbientStars = true

//Trio star cluster variables
let starClusterTrioX = 30
let starClusterTrioY = 30

//Duo star cluster variables
let starClusterDuoX = 20
let starClusterDuoY = 180

//Planet variables
let largePlanetColour = colPink
let mediumPlanetColour = colYellow
let smallPlanetColour = colOrange
let planetsSize = 1
let planetsX = 40
let planetsY = 70

//UFO variables
let ufoX = 110
let ufoY = 120
let ufoSize = 30

//Shift constellation horizontally
let constellationX = 100

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(backgroundColour);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
//small stars (starX,starY,starScale)
if (showAmbientStars === true){
star(44, 38, 6);
star(58, 42, 6);
star(93, 21, 6);
star(5, 98, 6);
star(66, 77, 6);
star(123, 11, 6);
star(20, 129, 6);
star(42, 127, 6);
star(37, 152, 6);
star(133, 33, 6);
star(130, 73, 6);
star(116, 118, 6);
star(117, 84, 6);
star(189, 64, 6);
star(187, 7, 6);
star(190, 126, 6);
star(91, 180, 6);
star(176, 170, 6); 
star(10, 157, 6);
}

//Duo Star Cluster Draw
star(starClusterDuoX+20,starClusterDuoY,25)
star(starClusterDuoX,starClusterDuoY+5,15)

//Trio Star Cluster Draw
star(starClusterTrioX-10,starClusterTrioY-10,20)
star(starClusterTrioX,starClusterTrioY+10,15)
star(starClusterTrioX+10,starClusterTrioY,10)

// Radiating Planet Draw 
planetRadiate(planetsX+100,planetsY+10,planetsSize+2)
  if (planetsSize < 2){
  planetRadiate(planetsX,planetsY,planetsSize)}

  if (planetsSize < 4){
  planetRadiate(planetsX+20,planetsY+40,planetsSize+1)
  }

// Constellation Draw 
 if (constellationX > 43 && constellationX < 107) {
    constellation(); 
}

//UFO draw
ufo(ufoX,ufoY,ufoSize)
}

function star(starX,starY,starScale) {
//star colour becomes white if smaller than 9. 
  if( starScale > 9){
  fill (255, 238, 194)
  }
  else{
  fill (255)
  }
  
  //Star Inside
  stroke(backgroundColour)
  square (starX-starScale/2,starY-starScale/2,starScale) 

  //Star Indents
  fill(backgroundColour)
  beginShape() 
  stroke (backgroundColour)
  strokeWeight (1)
  arc(starX-starScale/2, starY-starScale/2, starScale, starScale, 0, 90);
  arc(starX+starScale/2, starY-starScale/2, starScale, starScale, 90, 180);
  arc(starX+starScale/2, starY+starScale/2, starScale, starScale, 180, 270);
  arc(starX-starScale/2, starY+starScale/2, starScale, starScale, 270, 0);
  endShape(CLOSE);
}

function planetRadiate(planetX,planetY,planetScale) {
//colour determined based on scale.
  if (planetScale < 2) {
  fill(smallPlanetColour);
} else if (planetScale >= 2 && planetScale < 3) {
  fill(mediumPlanetColour);
} else if (planetScale >= 3) {
  fill(largePlanetColour);
  }

  noStroke ()
  circle (planetX,planetY,planetScale*10) //center planet

  noFill ()
  stroke (255)
  strokeWeight (planetScale/2.5)
  circle (planetX,planetY,planetScale*11) //first ring

  strokeWeight (planetScale/3.33)
  circle (planetX,planetY,planetScale*12.5) //second ring

  strokeWeight (planetScale/5)
  circle (planetX,planetY,planetScale*14) //third ring

  strokeWeight (planetScale/10)
  circle (planetX,planetY,planetScale*15.5) //outside ring
}

function constellation () {

fill (255)
// from far left, top to far right, bottom
circle(constellationX - 40, 0, 5)  //a 
circle(constellationX - 30, 150, 5) //b
circle(constellationX - 20, 30, 5) //c
circle(constellationX, 161, 5) // d
circle(constellationX + 10, 60, 5) //e
circle(constellationX + 40, 0, 5) //f
circle(constellationX + 50, 180, 5) // g
circle(constellationX + 85, 140, 5)// h
circle(constellationX + 90, 200, 5) // i 

stroke (255)
strokeWeight (1)

line (constellationX-40, 0, constellationX-20, 30) //a-c
line (constellationX-20, 30, constellationX+40, 0) //c-f
line (constellationX+40, 0, constellationX+10, 60) //f-e
line (constellationX, 161,constellationX+85, 140) //i - h
line (constellationX+50, 180,constellationX-30, 150) //g-b
line (constellationX+90, 200, constellationX+85, 140) // d-h 

}

function ufo(ufoX,ufoY,ufoScale) {
noStroke()
fill (153, 153, 153) //light grey
beginShape() //Top rombus
vertex (ufoX-ufoScale/2,ufoY)
vertex (ufoX-ufoScale/4,ufoY-ufoScale*0.15)
vertex (ufoX+ufoScale/4,ufoY-ufoScale*0.15) 
vertex (ufoX+ufoScale/2,ufoY)

endShape()

fill (99, 99, 99) //dark grey
beginShape() //Bottom rombus
vertex (ufoX+ufoScale/2,ufoY)
vertex (ufoX+ufoScale*0.15,ufoY+ufoScale*0.15) 
vertex (ufoX-ufoScale*0.15,ufoY+ufoScale*0.15)
vertex (ufoX-ufoScale/2,ufoY) 

endShape()

strokeWeight(ufoScale*0.01)//top dome
fill (201, 201, 201)
stroke(153, 153, 153)
arc (ufoX,ufoY-ufoScale*0.15,ufoScale/2,ufoScale/3.33,180,0) 

strokeWeight(ufoScale*0.02) //arieal
stroke(153, 153, 153)
line(ufoX,ufoY-ufoScale*0.3,ufoX,ufoY-ufoScale*0.4)

stroke(99, 99, 99) //bottom dome
arc (ufoX,ufoY+ufoScale*0.15,ufoScale/3.33,ufoScale/10,0,180)

fill(255, 226, 158) //windows left to right
stroke(255, 210, 84)
circle (ufoX-ufoScale*0.12,ufoY-ufoScale*0.215,ufoScale*0.08)
circle (ufoX,ufoY-ufoScale*0.215,ufoScale*0.08)
circle (ufoX+ufoScale*0.12,ufoY-ufoScale*0.215,ufoScale*0.08)
noFill()

stroke(255) //window gleam left to right
arc (ufoX-ufoScale*0.12,ufoY-ufoScale*0.215,ufoScale*0.03,ufoScale*0.04,160,270)
arc (ufoX,ufoY-ufoScale*0.215,ufoScale*0.03,ufoScale*0.04,160,270)
arc (ufoX+ufoScale*0.12,ufoY-ufoScale*0.215,ufoScale*0.03,ufoScale*0.03,160,270)

}