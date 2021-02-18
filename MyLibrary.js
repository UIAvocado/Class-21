function bounceOff(ob1,knob){
    if(ob1.x-knob.x<ob1.width/2+knob.width/2 &&
      knob.x-ob1.x<ob1.width/2+knob.width/2 ){
        ob1.velocityX = ob1.velocityX * (-1);
        knob.velocityX = knob.velocityX * (-1);
      }
      if(ob1.y-knob.y<ob1.height/2+knob.height/2 &&
      knob.y-ob1.y<ob1.height/2+knob.height/2){
        ob1.velocityY = ob1.velocityY * (-1);
        knob.velocityY = knob.velocityY * (-1);
      }
    }

    function isTouching(object1,object2)
{
 if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}