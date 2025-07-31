//pallet
let colOrange = [227, 72, 30]
let colRed = [207, 0, 0]
let colYellow = [219, 176, 33]
let colPink = [209, 13, 108]
let colPurple = [24, 0, 41]
let colBlue = [0, 17, 46]
let colBlack = [255]

//your parameter variables go here!

//background varibales
let backgroundcolour = colBlue
let showAmbientStars = true

//Trio Star Cluster variables
let StarClusterTrioX = 30
let StarClusterTrioY = 30

//Duo Star Cluster variables
let StarClusterDuoX = 20
let StarClusterDuoY = 180

//Planet variables
let largePlanetColour = colPink
let mediumPlanetColour = colYellow
let smallPlanetColour = colOrange
let planetsizes = 4
let planetsX = 40
let planetsY = 70

//UFO Variables
let ufoX = 100
let ufoY = 120
let ufoScale = 70

//shift constellation
let constellationX = 90

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
  background(backgroundcolour);
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

//bottom middle star cluster Draw
star(StarClusterDuoX+20,StarClusterDuoY,25)
star(StarClusterDuoX,StarClusterDuoY+5,15)

//top left star cluster Draw
star(StarClusterTrioX-10,StarClusterTrioY-10,20)
star(StarClusterTrioX,StarClusterTrioY+10,15)
star(StarClusterTrioX+10,StarClusterTrioY,10)

// Radiating Planet Draw 
planetRadiate (planetsX+100,planetsY+10,planetsizes+2)
  if (planetsizes < 2){
  (planetRadiate (planetsX,planetsY,planetsizes))}

  if (planetsizes < 4){
  planetRadiate (planetsX+20,planetsY+40,planetsizes+1)
  }

// Constellation Draw 
 if (constellationX > 43 && constellationX < 107) {
    constellation(); 
}

ufo(ufoX,ufoY,ufoScale)
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
  stroke(backgroundcolour)
  square (starX-starScale/2,starY-starScale/2,starScale) 

  //Star Indents
  fill(backgroundcolour)
  beginShape() 
  stroke (backgroundcolour)
  strokeWeight (1)
  arc(starX-starScale/2, starY-starScale/2, starScale, starScale, 0, 90);
  arc(starX+starScale/2, starY-starScale/2, starScale, starScale, 90, 180);
  arc(starX+starScale/2, starY+starScale/2, starScale, starScale, 180, 270);
  arc(starX-starScale/2, starY+starScale/2, starScale, starScale, 270, 0);
  endShape(CLOSE);
}

function planetRadiate(planetX,planetY,planetScale) {

  //planet colour deep red if smaller than 3
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
circle (constellationX-20, 30, 5) //a
circle (constellationX+10, 60, 5)//b
circle (constellationX+85, 140, 5)//c
circle (constellationX+50, 180, 5)//d
circle (constellationX,161, 5)//e
circle (constellationX-30, 150, 5)//f

circle (constellationX+90, 200, 5) //small cyan
circle (constellationX+40, 0, 5) //big
circle (constellationX-40, 0, 5) //small pink
//circle (constellationX+10,200,5) //big

stroke (255)
strokeWeight (1)

line (constellationX-40, 0, constellationX-20, 30)
line (constellationX-20, 30, constellationX+40, 0)
line (constellationX+40, 0, constellationX+10, 60)

line (constellationX+90, 200, constellationX+85, 140)

//line (110,200, 150, 180)
line (constellationX+50, 180,constellationX-30, 150)
line (constellationX, 161,constellationX+85, 140)
}

function ufo(ufoX,ufoY,ufoS) {
noStroke()
fill (153, 153, 153) //light grey
beginShape() //top rombus
vertex (ufoX-ufoS/2,ufoY)
vertex (ufoX-ufoS/4,ufoY-ufoS*0.15)
vertex (ufoX+ufoS/4,ufoY-ufoS*0.15) 
vertex (ufoX+ufoS/2,ufoY)

endShape()

fill (99, 99, 99) //dark grey
beginShape() //bottom rombus
vertex (ufoX+ufoS/2,ufoY)
vertex (ufoX+ufoS*0.15,ufoY+ufoS*0.15) 
vertex (ufoX-ufoS*0.15,ufoY+ufoS*0.15)
vertex (ufoX-ufoS/2,ufoY) 

endShape()

//top dome
strokeWeight(ufoS*0.01)
fill (201, 201, 201)
stroke(153, 153, 153)
arc (ufoX,ufoY-ufoS*0.15,ufoS/2,ufoS/3.33,180,0) 

strokeWeight(ufoS*0.02) //arieal
stroke(153, 153, 153)
line(ufoX,ufoY-ufoS*0.3,ufoX,ufoY-ufoS*0.4)

//bottom dome
stroke(99, 99, 99)
arc (ufoX,ufoY+ufoS*0.15,ufoS/3.33,ufoS/10,0,180)

//windows left to right
fill(255, 226, 158)
stroke(255, 210, 84)
circle (ufoX-ufoS*0.12,ufoY-ufoS*0.215,ufoS*0.08)
circle (ufoX,ufoY-ufoS*0.215,ufoS*0.08)
circle (ufoX+ufoS*0.12,ufoY-ufoS*0.215,ufoS*0.08)
noFill()

//window gleen
stroke(255)
arc (ufoX-ufoS*0.12,ufoY-ufoS*0.215,ufoS*0.03,ufoS*0.04,160,270)
arc (ufoX,ufoY-ufoS*0.215,ufoS*0.03,ufoS*0.04,160,270)
arc (ufoX+ufoS*0.12,ufoY-ufoS*0.215,ufoS*0.03,ufoS*0.03,160,270)



}