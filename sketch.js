var GameBoard = [];
var GameData = [];

var Player1,Player2,CurrentPlayer;

var Gamestate = 0;

function preload() {
  XImg = loadImage('X.png');
  OImg = loadImage('O.png');
}

function setup() {
  createCanvas(1000,1000);

  Makesprites();

  GameBoard = [[Box11,Box12,Box13],[Box21,Box22,Box23],[Box31,Box32,Box33]];

  GameData = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];

  Player1 = 'X';
  Player2 = 'O';

  ChoosePlayer();

  if (Gamestate === 0){
    form = new Form();
  }
}

function draw() {
  background(200);  
  drawSprites();

  form.display();

  if (Gamestate === 1){
    
  stroke("white");
    strokeWeight(20);

    //First Line Vertical
    line(500,500,500,200);

    //Second Line Vertical
    line(650,500,650,200);

    //First Line Horizontal
    line(750,290,400,290);

    //Second Line Horizontal
    line(750,410,400,410);

    GamePlayer1();
    GamePlayer2();
  }
}

function Makesprites(){
  Box11 = createSprite(450,250,70,70);
  Box12 = createSprite(575,250,70,70);
  Box13 = createSprite(700,250,70,70);
  Box21 = createSprite(450,350,70,70);
  Box22 = createSprite(575,350,70,70);
  Box23 = createSprite(700,350,70,70);
  Box31 = createSprite(450,450,70,70);
  Box32 = createSprite(575,450,70,70);
  Box33 = createSprite(700,450,70,70);

  Box11.visible = false;
  Box12.visible = false;
  Box13.visible = false;
  Box21.visible = false;
  Box22.visible = false;
  Box23.visible = false;
  Box31.visible = false;
  Box32.visible = false;
  Box33.visible = false;
}

function ChoosePlayer() {
  var Rand = Math.round(random(1,2));
  if(Rand === 1){
    CurrentPlayer = Player1;
  } else {
    CurrentPlayer = Player2;
  }
}

function GamePlayer1(){
 if(CurrentPlayer === Player1){
   text("PLayer 1",400,100);
  for(var i=0; i<3;i++){
   for(var j=0; j<3; j++){ 
     if(mousePressedOver(GameBoard[i][j]) && GameData[i][j] === ' '){
       GameBoard[i][j].visible = true;
       GameBoard[i][j].addImage('X',XImg);
       GameBoard[i][j].scale = 0.3;
       GameData[i][j] = 'X';
       CurrentPlayer = Player2;
     }
   } 
  }
 }
}

function GamePlayer2(){
  if(CurrentPlayer === Player2){
    text("PLayer 2",400,100);
   for(var i=0; i<3;i++){
    for(var j=0; j<3; j++){ 
      if(mousePressedOver(GameBoard[i][j]) && GameData[i][j] === ' '){
        GameBoard[i][j].visible = true;
        GameBoard[i][j].addImage('O',OImg);
        GameBoard[i][j].scale = 0.3;
        GameData[i][j] = 'O';
        CurrentPlayer = Player1;
      }
    } 
   }
  }
 }