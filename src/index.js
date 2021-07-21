import Player from './js/pigdice.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


let player1 = new Player(0, 0, true);
let player2 = new Player( 0, 0, false); 

$(document).ready(function(){
  $("button#submit").click(function(event){
    event.preventDefault();
    player1.switchPlayer();
    player2.switchPlayer();
  })

  $("button#hold").click(function(event){
    event.preventDefault();
    player1.totalScore();
    if(player1.gameScore >= 100){
      $("#player1gameScore").text(player1.gameScore) 
      alert("player1 wins")
    }
    player2.totalScore();
    if(player2.gameScore >= 100){
      $("#player2gameScore").text(player2.gameScore) 
      alert("player2 wins")
    }
  });
});