var dog, happyDog, database, foodS, foodStock;

function preload()
{
	dog1=loadImage("dogImg1.png")
  happyDog=loadImage("dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
    dog = createSprite(250,250,50,50);
    dog.addImage(dog1);
    dog.scale=0.2;
    dog.shapeColor = "red";
    dogPosition=database.ref("dog/position");
    dogPosition.on("value",readStock,writeStock)

    feed=createButton("Feed the Dog");
    feed.position(700,95);
    feed.mousePressed(feedDog);

    addFood=createButton("Add Food");
    addFood.position(800,95);
    addFood.mousePressed(addFoods);
    
}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog)
  }
    
  drawSprites();
  stroke(4);
    textSize(20);
    fill("white");
    text("Note: Press UP_ARROW Key To Feed Drago Milk!",50,100);
  
    fill(255,255,254);
    textSize(15);
    if (lastFed>=12) {
    text()  
    }

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if (x<=0) {
    x=0;
  } else {
    x=x-1;
  }
database.ref("/").update({
  Food:x
})
  }
