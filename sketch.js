var hasDocked=false
function preload(){
  bg=loadImage("spacebg.jpg")
  issImage=loadImage("iss.png")
  scImage1=loadImage("spacecraft1.png")
  scImage2=loadImage("spacecraft2.png")
  scImage3=loadImage("spacecraft3.png")
  scImage4=loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285,240)
  spacecraft.addImage(scImage1)
  spacecraft.scale=0.15

  iss=createSprite(330,130)
  iss.addImage(issImage)
  iss.scale=0.25
}

function draw() {
  background(bg);  
  spacecraft.addImage(scImage1)
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)

    if(keyDown("UP_ARROW")){
      spacecraft.y=spacecraft.y-2
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spaceImage1)
      spacecraft.x=spacecraft.x-1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scImage2)
      spacecraft.x=spacecraft.x+1
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scImage1)
    }
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked=true
    textSize(25)
    fill ("blue")
    text("Docking Sucessful",200,300)
  }
  drawSprites();
}