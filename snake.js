class Snake {
     constructor(){
          this.x = width / 2;
          this.y = height / 2;
          this.xspeed = 1;
          this.yspeed = 0;
          this.count = 0;
          this.tail = [];
     
     }

     eat(pos) {
          var d = dist(this.x, this.y, pos.x, pos.y);
          if (d < 1) {
               this.tail[this.count] = createVector(this.x, this.y);
               this.count++;
               return true;
          } else
               return false;
     }
     increase() {
          this.count -= 5;
          speed += speed/10;
          for(var i = 0; i < 5; i++)
               this.tail.splice(0,1);
     }

    challenge() {
          if(this.count % 3 === 0) {
               b = 0;
          }
          else if(this.count % 2 === 0)
          {
               b = 255;
          }
     }
     
     dir(x, y) {
          this.xspeed = x;
          this.yspeed = y;
     }

   end() {
          for(var i = 0; i < this.tail.length; i++)
          {
               var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
               if(d < 1)
               {
                    GAMESTATE = END;
                    textSize(40)
                    fill("red");
                    text("You Lost!", 300, 300) 
                    this.xspeed = 0;
                    this.yspeed = 0;
               }
          }
     }

     update() {
          if (this.count == this.tail.length) {
               for (var i = 0; i < this.tail.length - 1; i++) {
                    this.tail[i] = this.tail[i + 1] 
               }
          }
          this.tail[this.count - 1] = createVector(this.x, this.y);

          this.x = this.x + this.xspeed * scl;
          this.y = this.y + this.yspeed * scl;

          this.x = constrain(this.x, 0, width - scl);
          this.y = constrain(this.y, 0, height - scl);
     }

     show() {
          
          /*if(this.tail.length < 7) {*/
          fill(255);
          for (var i = 0; i < this.tail.length; i++) {
               rect(this.tail[i].x, this.tail[i].y, scl, scl);
          //     }
          }
          rect(this.x, this.y, scl, scl);

     }
}