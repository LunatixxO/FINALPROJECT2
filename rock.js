class Rock {
     constructor(){
          this.x = floor(random(floor(width / scl))) * scl;
          this.y = floor(random(floor(height / scl))) * scl;
     
     }
     
     update() {
          this.x = floor(random(floor(width / scl))) * scl;
          this.y = floor(random(floor(height / scl))) * scl;
          
     }

     /*eaten () {
          this.update();
     }*/
     end() {
          for(var i = 0; i < s.tail.length; i++)
          {
               var d = dist(this.x, this.y, s.tail[i].x, s.tail[i].y);
               if(d < 1)
               {
                    GAMESTATE = END;
                    textSize(40)
                    fill("red");
                    text("You Lost!", 300, 300) 
                    s.xspeed = 0;
                    s.yspeed = 0;
                    // s.tail.length = 1; 
                    
               }
          }
     }
     show () {
          fill(50, 0, 0);
          // rect(this.x, this.y, scl, scl);
          image(rockIMG, this.x, this.y, scl, scl)
     }
     
}