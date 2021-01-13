const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    Hex = loadImage("polygon.png")
    
}

function setup() {
    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;

    surface = new Ground(900,350,600,15)
    platty = new Ground(100,200,50,10)

        box1  = new Box (900,250,20,50)
        box2  = new Box (921,250,20,50)
        box3  = new Box (942,250,20,50)
        box4  = new Box (963,250,20,50)
        box5  = new Box (879,250,20,50)
        box6  = new Box (858,250,20,50)
        box7  = new Box (837,250,20,50)
        box8  = new Box (900,200,20,50)
        box9  = new Box (921,200,20,50)
        box10  = new Box (942,200,20,50)
        box11  = new Box (963,200,20,50)
        box12  = new Box (879,200,20,50)
        box13  = new Box (858,200,20,50)
        box14  = new Box (900,150,20,50)
        box15  = new Box (921,150,20,50)
        box16  = new Box (942,150,20,50)
        box17  = new Box (963,150,20,50)
        box18  = new Box (879,150,20,50)
        box19  = new Box (900,100,20,50)
        box20  = new Box (921,100,20,50)
        box21  = new Box (942,100,20,50)
        box22  = new Box (963,100,20,50)
        box23  = new Box (921,50,20,50)
        box24  = new Box (942,50,20,50)
        box25  = new Box (963,50,20,50)
        box26  = new Box (900,0,20,50)
        box27  = new Box (921,0,20,50)

        hexago = Bodies.polygon(96,115,6,10);

        sling = new SlingShot(hexago,{x:98,y:142})
        World.add(world,hexago)
        
    
}

function draw() {

    var pos = hexago.position

    Engine.update(engine);

    background(0)
    surface.display()
    platty.display()

    box1.display(1)
    box2.display(1)
    box3.display(1)
    box4.display(1)
    box5.display(1)
    box6.display(1)
    box7.display(1)
    box8.display(2)
    box9.display(2)
    box10.display(2)
    box11.display(2)
    box12.display(2)
    box13.display(2)
    box14.display(3)
    box15.display(3)
    box16.display(3)
    box17.display(3)
    box18.display(3)
    box19.display(4)
    box20.display(4)
    box21.display(4)
    box22.display(4)
    box23.display(5)
    box24.display(5)
    box25.display(5)
    box26.display(6)
    box27.display(6)

    

    sling.display()

    imageMode(CENTER)
    image(Hex,pos.x,pos.y)

    drawSprites()
    
    console.log(mouseX,mouseY)

}