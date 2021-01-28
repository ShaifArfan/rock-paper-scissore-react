import React, { useContext } from 'react';
import BoardContext from './boardContext';
import ExitButton from './ExitButton';
import FinalResult from './FinalResult';
import GameCheckBoard from './GameCheckBoard';
import PreGameBoard from './PreGameBoard';
import ScoreBoard from './ScoreBoard';
// import useBoard from '../utils/useBoard';

export default function Board(){

  // const {gameState, setGameState, score, setScore} = useBoard();
  const { gameState, score, setScore } = useContext(BoardContext);

  console.log(gameState)
  return(
    <div>
      <ExitButton></ExitButton>
        <ScoreBoard></ScoreBoard>
        { gameState === 1 ? <PreGameBoard /> : ''}
        { gameState === 2 ? <GameCheckBoard 
          /> : ''}
        { gameState === 3 ? <FinalResult /> : ''}
    </div>
  )
}