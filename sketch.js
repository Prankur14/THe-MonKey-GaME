var monkey, monkey_running, monkey_eating, monkey_stopped_moving;
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var invisGround;
var score = 0;
var monkeyState = "running";
var gameState = "play";
var bananaState = "normal";
var bananaGroup;
var timer;
var timerState = "inactive";
var obstacle;
var obstaclesGroup;
var score;
var healthBar;
var energyBar;
var energy = 100;
var redAnimation, red_animation;
var redState = "normal";
var health = 100;
var healthState = "normal";
var healthTimer;
var healthTimerState = "inactive";
var redTimerState = "inactive";
var rightEdge;
var num = energy;
var energyTimer;
var energyTimerState = "inactive";
var introState = "notstarted";
var introTimer;
var introTimerState = "inactive";
var lobby;
var lobbyState = "mainlobby";
var start;
var rules;
var startImage;
var rulesImage;
var click, click_sound;
var menu, menu_sound;
var clickTimer;
var menuTimer;
var invisSprite_1, invisSprite_2, invisSprite_3, invisSprite_4, invisSprite_5;
var logo, logoImage;
var rulesText, rulesTextImage;
var back, backImage;
var aTimer;
var introTimer;
var introTimerState = "inactive";
var music, music_music;




function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_7.png", "sprite_8.png");

  monkey_eating = loadAnimation("monkey_eating_1.png", " monkey_eating_2.png", "monkey_eating_3.png");

  monkey_normal = loadAnimation("sprite_0.png");

  red_animation = loadAnimation("paint_1.png", "paint_2.png", "paint_3.png", "paint_4.png", "paint_5.png", "paint_6.png", "paint_7.png");

  logoImage = loadImage("logo.png");
  
  
  music_music = loadSound("music.mp3")
  


  health_0 = loadAnimation("h_0.png");
  health_10 = loadAnimation("h_10.png");
  health_20 = loadAnimation("h_20.png");
  health_30 = loadAnimation("h_30.png");
  health_40 = loadAnimation("h_40.png");
  health_50 = loadAnimation("h_50.png");
  health_60 = loadAnimation("h_60.png");
  health_70 = loadAnimation("h_70.png");
  health_80 = loadAnimation("h_80.png");
  health_90 = loadAnimation("h_90.png");
  health_100 = loadAnimation("h_100.png");


  energy_0 = loadAnimation("e_0.png");
  energy_10 = loadAnimation("e_10.png");
  energy_20 = loadAnimation("e_20.png");
  energy_30 = loadAnimation("e_30.png");
  energy_40 = loadAnimation("e_40.png");
  energy_50 = loadAnimation("e_50.png");
  energy_60 = loadAnimation("e_60.png");
  energy_70 = loadAnimation("e_70.png");
  energy_80 = loadAnimation("e_80.png");
  energy_90 = loadAnimation("e_90.png");
  energy_100 = loadAnimation("e_100.png");


  red_normal = loadAnimation("paint_7.png");

  red_animation = loadAnimation("paint_1.png", "paint_2.png", "paint_3.png", "paint_4.png", "paint_5.png", "paint_6.png", "paint_7.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("rock.png");
  behindImage = loadImage("background.png");

  monkey_stopped_moving = loadAnimation("sprite_0.png");


  lobbyImage = loadImage("intro.png");


  startImage = loadImage("play.png");
  rulesImage = loadImage("Rules.png");


  click_sound = loadSound("click.mp3");
  menu_sound = loadSound("menu.mp3");


  rulesTextImage = loadImage("rules-text.png");

  backImage = loadImage("back.png");
  backSound = loadSound("back.mp3")


}



