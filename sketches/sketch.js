export default (w, h) => (p) => {

  class FlowField {


    constructor(r){
      this.resolution = r;
      this.col = p.width / this.resolution;
      this.row = p.width / this.resolution;
      this.field = null;
      this.generateVectors();
    }

    generateVectors(){
      this.field = [];

      while(this.field.length > 0) { //make new field
        this.field.pop();
      }
      p.noiseSeed(Math.floor(p.random(50)));
      let xOff = 0;
      for (let j = 0; j < this.col; j++) {
        let yOff = 0;
        let column = [];
        for (let k = 0; k < this.row; k++) {
          let theta = p.map(p.noise(xOff, yOff), 0, 1, 0, p.TWO_PI);
          let vector;
          vector = p.createVector(p.cos(theta), p.sin(theta));
          column.push(vector);
          yOff += 0.1;
        }
        this.field.push(column);
        xOff += 0.1;
      }
    }

    //draws line pointing to direction of vector
    drawVector(v, x, y, scale) {
      p.push();
      p.translate(x, y);
      p.stroke('#f2f2f2');
      p.fill('#f2f2f2');
      p.strokeWeight(1);
      p.rotate(v.heading());
      let len = v.mag() * scale;
      p.rect(0, 0, len, 1);
      p.pop();
    }

    display(){ // sourced from lectures
      for (let i = 0; i < this.col; i++) {
        for (let j = 0; j < this.row; j++) {
          this.drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 50);
          // pass grid variables to the draw according to the resolution
        }
      }
    }

    lookup(lookup) { // find mag from locations of surface vehicles according to 2d array value
      var column = Math.floor(p.constrain(lookup.x / this.resolution, 0, this.col - 1));
      var row = Math.floor(p.constrain(lookup.y / this.resolution, 0, this.row - 1));
      return this.field[column][row].copy();
    }
  }



  // function Vehicle(x,y,m){
  //   //setting up physics
  //   this.pos = p.createVector(x,y);
  //   this.acc = p.createVector(0,0);
  //   this.vel = p.createVector(0,0);
  //   this.r = 6;               //used for drawing
  //   this.mass = p.random(1,3);  //used for speed * attraction
  //   this.isAlone = false;     //used for measuring if lonely :(
  //
  //   this.setSpeeds = function(){
  //     this.maxspeed = this.mass * 1.5;    //top limit
  //     this.maxforce = this.maxspeed / 5;  //seeting ability
  //   };
  //
  //   this.setSpeeds();
  //
  //   this.changeColor = function(sad){
  //     if (sad == true) {
  //       if (this.isAlone == false){ // first time changing to true
  //         this.isAlone = true;
  //         this.mass = p.random(3,10); // if lonely increase mass which makes faster and steering more rapid ..agitate
  //         this.setSpeeds();
  //       }
  //       this.cl = p.color(245,228,23, 100);
  //     } else {
  //       if (this.isAlone == true){  // first time changing to true
  //         this.isAlone = false;
  //         this.mass = p.random(1,3);  // lower mass and lower max speed and lower turning... calm
  //         this.setSpeeds();
  //       }
  //       this.cl = p.color(100, 30);
  //     }
  //   }
  //   this.changeColor(false);
  //
  //   this.applyForce = function(force){ //basic apply force with mass
  //     var f = force.copy();
  //     f.div(this.mass);
  //     this.acc.add(f);
  //   }
  //
  //   this.flow = function(target){
  //     var desired = target.lookup(this.pos);
  //     desired.setMag(this.maxspeed);
  //     // var steering = p5.Vector.sub(desired, this.vel); //craig reynolds famous formula
  //     var steering = p.p5.Vector.sub(desired, this.vel); //craig reynolds famous formula
  //
  //
  //     steering.limit(this.maxforce);
  //     this.applyForce(steering);
  //   }
  //
  //
  //   this.separate = function(vehicles) {
  //     var desiredseparation = 30; // view area is 30 px
  //     var sum = p.createVector();
  //     var count = 0;
  //     var alone = true; //assume default is alone
  //     for (var i = 0; i < vehicles.length; i++) {
  //       var d = p5.Vector.dist(this.pos, vehicles[i].pos);
  //       if ((d > 0) && (d < desiredseparation)) { //if anyone is within range
  //         var diff = p5.Vector.sub(this.pos, vehicles[i].pos); //get the difference between self and others
  //         diff.normalize();   //set mag to 1
  //         diff.div(d);        // divide by total sum to get average of all in range
  //         sum.add(diff);      //add the vector to summ
  //         count++;            //increment total vectors that rae in view area
  //       }
  //       if ((d > 0) && (d < desiredseparation*3)) { //if any are in 3 times view area set alone to false
  //         alone = false;
  //       }
  //     }
  //     if (count > 0) {            // calculate average if any are present
  //       sum.div(count);           // get average
  //       sum.normalize();          // set mag to 1
  //       sum.mult(this.maxspeed*2);// how quickly do they move away from the neighbor
  //
  //       sum.sub(this.velocity);  // setting up craig reynolds famous formula
  //       sum.limit(this.maxforce);
  //       this.changeColor(false); //make sure is calm
  //     }
  //     if (alone == true) this.changeColor(true); //if alone agitate
  //     this.applyForce(sum.mult(2)); //apply force
  //   }
  //
  //   this.update = function(){ //update physics
  //     this.vel.add(this.acc);
  //     this.vel.limit(this.maxspeed);
  //     this.pos.add(this.vel);
  //     this.acc.set(0,0);
  //     this.borders();
  //   }
  //
  //   this.borders = function() { //proper borders
  //     if (this.pos.x < -this.r) this.pos.x = width+this.r;
  //     if (this.pos.y < -this.r) this.pos.y = height+this.r;
  //     if (this.pos.x > width+this.r) this.pos.x = -this.r;
  //     if (this.pos.y > height+this.r) this.pos.y = -this.r;
  //   }
  //
  //   this.display = function(){ //display arrows
  //     var theta = this.vel.heading() + PI / 2;
  //     push();
  //     fill(this.cl);
  //     stroke(this.cl);
  //     strokeWeight(1);
  //     translate(this.pos.x, this.pos.y);
  //     rect(-this.r,-this.r,this.r * 2, this.r * 2);
  //     pop();
  //   }
  // }




  let vehicles = [];
  let flowfield;
  let LIMIT = 0;
  let showBar = false;
  let cnv;

  // function centerCanvas() {
  //   cnv = p.createCanvas(windowWidth, windowHeight);
  //   var x = (windowWidth - width) / 2;
  //   var y = (windowHeight - height) / 2;
  //   if (windowWidth > 450) {
  //     LIMIT = 15;
  //   } else {
  //     LIMIT = 8;
  //   }
  //   cnv.position(x, y);
  //   return cnv;
  // }

  // function p.windowResized() {
  //   centerCanvas();
  // }

  p.setup = () =>{
    cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    // centerCanvas();
    flowfield = new FlowField(40);
    // flowfield.init();
    for (let i = 0; i < LIMIT; i++) {
      // vehicles.push(new Vehicle(random(width), random(height)));
    }
  }

  p.draw = () => {
    p.clear();
    // p.fill(253, 240, 231, 125);
    // p.fill(255, 255, 255);
    // p.rect(0, 0, p.width, p.height);
    // if (showBar == true){
      flowfield.display();
    // }
    // for (var i = 0; i < LIMIT; i++) {
    //   // vehicle = vehicles[i];
    //   // vehicle.flow(flowfield);
    //   // vehicle.separate(vehicles);
    //   // vehicle.update();
    //   // vehicle.display();
    // }
    if (p.frameCount % 200 === 1) {
      // flowfield.generateVectors();
    }
  }

}