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
      p.strokeWeight(1);
      let distance = p.int(p.dist(p.mouseX, p.mouseY, x, y));
      if (distance < 80){
        p.stroke('#e0e0e0');
        p.fill('#e0e0e0');
      } else {
        p.stroke('#ededed');
        p.fill('#ededed');
      }

      var angle = p.atan2(p.mouseY - y, p.mouseX - x) + (p.PI / 180);
      p.rotate(angle);
      let len = v.mag() * scale;
      p.rect(0, 0, len, 1);
      p.pop();
    }

    display(){ // sourced from lectures
      for (let i = 0; i < this.col; i++) {
        for (let j = 0; j < this.row; j++) {
          this.drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 50);
        }
      }
    }

    lookup(lookup) { // find mag from locations of surface vehicles according to 2d array value
      var column = Math.floor(p.constrain(lookup.x / this.resolution, 0, this.col - 1));
      var row = Math.floor(p.constrain(lookup.y / this.resolution, 0, this.row - 1));
      return this.field[column][row].copy();
    }
  }

  let flowfield;
  let LIMIT = 0;
  let cnv;

  p.setup = () =>{
    cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    flowfield = new FlowField(40);
    for (let i = 0; i < LIMIT; i++) {
    }
  };

  p.draw = () => {
    p.clear();
    const mouseVector = p.createVector(p.mouseX, p.mouseY);
    flowfield.display();
  };

}