

//constructor for player
export default class Player{
constructor(turnScore, gameScore, playerTurn) {
  this.turnScore = turnScore;
  this.gameScore = gameScore; 
  this.playerTurn = playerTurn;
}

addScore() {
  let diceRoll = Math.floor(Math.random()*6);
  console.log("diceroll",diceRoll);
  if (diceRoll !== 1) { 
      this.turnScore += diceRoll;
      return this.turnScore;
  } else {
    return this.turnScore = 0;
  }
}

switchPlayer(){
  if (player1.playerTurn === true){
    player1.addScore()
    $("#player1Score").text(player1.turnScore)
    if (player1.turnScore === 0) {
      player1.playerTurn = false;
      player2.playerTurn = true;
    }
  }else if(player2.playerTurn === true) {
    player2.addScore()
    $("#player2Score").text(player2.turnScore)
    
    if (player2.turnScore === 0) {
      player2.playerTurn = false;
      player1.playerTurn = true;
    } 
  }
}

totalScore(){
  
  player1.switchPlayer();
    player1.gameScore = player1.turnScore;
    $("#player1gameScore").text(player1.gameScore)  
    player2.switchPlayer();
    player2.gameScore = player2.turnScore;
    $("#player2gameScore").text(player2.gameScore)  
    
}
}

