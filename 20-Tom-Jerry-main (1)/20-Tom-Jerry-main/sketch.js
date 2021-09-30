
  
var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2; //Agrega una variable para tomImg3,jerryImg3

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
      //Cambia la animaciòn cuando los personajes se toquen
     cat.velocityX = 0   // no tienes una variable cat por lo tamto es tom, asi que cambialos en todos los cat por tom 
     cat.addAnimation("images/tomOne.png",tomImg1); // aqui vamos a cambiar lo que esta dentro de parentesis recuerda que lleva unaetiqueta y la imagen tom.addAnimation("tomLastImage",tomImg3);
     cat.changeAnimation("images/tomOne.png",tomImg1); //aqui tambien se va a cambiar solo por la etiqueta  tom.changeAnimation("tomLastImage");
     cat.x = 300
     cat.scale = 0.2
     //te hace falta agregar a jerry  
     // jerry.addAnimation("jerryLastImage", jerryImg3);
     // jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}
