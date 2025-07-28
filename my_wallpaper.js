//your parameter variables go here!

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
  background(24, 0, 41);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//Grid()
// star (x, y scale)
//top left cluser
star(20,20,20)
star(40,30,10)
star(30,40,15)

//bottom middle cluser
star(60,185,25)
star(40,190,15)

//top right cluster
star(170,10,15)

//random small stars
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

// Radiating Planet (planetX, planetY, planetScale)
planetRadiate (160,90,3)
planetRadiate (60,110,2)
planetRadiate (40,80,1)

//planetRadiate (150,130,4)

cluster()


}

function star(starX,starY,starScale) {

  if( starScale > 9){
  fill (255, 238, 194)
  }
  else{
  fill (255)
  }
  
  //inside Star
  stroke(24, 0, 41)
  square (starX-starScale/2,starY-starScale/2,starScale) 

  //star indents
  fill(24, 0, 41)
  beginShape() 
  stroke (32, 0, 54)
  strokeWeight (1)
  arc(starX-starScale/2, starY-starScale/2, starScale, starScale, 0, 90);
  arc(starX+starScale/2, starY-starScale/2, starScale, starScale, 90, 180);
  arc(starX+starScale/2, starY+starScale/2, starScale, starScale, 180, 270);
  arc(starX-starScale/2, starY+starScale/2, starScale, starScale, 270, 0);
  endShape(CLOSE);
}

function planetRadiate(planetX,planetY,planetScale) {

  if( planetScale < 3){
  fill (207, 0, 0)
  }
  else{
  fill (227, 72, 30)
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

function cluster () {



fill (255)
circle (80, 30, 5) //a
circle (110, 60, 5)//b
circle (185, 140, 5)//c
circle (150, 180, 5)//d
circle (100, 161, 5)//e
circle (70, 150, 5)//f

circle (190, 200, 5) //small cyan
circle (140, 0, 5) //big
circle (60, 0, 5) //small pink
circle (110,200,5) //big




stroke (255)
line (60, 0, 80, 30)
line (80, 30, 140, 0)
line (140, 0, 110, 60)

line (190, 200, 185, 140)

//line (110,200, 150, 180)
line (150, 180,70, 150)
line (100, 161,185, 140)
}