function setup() {
  createCanvas(1300, 768);

  textSize(14);
  textFont("californian FB");
  text("Health ", 150, 40);

  behind = createSprite(1020, 384);
  behind.addImage(behindImage);
  behind.velocityX = -15;
  behind.visible = false;
  behind.depth = 1000;



  healthTimer = createSprite(90, 768, 5, 5);
  healthTimer.velocityY = 0;
  healthTimer.visible = false;

  redTimer = createSprite(90, 768, 5, 5);
  redTimer.y = 768;
  redTimer.visible = false;

  invisSprite_1 = createSprite(900, 400, 300, 400);
  invisSprite_1.scale = 4.24;
  invisSprite_1.visible = false;


  invisSprite_2 = createSprite(20, 0, 300, 300);
  invisSprite_2.scale = 2.27;
  invisSprite_2.visible = false;

  invisSprite_3 = createSprite(65, 900, 400, 400);
  invisSprite_3.scale = 1.22;
  invisSprite_3.visible = false;

  invisSprite_4 = createSprite(0, 400, 40, 900);
  invisSprite_4.scale = 1.5;
  invisSprite_4.visible = false;

  invisSprite_5 = createSprite(150, 500, 410, 90);
  invisSprite_5.visible = false;

  introTimer = createSprite(0, 500, 10, 10);
  introTimer.visible = false;



  rulesText = createSprite(650, 450);
  rulesText.addImage(rulesTextImage);
  rulesText.scale = 1.3;
  //rulesText.visible = false;
  
  music_music.play();
  music_music.setVolume(0.05);
  //music_music.loop();
  




  lobby = createSprite(650, 384);
  lobby.addImage(lobbyImage);
  lobby.visible = false;
  lobby.scale = 1.2;


  clickTimer = createSprite(0, 50, 10, 10);

  menuTimer = createSprite(0, 40, 10, 10);




  invisGround = createSprite(10, 750, 1300, 50);
  invisGround.visible = false;


  rightEdge = createSprite(5, 300, 10, 50000);
  rightEdge.visible = false;


  monkey = createSprite(100, 600);
  monkey.addAnimation("running", monkey_running);
  monkey.addAnimation("eating", monkey_eating);
  monkey.addAnimation("normal", monkey_normal);
  monkey.scale = 0.3;
  monkey.velocityY = 15;
  monkey.frameDelay = 1.75;
  //monkey.debug = true;
  //monkey.visible = false;




  healthBar = createSprite(150, 40, 300, 50);
  healthBar.addAnimation("100", health_100);
  healthBar.addAnimation("90", health_90);
  healthBar.addAnimation("80", health_80);
  healthBar.addAnimation("70", health_70);
  healthBar.addAnimation("60", health_60);
  healthBar.addAnimation("50", health_50);
  healthBar.addAnimation("40", health_40);
  healthBar.addAnimation("30", health_30);
  healthBar.addAnimation("20", health_20);
  healthBar.addAnimation("10", health_10);
  healthBar.addAnimation("0", health_0);







  energyBar = createSprite(150, 110, 300, 50);
  energyBar.addAnimation("100", energy_100);
  energyBar.addAnimation("90", energy_90);
  energyBar.addAnimation("80", energy_80);
  energyBar.addAnimation("70", energy_70);
  energyBar.addAnimation("60", energy_60);
  energyBar.addAnimation("50", energy_50);
  energyBar.addAnimation("40", energy_40);
  energyBar.addAnimation("30", energy_30);
  energyBar.addAnimation("20", energy_20);
  energyBar.addAnimation("10", energy_10);
  energyBar.addAnimation("0", energy_0);



  timer = createSprite(200, 768, 5, 5);
  timer.visible = false;

  energyTimer = createSprite(30, 768, 5, 5);
  energyTimer.visible = false;
  energyTimer.velocityY = -3;



  start = createSprite(150, 400);
  start.addImage(startImage);
  start.scale = 0.6;
  //start.debug = true
  start.visible = false;

  rules = createSprite(150, 600);
  rules.addImage(rulesImage);
  rules.scale = 0.6
  //rules.debug = true;
  rules.visible = false;



  bananaGroup = createGroup();
  obstaclesGroup = createGroup();

  redAnimation = createSprite(650, 384);
  redAnimation.addAnimation("normal", red_normal)
  redAnimation.addAnimation("red", red_animation);
  redAnimation.visible = false;


  logo = createSprite(800, 300);
  logo.addImage(logoImage);
  logo.visible = false;


  back = createSprite(1150, 70);
  back.addImage(backImage);
  back.scale = 0.6;
  back.visible = true;
  back.depth = 1000;

  aTimer = createSprite(0, 90, 10, 10);
  aTimer.visibe = false;



}


