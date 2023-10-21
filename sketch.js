let w1;
let w2;
let w3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // posX = windowHeight / 2;
  // posY = windowWidth / 2;
  w1 = new Walker(200, 200);
  w2 = new Walker(200, 200);
  w3 = new Walker(400, 400);
}

function draw() {
  w1.update();
  w1.display();
  w2.update();
  w2.display();
  w3.update();
  w3.display();

  // update();
  // fill(0);
  // stroke(255, 50);
  // strokeWeight(3);
  // circle(posX, posY, 20);
}

// function update() {
//   posX += random(-1, 2);
//   posY += random(-vel, vel);
// }

// _posX, y Y son una variable externa para uso solo de la class
class Walker {
  constructor(_x, _y) {
    this.posX = _x;
    this.posY = _y;
    this.vel = random(1, 10);
    this.tono = random(0, 200);
    this.color = color(200, random(0, 200), random(0, 200));

    // THIS HACE QUE LAS VARIABLES SEAN ASECIBLES SOLO DENTRO DE LA CLASE
    // varianle para hcer formas
    this.forma = random() > 0.5 ? "true" : "false";
  }
  // el print, me ayuda a monitorear en el navegador si se esta ejecutando
  update() {
    this.posX += random(-this.vel, this.vel);
    this.posY += random(-this.vel, this.vel);
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.posX, this.posY, 10);
    if (this.forma) {
      circle(this.posX, this.posY, 10);
    } else {
      rec(this.posX, this.posY, 10, 10);
    }
  }
}
