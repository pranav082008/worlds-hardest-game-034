// recalling 

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;


//background animation

var background1 = createSprite(200, 200, 400, 100);
background1.scale = 0.50;
background1.setAnimation("background animation.png_1");

//making walls

boundary1 = createSprite(190,120,420,3);
boundary1.shapeColor = "white";
boundary2 = createSprite(190,260,420,3);
boundary2.shapeColor = "white";
boundary3 = createSprite(370,187,10,143);
boundary3.scale = 0.260;
boundary3.setAnimation("commercial_11_1");

//creating the charecters

sam = createSprite(20,190,13,13);
sam.setAnimation("green_shirt_one_arm_crossed_1");
sam.scale = 0.060;
 
 //creating edge sprites 
 
  createEdgeSprites()
 
// creating car1  and car animation  

car1 = createSprite(100,130,10,10);
car1.scale = 0.100;
car1.setAnimation("cars_1");
  

// creating car2 and car animations

car2 = createSprite(215,130,10,10);
car2.scale = 0.100;
car2.setAnimation("car_black_1");
  
// creating car3 and car animations 
 
  car3 = createSprite(165,250,10,10);
car3.scale = 0.100;
car3.setAnimation("cars_1");
  
 // creating car4 and car animation

car4 = createSprite(270,250,10,10);
car4.scale = 0.100;
car4.setAnimation("car_black_1");
  
  
//car velocity y  
 
  car1.velocityY = 8;
  car2.velocityY = 8;
  car3.velocityY = -8;
  car4.velocityY = -8;

//functions

function draw() {
 background ("white")
  text("Lives: " + life,100,10);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);



//if  sam is touching boundary3 ,in the canvas the text should appear do that this code should be used
 
  if(
   sam.isTouching(boundary3))
   {
   fill("blue");
   textSize(40);
   text("youwon", 200, 30);
   
   }
   
   // making car to bounceoff from the boundries
 
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  sam.bounceOff(boundary3);
 
 //making sam to move with our instruction
  
  if(keyDown("right")){
    sam.x = sam.x + 3;
  }
  if(keyDown("left")){
    sam.x = sam.x - 3;
  }
  
 
 
 
 /// this code is used to make  to increase life when it touches the car.
  
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
 // to display all the function given to the computer
 
 drawSprites();
}
