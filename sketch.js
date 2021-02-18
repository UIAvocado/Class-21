var fixedrect,movingrect;
var ob1, knob;
var gameObject1;
function setup()
{
  createCanvas(1200,800)
  fixedrect=createSprite(200,200,50,50);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;

  movingrect=createSprite(200,400,80,50);
  movingrect.shapeColor="green";
  movingrect.debug=true;

  movingrect.velocityY = -5;
  fixedrect.velocityY = 5;
  gameObject1 = createSprite(200,300,50,50);
  gameObject1.shapeColor = "green";
}

function draw()
{
  background(0);

  bounceOff(movingrect, fixedrect);
  if(isTouching(movingrect, gameObject1)){
    movingrect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    movingrect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  drawSprites();
}