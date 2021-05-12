//Create variables here
var dog, happyDog, database, foodS, foodStock, 


function preload()
{
	//load images here
  this.image = loadImage("images/dogImg.png");
  this.image = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);

  dog = new Dog (250, 250)
  
}


function draw() {  

  drawSprites();
  //add styles here

}



