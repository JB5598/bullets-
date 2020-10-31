var bullet,wall,bullet2,wall2,bullet3,bullet3,bullet4,wall4;
var speed,weight;
var line,line2,line3,line4;
var thickness;

function setup() 
{
  createCanvas(1600,600);

  speed = random(223,321);
  weight = random(32,52);
  thickness = random(22,83);

  bullet = createSprite(50,60,50,50);
  wall = createSprite(1500,55,thickness,height/2);
  line = createSprite(1,110,16000,5);

  bullet2 = createSprite(50,160,50,50);
  wall2 = createSprite(1500,180,thickness,height/2);
  line2 = createSprite(1,250,16000,5);

  bullet3 = createSprite(50,310,50,50);
  wall3 = createSprite(1500,320,thickness,height/2);
  line3 = createSprite(1,390,16000,5);

  bullet4 = createSprite(50,450,50,50);
  wall4 = createSprite(1500,460,thickness,height/2);
  line4 = createSprite(1,540,16000,5);
}

function draw()
 {
  background("black");  
   bullet.shapeColor = "red";
   wall.shapeColor ="grey"; 
   line.shapeColor ="white";
   bullet2.shapeColor = "green";
   wall2.shapeColor ="grey"; 
   line2.shapeColor ="white";
   bullet3.shapeColor = "blue";
   wall3.shapeColor ="grey"; 
   line3.shapeColor ="white";
   bullet4.shapeColor = "yellow";
   wall4.shapeColor ="grey"; 
   line4.shapeColor ="white";

  bullet.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
  bullet4.velocityX = speed;

  if(wall.x- bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bullet.changeShapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.changeShapeColor = color(230,230,0);
    }
    if(deformation>100)
    {
      bullet.changeShapeColor= color(0,255,0);
    }
  }

  if(wall.x-bullet2.x < (bullet2.width + wall.width)/2)
  {
    bullet2.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bullet2.changeShapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet2.changeShapeColor = color(230,230,0);
    }
    if(deformation>100)
    {
      bullet2.changeShapeColor= color(0,255,0);
    }
  }
  
  if(wall.x-bullet3.x < (bullet3.width + wall.width)/2)
  {
    bullet3.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bullet3.changeShapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet3.changeShapeColor = color(230,230,0);
    }
    if(deformation>100)
    {
      bullet3.changeShapeColor= color(0,255,0);
    }
  }

  
  if(wall.x-bullet4.x < (bullet4.width + wall.width)/2)
  {
    bullet4.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bullet4.changeShapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet4.changeShapeColor = color(230,230,0);
    }
    if(deformation>100)
    {
      bullet4.changeShapeColor= color(0,255,0);
    }
  }

  hasCollided (bullet,wall);
  hasCollided2 (bullet2,wall2);
  hasCollided3 (bullet3,wall3);
  hasCollided4 (bullet4,wall4);
  drawSprites();
}

function  hasCollided (bullet,wall)
{
   bulletRightEdge=bullet.x + bullet.width
   wallLeftEdge=wall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
       return true;
   }
    return false;
}

if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed *  speed/(thickness * thickness * thickness);
   
  if(damage>10)
  {
      wall.shapeColor=color(255,0,0);
  }


  if(damage<10)
   {
       wall.shapeColor=color(0,255,0);
   }
}


function  hasCollided2 (bullet2,wall2)
{
   bullet2RightEdge=bullet2.x + bullet2.width
   wall2LeftEdge=wall.x;
   if (bullet2RightEdge>=wall2LeftEdge)
   {
       return true;
   }
    return false;
}

if(hasCollided2(bullet2, wall2))
{
  bullet2.velocityX=0;
  var damage=0.5 * weight * speed *  speed/(thickness * thickness * thickness);
   
  if(damage>10)
  {
      wall.shapeColor=color(255,0,0);
  }


  if(damage<10)
   {
       wall.shapeColor=color(0,255,0);
   }
}


function  hasCollided3 (bullet3,wall3)
{
   bullet3RightEdge=bullet3.x + bullet3.width
   wall3LeftEdge=wall.x;
   if (bullet3RightEdge>=wall3LeftEdge)
   {
       return true;
   }
    return false;
}

if(hasCollided3(bullet3, wall3))
{
  bullet3.velocityX=0;
  var damage=0.5 * weight * speed *  speed/(thickness * thickness * thickness);
   
  if(damage>10)
  {
      wall.shapeColor=color(255,0,0);
  }


  if(damage<10)
   {
       wall.shapeColor=color(0,255,0);
   }
}


function  hasCollided4 (bullet4,wall4)
{
   bullet4RightEdge=bullet4.x + bullet4.width
   wall4LeftEdge=wall.x;
   if (bullet4RightEdge>=wall4LeftEdge)
   {
       return true;
   }
    return false;
}

if(hasCollided4(bullet4, wall4))
{
  bullet4.velocityX=0;
  var damage=0.5 * weight * speed *  speed/(thickness * thickness * thickness);
   
  if(damage>10)
  {
      wall.shapeColor=color(255,0,0);
  }


  if(damage<10)
   {
       wall.shapeColor=color(0,255,0);
   }
}