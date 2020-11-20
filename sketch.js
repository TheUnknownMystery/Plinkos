const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var world, engine;

var ground, ball1, ball2, ball3, ball4, ball5, ball16

var particles;

var line1, count = 0;

var gameState= "play"
//creating Arrays{for plinkos and divisons and particles}

var Plinkos = [];
var PlinkosSize = 300;
var divisons = [];

var divisonHeight = 300;

function setup() {
  createCanvas(580, 800);
  //nameSpacingEngine.....

  engine = Engine.create();
  world = engine.world;

  //BottomGroundObject
  groundBottom = new Ground(230, 800, 670, 20);

  ball1 = new particle(200, 20, 10, 10);

  ball2 = new particle(230, 20, 10, 10);

  ball3 = new particle(250, 20, 10, 10);

  ball4 = new particle(270, 20, 10, 10);

  ball5 = new particle(290, 20, 10, 10);

  ball6 = new particle(300, 20, 10, 10);

  ball7 = new particle(300, 20, 10, 10);

  ball8 = new particle(200, 20, 10, 10);

  ball9 = new particle(230, 20, 10, 10);

  ball10 = new particle(250, 20, 10, 10);

  ball11 = new particle(270, 20, 10, 10);

  ball12 = new particle(290, 20, 10, 10);

  ball13 = new particle(300, 20, 10, 10);

  ball14 = new particle(300, 20, 10, 10);

  d1 = new Divideline(280, 480, 592, 10);
  Engine.run(engine);
}

function draw() {
  background(0);
  text(" score: " + count, 100, 100);
  for (var k = 0; k <= width; k = k + 80) {

    divisons.push(new Divisons(k, height - divisonHeight / 2, 10, divisonHeight))

  };

  for (var k = 0; k < divisons.length; k++) {

    divisons[k].display();

  }

  for (j = 40; j <= width; j = j + 40) {

    Plinkos.push(new plinko(j, 75, 16, 16))
  }

  for (j = 40; j < Plinkos.length; j = j + 50) {

    Plinkos[j].display();

  }

  for (var j = 15; j <= width - 10; j = j + 30) {


    Plinkos.push(new plinko(j, 175, 16, 16))

  }

  for (var j = 15; j <= width - 10; j = j + 30) {


    Plinkos.push(new plinko(j, 275, 16, 16))

  }

  groundBottom.display()
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();

  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();
  ball13.display();
  ball14.display();
  
  d1.display();

  mousePressed()
  
}



function mousePressed() {

  if (gameState !== "end") {

    count++;
    Particles = new particle(mouseX, 10, 10, 10);

  }

  if (Particles != null) {

    Particles.display();

    if (Particles.body.position.y > 760) {

      if (Particles.body.position.x < 300) {

        score = score + 500;
        Particle = null
        if (count >= 5) gameState = "end";


      }



    }


  }
}