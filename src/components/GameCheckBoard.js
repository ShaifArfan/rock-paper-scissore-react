import React from 'react';
import styled from 'styled-components';
import HandImg from './HandImg';
import gameLogic from '../utils/gameLogic';
import Button from './Buttons';

const BoardLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function  randomMove () {
  const AllMoves = ['rock', 'paper', 'scissors'];
  return AllMoves[Math.floor(Math.random()*3)]
}

async function checkMove(move, botMove, setScore, playerScore, botScore){
  const result =  gameLogic(move, botMove);
  if(result === 'win'){
    playerScore +=2;
  }else if(result === 'lose'){
    botScore += 2;
  }
  setTimeout (( )=> {
    setScore([playerScore, botScore])
  }, 2000);

}


export default function GameCheckBoard({score, setScore, move, setState}){
  let playerScore = score[0]; 
  let botScore = score[1]; 
  const botMove = randomMove();
  
  checkMove(move, botMove, setScore, playerScore, botScore);
   
  // console.log(result);
  // console.log({playerScore, botScore})
  
  return(
    <>
      <BoardLayout>
        <HandImg hand={move}></HandImg>
        <HandImg hand={botMove} direction='right'></HandImg> 
          <Button onClick={setState(0)} >Next Round</Button>
      </BoardLayout>
    </>
  )

}


