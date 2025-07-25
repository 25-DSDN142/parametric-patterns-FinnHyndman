//your parameter variables go here!

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(24, 0, 41); //blood red colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//Grid()
// star (x, y scale)
star(20,20,20)
star(40,30,10)
star(35,10,15)




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


