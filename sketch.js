var s;
var f;
var r;
var AppleEat;
var RockEat;
var scl = 25;
var b = 0;
var turned = false;
var speed = 10;
var apple;
var rockIMG;
var food_count = 0;
var rockArray = [];
var score = 0;
var PLAY = 0;
var END = 1;
var GAMESTATE = PLAY;
var RESTART_ICON;
var button;
function preload() {
     apple = loadImage("assets/apple.png");
     rockIMG = loadImage("assets/rock.png");
     AppleEat = loadSound("assets/AppleEat.mp3");
     RockEat = loadSound("assets/RockEat.mp3");
     RESTART_ICON = loadImage("assets/reset.png");
}
function setup() {
     createCanvas(600, 600);
     s = new Snake();
     f = new Food();
     // r = new Rock();
     // r1 = new Rock();
     //frameRate(10);
     
     /* button = createButton("assets/reset.png")
     button.position(100, 100)*/
     button = createSprite(28, 50, 300, 300)
     button.addImage('reset', RESTART_ICON)
     button.scale = 0.1;
}

function draw() {
     background(b);
     textSize(20);
     fill(255, 0, 0);
     text("score: " + score, 6, 20);
     if(GAMESTATE == PLAY) {
          f.show();
          // r.show();
          // keyPressed();
          // r1.show();
          s.update();
          s.show();
          button.visible = false;
          if (s.eat(f)) {
               f.eaten();
               food_count += 1;
               console.log(food_count);
               AppleEat.play();
               score += 5;
//               for(var i = 0; i < food_count; i++) {
               rockArray.push(new Rock());
//               }
          }
/*          if (s.eat(r)) {
               RockEat.play();
               score = 0;
               GAMESTATE = END;
          }
          if (s.eat(r1)) {
               RockEat.play();
               score = 0;
               GAMESTATE = END;
         }*/
          for(var i = 0; i < rockArray.length; i++) {
               rockArray[i].show();
               rockArray[i].end();
               // console.log(rockArray.length);
          }
          s.challenge();
          frameRate(speed + s.count / 3);
          turned = false;
          console.log(GAMESTATE);
     }
     if(GAMESTATE == END) {
/*        r.end();
          r1.end();
          s.end();*/
          button.visible = true;
          textSize(40)
          fill("red");
          text("You Lost!", 300, 300) 
          s.xspeed = 0;
          s.yspeed = 0;
          // s.tail.length = 1; 
           
     }
     drawSprites()
}

function keyPressed() {

     if (keyCode === UP_ARROW && (this.s.yspeed != 1) && (turned === false)) {
          s.dir(0, -1);
          turned = true;
          return;
     }
     if (keyCode === DOWN_ARROW && (this.s.yspeed != -1) && (turned === false)) {
          s.dir(0, 1);
          turned = true;
          return;
     }
     if (keyCode === RIGHT_ARROW && (this.s.xspeed != -1) && (turned === false)) {
          s.dir(1, 0);
          turned = true;
          return;
     }
     if (keyCode === LEFT_ARROW && (this.s.xspeed != 1) && (turned === false)) {
          s.dir(-1, 0);
          turned = true;
     }
     // if(keyCode === 32 && s.count >= 5) //space
     // {
          s.increase();
          //console.log("this will be how i stop the game");
         // alert("hi");
     // }
}