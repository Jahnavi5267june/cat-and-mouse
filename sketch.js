 var bgimg;
 var cat,mouse;
 var catimg1,catimg2,catimg3,mouseimg1,mouseimg2,mouseimg3; 



function preload() {
    //load the images here
    bgimg=loadImage("images/garden.png");
    catimg1=loadAnimation("images/cat1.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    catimg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg3=loadAnimation("images/cat4.png");
    mouseimg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addImage(catimg1);
    cat.scale=0.2;
    
    mouse=createSprite(200,600);
    mouse.addImage(mouseimg1); 
    mouse.scale=0.15;
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < (cat.width-mouse.width)/2) {
        cat.velocityX=0;
        cat.addAnimation("cat 4th img",catimg3);
        cat.changeAnimation("cat 4th img");
        cat.x=300;
        cat.scale=0.2;

        mouse.addAnimation("mouse 4th img",mouseimg3);
        mouse.changeAnimation("mouse 4th img");
        mouse.scale=0.15;


    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   
  if (keyCode===LEFT_ARROW) {
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catimg2);
      cat.changeAnimation(catimg2);

      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation(mouseimg2);
      mouse.frameDelay=25;
  }

}
