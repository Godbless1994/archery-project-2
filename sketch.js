const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, PlayerBase, playerArcher;
var computer, computerBase;
var playerArrow, computerArrow;
var arrow;
var baseImg1, baseImg2;
var computerArcherImg, playerArcherImg;
var arrowImg, playerImg;

function preload(){
  arrowImg = loadImage("assets/arrow.png");
  baseImg1 = loadImage("assets/base1.png");
  baseImg2 = loadImage("assets/base2.png");
  playerImg = loadImage("assets/player.png");
  computerArcherImg = loadImage("assets/computerArcher.png");
  playerArcherImg = loadImage("assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  
  
  
  PlayerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new player(285, PlayerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
   playerArcher = new PlayerArcher(400,500,height-300, 200, 170);
  
   computerBase = new computerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  playerArcher.display();

  computerBase.display();
  computer.display();

  

  //Display arrow();
  playerArrow.display()
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    if(move ==="UP" && computerArcher.body.angle<1.77){
      angleValue= 0.1
  }else{
      angleValue= -0.1
  }
  if(move === "DOWN" && computerArcher.body.angle > 1.47){
     angleValue = -0.1;
  }else{
      angleValue= 0.1;
  }
    
  }
}


