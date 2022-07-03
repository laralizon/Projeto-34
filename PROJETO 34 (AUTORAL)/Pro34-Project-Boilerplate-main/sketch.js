const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Constraint = Matter.Constraint
const Composite = Matter.Composite

var predioImg, tratorImg, bolaImg
var bola, corda
var bola_con

let engine;
let world;

function preload() {
  tratorImg = loadImage("trator.png")
  bolaImg = loadImage("cannonball.jpg")


}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  corda = new Corda(7, {x:200, y: 300})
  bola = Bodies.circle(300,300,20);
  Matter.Composite.add(corda.body,bola);
  botao = createImg('botao.jpg')
  botao.position(220, 30)
  botao.size(50,50)
  botao.mouseClicked(romper)

  bola_con = new Link(corda,bola);

  predio = createSprite(300,150)
  predio.createImg("predio.png")

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  image(bolaImg,bola.position.x,bola.position.y,70,70);
  rope.show();

  drawSprites()
}

