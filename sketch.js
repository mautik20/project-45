var bomb;
var bowl;
var coin;
var fruit1 ,fruit2 ,fruit3 ,fruit4 ,fruit5;
var bg;
var wall1, wall2, wall3, wall4;
var fruits;
var FoodGroup;

function preload() {
  fruit_1 = loadImage("fruit1.png");
  fruit_2 = loadImage("fruit2.png");
  fruit_3 = loadImage("fruit3.png");
  fruit_4 = loadImage("fruit4.png");
  fruit_5 = loadImage("fruit5.png");
  coin_1 = loadImage("coin.png");
  bomb_1 = loadImage("bomb.png");
  bowl_1 = loadImage("bowl.png");
  bg_image = loadImage("backg.jpg");
  
}
  
function setup(){
    createCanvas(400,400);

    bg = createSprite(200,200,400,420);
    bg.addImage(bg_image);

    bowl = createSprite(200,350,50,50);
    bowl.addImage(bowl_1);
    bowl.scale=0.2;

    wall1 = createSprite(2,200,2,400);
    wall2 = createSprite(398,200,2,400);  
    wall3 = createSprite(200,398,400,4);  
    wall4 = createSprite(200,2,400,4);  
  }

function draw(){

 if(keyDown("right")){
      bowl.x=bowl.x+6}
      
 if(keyDown("left")){
  bowl.x=bowl.x-6}
  
  bowl.collide(wall1);
  bowl.collide(wall2);

  
  
  rand = Math.round(random(1,1));
  if(frameCount%60===0){
      fruit1CreateFrame=frameCount;
      fruit1 = createSprite(random(10,390),1, 10, 10);
      switch(rand){
          case 1: fruit1.addImage(fruit_1);
          break;            
          default: break;
      }
      fruit1.scale =0.2;
      fruit1.velocityY=+4;
  }

  rand = Math.round(random(1,1));
  if(frameCount%80===0){
      fruit2CreateFrame=frameCount;
      fruit2 = createSprite(random(10,390),1, 10, 10);
      switch(rand){
          case 1: fruit2.addImage(fruit_2);
          break;           
          default: break; }
      fruit2.scale = 0.2;
      fruit2.velocityY=+4;
  }

  rand = Math.round(random(1,1));
  if(frameCount%70===0){
      fruit3CreateFrame=frameCount;
      fruit3 = createSprite(random(10,390),1, 10, 10);
      switch(rand){
          case 1: fruit3.addImage(fruit_3);
          break;           
          default: break; }
      fruit3.scale = 0.2;
      fruit3.velocityY=+4;
      }
        rand = Math.round(random(1,1));
  if(frameCount%100===0){
      fruit4CreateFrame=frameCount;
      fruit4 = createSprite(random(10,390),1, 10, 10);
      switch(rand){
          case 1: fruit4.addImage(fruit_4);
          break;           
          default: break; }
      fruit4.scale = 0.1;
      fruit4.velocityY=+4;
      }

  rand = Math.round(random(1,1));
  if(frameCount%90===0){
      fruit5CreateFrame=frameCount;
      fruit5 = createSprite(random(10,390),1, 10, 10);
      switch(rand){
          case 1: fruit5.addImage(fruit_5);
          break;           
          default: break; }
      fruit5.scale = 0.1;
      fruit5.velocityY=+4;
  }

  rand = Math.round(random(1,1));
  if(frameCount%200===0){
      coinCreateFrame=frameCount;
      coin = createSprite(random(10,390),1, 10, 10);
      switch(rand){
          case 1: coin.addImage(coin_1);
          break;           
          default: break; }
          coin.scale = 0.1;
          coin.velocityY=+4;
  }

  rand = Math.round(random(1,1));
  if(frameCount%200===0){
      bombCreateFrame=frameCount;
      bomb = createSprite(random(10,390),1, 10, 10);
      switch(rand){
          case 1: bomb.addImage(bomb_1);
          break;           
          default: break; }
          bomb.scale = 0.1;
          bomb.velocityY=+4;
  }

  
    drawSprites();
  }   
