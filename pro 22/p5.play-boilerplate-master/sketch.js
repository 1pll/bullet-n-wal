var bullet , wall ; 
var thickness , speed , weight ;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(25,30);
bullet=createSprite(500, 200, 50, 50);
wall=createSprite(1200,200,60,100);
bullet.velocityX=5;
}

function draw() {
  background("black");  
  
  
  if(hascollided(bullet,wall))
  {    bullet.velocityX=0;
       var damage =0.5*weight*speed*sped/(thickness*thickness*thicknes)

  if(damage<10){
    wall.shapecolor=color(255,0,0);
  }      
if(damage>10){
   wall.shapecolor=color(0,255,0); 
}
drawSprites();
hascollided(bullet,wall);
  }
}

function hascollided(Ibullet,Iwall){

  bulletRightedge=Ibullet.x+Ibullet.width;
  wallLeftEdge=Iwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true ;
  }
return false ;

}












