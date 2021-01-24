export default function gameLogic(playerMove, botMove='paper'){
  if(playerMove === botMove)  return 'draw';

  const allMoves = ['rock', 'paper', 'scissors'];
  playerMove = allMoves.indexOf(playerMove);
  botMove = allMoves.indexOf(botMove);

  if(playerMove - botMove === 2 || playerMove - botMove === -2){
    if(playerMove < botMove){
      botMove = -1;
    }else{
      playerMove = -1;
    }
  }
  if(playerMove > botMove){
    return 'win'
  }else {
    return 'lose';
  }
}