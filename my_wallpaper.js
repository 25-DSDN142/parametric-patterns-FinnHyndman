//your parameter variables go here!
let eyescaleW = 40

let eyeX = 100
let eyeY = 100

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

Grid()

//Eye () //circle protoype eye 

Star()


//rotate (340)
eyeOval (100,100) //oval eye
eyeOval (150, 150)

fill (255)
circle (0,0,50)
circle (150,200,50)



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

function Star (){

stroke(180, 125, 0) 
line (50,75, 50,125)
line (25,100, 75,100)
line (37.5,87.5, 62.5,112.5)



}
