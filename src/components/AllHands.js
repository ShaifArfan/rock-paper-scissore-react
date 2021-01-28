import React, { useContext } from 'react';
import styled from 'styled-components';
import BoardContext from './boardContext';
import HandImg from './HandImg';

const AllHandStyle = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export default function AllHands(){
  const {setMove, setGameState} = useContext(BoardContext);

  function  randomMove () {
  const AllMoves = ['rock', 'paper', 'scissors'];
  return AllMoves[Math.floor(Math.random()*3)]
  }
  

  function handleClick(hand){
    const botMove = randomMove();
    setMove({
      playerMove: hand,
      botMove: botMove
    });
    setGameState(oldState => oldState+1 );
  }

  return(
    <AllHandStyle>
      <div onClick={()=> handleClick('rock')}>
        <HandImg  hand="rock"></HandImg>
      </div>
      <div onClick={()=> handleClick('paper')}>
      <HandImg hand="paper"></HandImg>
      </div>
      <div onClick={()=> handleClick('scissors')}>
        <HandImg hand="scissors"></HandImg>
      </div>
    </AllHandStyle>
  )
}