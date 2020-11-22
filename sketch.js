var wall ,bullet,weight,speed,thickness;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321); 
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 5);
  wall=createSprite(1200,200,thickness,height/2);

  wall.shapeColor=(80,80,80);

  bullet.velocityX=speed;


  
}

function draw() {
  background(0);  
  
  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage = 0.5*
  }
  
  drawSprites();
}
function hasCollided(lwall,lbullet){

  bulletRightEdge= lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if (bulletRightEdge>=bulletLeftEdge)
  {
    return true
  }
  return false;

}