function draw() {

  //background("white")

  introTimer.velocityX = 0;
  //monkey.scale = 0.3;

  rules.visible = false;
  start.vissible = false;
  //back.visible = true;
  lobby.visible = false;
  logo.visible = false;
  
 // rulesText.visible = true;

  clickTimer.x = 0;


  if (introState === "end") {
    monkey.x = 100;
    //rulesText.visible = false;
  }



  if (lobbyState === "text") {
    start.x = 90000;
    start.visible = false;
    rules.visible = false;
    rules.x = 90000;
    rulesText.visible = true;
    rulesText.depth = 100;
    logo.visible = false;
    back.x = 1150;
    lobby.visible = true;
    invisSprite_1.x = 400;
    invisSprite_2.x = 1000;
    invisSprite_2.y = 468.5;
    back.visible = true;
    back.depth = 100
    healthBar.visible = false;
    energyBar.visible = false;
    behind.visible = false;

  }

  if (lobbyState === "text" && (mouseIsOver(invisSprite_1) || mouseIsOver(invisSprite_2) || mouseIsOver(invisSprite_3) || mouseIsOver(invisSprite_4) || mouseIsOver(invisSprite_5))) {
    aTimer.x = 0;
  }

  if (mousePressedOver(back) && lobbyState === "text") {
    lobbyState = "mainlobby";
    start.x = 150;
    start.y = 400;

    rules.x = 150;
    rules.y = 600;

    invisSprite_1.x = 900;
    invisSprite_1.y = 200;
    invisSprite_2.x = 20;
    invisSprite_2.y = 0;
  }
  if (mouseIsOver(back) && aTimer.x === 0) {
    menu_sound.play();
    aTimer.x = 1;
  }


  if (lobbyState === "ended") {
    lobby.visible = false;
    start.visible = false;
    back.visible = true;
    behind.visible = true;
    rules.visible = false;
    rulesText.visible =false;
  }


  if (lobbyState === "mainlobby") {
    // monkey.changeAnimation("normal", monkey_normal);
    monkey.visible = false;

    start.visible = true;
    rules.visible = true;
    logo.visible = true;
    //back.visible = true;
    //rulesText.visible = false;
    lobby.visible = true;
    aTimer.x = 0;
    healthBar.visible = false;
    energyBar.visible = false;
    behind.visible = false;





    if (mousePressedOver(rules) && clickTimer.x === 0) {
      click_sound.play();
      clickTimer.x = clickTimer.x + 1;

      lobbyState = "text";
    }
    if (mousePressedOver(start) && clickTimer.x === 0) {
      click_sound.play();
      clickTimer.x = 1;
      introState = "end";
      lobbyState = "ended";

    }

    if (mouseIsOver(rules) && menuTimer.x === 0) {
      menu_sound.play();
      menuTimer.x = 1;
      
    }
    if (lobbyState === "text") {
      if (mouseIsOver(back) && menuTimer.x === 0) {
        menu_sound.play();
        menuTimer.x = 1;
      }
    }

    if (mouseIsOver(start) && menuTimer.x === 0) {
      menu_sound.play();
      menuTimer.x = 1;
    }

    if (mousePressedOver(back)) {
      backSound.play();
      lobbyState = "mainlobby";
      //introState = "start"
    }


    if (mouseIsOver(invisSprite_1) || mouseIsOver(invisSprite_2) || mouseIsOver(invisSprite_3) || mouseIsOver(invisSprite_4) || mouseIsOver(invisSprite_5)) {
      menuTimer.x = 0;
    }





  }
  if (introTimerState === "active") {
    introTimer.velocityX = 1;
  }

  behind.visible = true;

  if (lobbyState === "ended") {
    if (introState === "start") {
      introTimerState = "active";
    }

    if (frameCount % 0.001 === 0 && monkey.scale != 0.3) {
      introTimer.x = introTimer.x + 0.0000001;
    }
    monkey.x = 700;
    monkey.scale = 1.1;
    behind.scale = 3;
    behind.y = -400;
   // monkey.changeAnimation("running", monkey_running)
    healthBar.visible = true;
    energyBar.visible = true;
    monkey.visible = true;
    //lobby.visible = false;
    //logo.visible = false;
    behind.visible = true;
    behind.velocityX = -15





    if (introTimer.x > 1 && introTimer.x < 3 && monkey.scale != 0.3) {
      monkey.scale = monkey.scale - 0.1

    }






  }


  if (gameState === "play") {
    if (introState === "end") {
      if (behind.x < 55) {
        behind.x = behind.width / 2;
      }
    }
    monkey.velocityY = monkey.velocityY + 10;
    monkey.scale = 0.3;
    behind.scale = 1;
    behind.y = 384;
    //behind.x = 1020;
    monkey.x = 100
    back.x = 1450;
    

    behind.velocityX = -(score / 100 * 3 + 15);
    score = score + Math.round(getFrameRate() / 60);

    if (keyDown("space") && monkey.y >= 630) {
      monkey.velocityY = -90;

      monkeyState = "stopped"

    }
    if (energyTimer.y < 0) {
      energyTimer.y = 768;
    }




    monkey.velocityX = 0;



    if (introState === "end") {
      createBanana();
    }

    if (bananaGroup.isTouching(monkey) && timerState === "inactive") {
      monkey.changeAnimation("eating", monkey_eating);
      timerState = "active";
      energy = energy + 5;
      timer.velocityY = -30;


    }
    if (timer.y < 0) {
      timer.velocityY = 0;
      timerState = "inactive";
      timer.y = 768;
      monkey.changeAnimation("running", monkey_running);
    }

    if (introState === "end") {
      createObstacle();
    }
    obstaclesGroup.velocityX = behind.velocityX;
    obstaclesGroup.y = 675;

    if(energy >70 && frameCount%0.001 === 0){
      health = health+10;
    }
    


    //energy part (also the most annoying part xD)




    num = energy;
    if (introState === "end") {
      if (frameCount % 30 === 0) {
        energy = energy - 2;

      }
    }
    switch (num) {
      case 100:
        energyBar.changeAnimation("100", energy_100);
        break;
      case 90:
        energyBar.changeAnimation("90", energy_90);
        break;
      case 80:
        energyBar.changeAnimation("80", energy_80);
        break;
      case 70:
        energyBar.changeAnimation("70", energy_70);
        break;
      case 60:
        energyBar.changeAnimation("60", energy_60);
        break;
      case 50:
        energyBar.changeAnimation("50", energy_50);
        break;
      case 40:
        energyBar.changeAnimation("40", energy_40);
        break;
      case 30:
        energyBar.changeAnimation("30", energy_30);
        break;
      case 20:
        energyBar.changeAnimation("20", energy_20);
        break;
      case 10:
        energyBar.changeAnimation("10", energy_10);
        break;
      case 0:
        energyBar.changeAnimation("0", energy_0);
        break;
    }




    if (obstaclesGroup.isTouching(monkey)) {


      if (healthTimer.y > 0 && healthState === "notnormal" && healthTimerState === "inactive") {

        healthTimerState = "active";
      }
      if (healthTimerState === "active") {


        healthTimer.velocityY = -30;

      }
      if (healthTimer.y < 0) {
        healthTimer.y = 768;
        healthTimer.velocityY = 0;
        healthTimerState = "inactive";
        healthState = "normal";
      }

      if (health === 100 && behind.velocityX < -25 && healthState === "normal") {
        healthBar.changeAnimation("90", health_90);
        healthState = "notnormal";
        health = health - 10;

      }
      if (health === 90 && behind.velocityX < -25 && healthState === "normal") {
        healthBar.changeAnimation("80", health_80);
        healthState = "notnormal";
        health = 80;
      }
      if (health === 80 && behind.velocityX < -25 && healthState === "normal") {
        healthBar.changeAnimation("70", health_70);
        healthState = "notnormal";
        health = health - 10;
      }
      if (health === 70 && behind.velocityX < -25 && healthState === "normal") {
        healthBar.changeAnimation("60", health_60);
        healthState = "notnormal";
        health = health - 10;
      }
      if (health === 60 && behind.velocityX < -25 && healthState === "normal") {
        healthBar.changeAnimation("50", health_50);
        healthState = "notnormal";
        health = health - 10;
      }
      if (health === 50 && behind.velocityX < -25 && healthState === "normal") {
        healthBar.changeAnimation("40", health_40);
        healthState = "notnormal";
        health = health - 10;
      }
      if (health === 40 && behind.velocityX < -25 && healthState === "normal") {
        healthBar.changeAnimation("30", health_30);
        healthState = "notnormal";
        health = health - 10;
      }
      if (health === 30 && behind.velocityX < -25 && healthState === "normal") {
        healthBar.changeAnimation("20", health_20);
        healthState = "notnormal";
        health = health - 10;
      }
      if (health === 20 && behind.velocityX < -25 && healthState === "normal") {
        healthBar.changeAnimation("10", health_10);
        healthState = "notnormal";
        health = health - 10;
      }
      if (health === 10 && behind.velocityX < -25 && healthState === "normal") {
        healthBar.changeAnimation("0", health_0);
        healthState = "notnormal";
        health = health - 10;
      }


      if (behind.velocityX < -25 && redTimer.y > 0 && obstaclesGroup.isTouching(monkey)) {
        redAnimation.changeAnimation("red", red_animation);
        redTimer.velocityY = -30;
        redTimerState = "active";
        redAnimation.visible = true;
        if (behind.velocityX <= -40) {
          behind.velocityX = -15;
          score = 0;
        }




      }



    }


    if (redTimer.y <= 0 && redTimerState === "active") {


      redAnimation.visible = false;
      redTimer.velocityY = 0;
      redTimer.y = 768;
      redTimerState = "inactive";




    }
   if(introState === "end"){ if (health < 30) {
      redAnimation.visible = true;
    }}



    if (monkey.y < 610) {
      monkey.collide(obstaclesGroup);
    }









  }

  
  
  if(health === 0){
    lobbyState = "mainlobby";
    introState = "notstarted"
  }



  monkey.collide(rightEdge);
  console.log(introState);
  // console.log(energyTimer.y);
  monkey.collide(invisGround);
  monkey.debug = false;

  drawSprites();

}

function createBanana() {

  if (frameCount % 80 === 0) {
    banana = createSprite(1400, Math.round(random(200, 600)), 5, 5);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -25;
    banana.lifetime = 90;
    banana.setCollider("circle", 0, 0, 500)
    banana.debug = false;
    bananaGroup.add(banana);

  }



}



function createObstacle() {
  if (frameCount % 110 === 0) {
    obstacle = createSprite(1400, 650);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = behind.velocityX;
    obstacle.lifetime = 100;
    obstaclesGroup.add(obstacle);
    obstacle.debug = true;
    obstacle.setCollider("circle", 0, 0, 400);

  }






}




function monkeyReset() {
  monkey.x = 100;
  health = health - 40;
}