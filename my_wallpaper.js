//your parameter variables go here!
let circle_diameter = 50 //50
let squarecornerone = 0 //0
let squarecornertwo = 50 //50



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
  background(200); //blood red colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


noFill ()
strokeWeight (5)
arc(50, 0, 50, 50 ,90, 180); //arc b
arc(50, 50, 50, 50 ,270, 360); //arc a
arc(100, 50, 50, 50 ,90, 180); //arc b
arc(100, 100, 50, 50 ,270, 360); //arc a
arc(150, 100, 50, 50 ,90, 180); // arc b
arc(150, 150, 50, 50 ,270, 360); //arc a
arc(200, 150, 50, 50 ,90, 180); // arc b

arc(175, 175, 50, 50 ,0, 90); // arc c










 stroke (0,20,20,20)

 strokeWeight (1)
line (0,50, 200,50)
line (0,100, 200,100)
line (0,150, 200,150)

line (50,0, 50,200)
line (100,0, 100,200)
line (150,0, 150,200)





//stroke (0,0,0,0)

//square
//fill (255, 140, 0)
//rect(squarecornerone, squarecornerone, squarecornertwo, squarecornertwo,);

//circle
//fill (255, 59, 59)
//circle (squarecornertwo,squarecornertwo, circle_diameter)
//fill (255, 55, 0)
//arc(squarecornertwo, squarecornertwo, circle_diameter, circle_diameter, 180, 270); 
//quad(75, 50, 50, 75, 80, 80, 20, 80);


}