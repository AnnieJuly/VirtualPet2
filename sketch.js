var dog, dogHappy;
var foodStock,foodS;
var changinggameState, readinggameState;
var bedroom, garden, washroom;
var feed, addFood;
var lastFed;

function preload(){
  dogImg=loadImage("images/Dog.png");
  dogHappy=loadImage("images/Happy.png");
  bedroom=loadImage("images/Bed Room.png");
  garden=loadImage("images/Garden.png");
  sadDog=loadImage("images/deadDog.png")

}

function setup() {
	database= firebase.database();
  createCanvas(1200, 500);
  dog = createSprite(800,350,10,10);
  dog.addImage("dogImg",dogImg);
  foodS = new Food()
  foodS.getFoodstock();
  dog.scale=0.15;
  feed = createButton("Feed Dog");
  feed.position(700,50);
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food");
  addFood.position(600,50);
  addFood.mousePressed(add);

 // database.ref('foodStock').on("value",readStock);
 textSize(20); 
}
function draw() {  
  background("green");
  fill("white")
  foodS.display();
  
  database.ref("time").on("value",function (data){
    foodS.lastFed = data.val();
    
  })
  text("Last Fed: "+foodS.lastFed,250,50)
  // text("Food Remaining: "+foodStock,300,150)
  // text("Note: Press UP ARROW To Feed The Dog",200,70);
  
//   if(keyDown(UP_ARROW)){
//      writeStock(foodStock-1);
//      dog.addImage(dogHappy);
//  }  

 drawSprites();
 }
 
 
 function feedDog(){
   foodS.updateFoodstock(foodStock-1);
   dog.addImage(dogHappy);
   database.ref('/').update({time:hour()})
 }

 function add(){
   foodS.updateFoodstock(foodStock+1);
 }
 
 
 
 
 
 //function readStock(data){
       //foodStock=data.val();
 //}
 //function writeStock(x){
  // if(x<=0){
    // x=0;
//    }
//    database.ref('/').update({
//      foodStock:x
//    })
//  }
 