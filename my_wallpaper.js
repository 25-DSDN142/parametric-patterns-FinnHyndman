//your parameter variables go here!

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
 pWallpaper.output_mode(GRID_WALLPAPER);
  
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

//bottom left cluser
star(170,185,25)
//star(155,175,15)

//middle top cluster
star(100,5,15)

//random small stars
//star(18, 27, 6);
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
star(147, 73, 6);
star(116, 118, 6);
star(144, 84, 6);
star(189, 64, 6);
star(187, 7, 6);
star(190, 126, 6);
star(91, 180, 6);
star(176, 170, 6); 
star(10, 157, 6);



//aquarius()


// Radiating Planet (x, y scale)
planetRadiate (160,90,3)

//planetRadiate (150,130,4)

cluster()


}

function Grid () {
stroke (32, 0, 54)
strokeWeight (1)
line (0,50, 200,50)
line (0,100, 200,100)
line (0,150, 200,150)

line (50,0, 50,200)
line (100,0, 100,200)
line (150,0, 150,200)

}

function Eye () { 
//circle numbering order is from the outside in

noStroke(0)
fill (74, 0, 128)
circle (eyeX, eyeY, eyescaleW * 2.6) // 1st circle

fill(255)
circle (eyeX, eyeY, eyescaleW * 2.2) // 2nd circle

fill(232, 199, 255)
circle (eyeX, eyeY, eyescaleW * 1.8) //3rd circle

fill(57, 0, 97)
circle (eyeX, eyeY, eyescaleW * 1.6) //4th circle

fill (74, 0, 128)
circle (eyeX, eyeY, eyescaleW * 1.4) //5th circle

fill (101, 0, 168)
circle (eyeX, eyeY, eyescaleW *1.2) //6th circle

fill(0)
circle (eyeX, eyeY, eyescaleW) //center pupil
}

function eyeOval () {
noStroke(0)
fill (74, 0, 128)
ellipse(eyeX, eyeY, eyescaleW*2.4, eyescaleW/0.8) // 1st circle

fill(255)
ellipse(eyeX, eyeY, eyescaleW*2, eyescaleW/1) // 2nd circle

fill(232, 199, 255)
ellipse(eyeX, eyeY, eyescaleW*1.6, eyescaleW/1.2) //3rd circle

fill(57, 0, 97)
ellipse(eyeX, eyeY, eyescaleW*1.4, eyescaleW/1.4) //4th circle

fill (74, 0, 128)
ellipse(eyeX, eyeY, eyescaleW*1.2, eyescaleW/1.6) //5th circle

fill (101, 0, 168)
ellipse(eyeX, eyeY, eyescaleW, eyescaleW/2); //6th circle

//fill (255)
//ellipse(eyeX, eyeY, eyescaleW*0.8, eyescaleW/2.4); //6th circle

fill(0)
circle (eyeX, eyeY, eyescaleW/2.2) // eye pupil

}

function star(x,y,s) {
  //inside Star
  stroke(24, 0, 41)
  fill (255)
  square (x-s/2,y-s/2,s) 

  //star indents
  fill(24, 0, 41)
  beginShape() 
  stroke (32, 0, 54)
  strokeWeight (1)

  arc(x-s/2, y-s/2, s, s, 0, 90);
  arc(x+s/2, y-s/2, s, s, 90, 180);
  arc(x+s/2, y+s/2, s, s, 180, 270);
  arc(x-s/2, y+s/2, s, s, 270, 0);
  endShape(CLOSE);
}

function planetRadiate(x,y,s) {

  noStroke ()
  fill (227, 72, 30)
  circle (x,y,s*10)

  noFill ()
  stroke (255)
  strokeWeight (s/2.5)
  circle (x,y,s*11)

  strokeWeight (s/3.33)
  circle (x,y,s*12.5)

  strokeWeight (s/5)
  circle (x,y,s*14)

  strokeWeight (s/10)
  circle (x,y,s*15.5)
}

function cluster () {



fill (255)
circle (80, 30, 10) //a
circle (110, 60, 10)//b
circle (185, 140, 10)//c
circle (150, 180, 10)//d
circle (100, 161, 10)//e
circle (70, 150, 10)//f

circle (190, 200, 10) //small cyan
circle (140, 0, 10) //big
circle (60, 0, 10) //small pink
circle (110,200,10) //big




stroke (255)
line (60, 0, 80, 30)
line (80, 30, 140, 0)
line (140, 0, 110, 60)

line (190, 200, 185, 140)

//line (110,200, 150, 180)
line (150, 180,70, 150)
line (100, 161,185, 140)
}