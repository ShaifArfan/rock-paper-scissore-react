import React, { useContext } from 'react';
import BoardContext from './boardContext';
import MyContext from './Context';
import ExitButton from './ExitButton';
import GameCheckBoard from './GameCheckBoard';
import PreGameBoard from './PreGameBoard';
import ScoreBoard from './ScoreBoard';
import useBoard from '../utils/useBoard';

export default function Board(){

  const {state, setState, score, setScore} = useBoard();
  const [name] = useContext(MyContext);
  const { move } = useContext(BoardContext);

  console.log(state)
  return(
    <div>
      <ExitButton></ExitButton>
        <ScoreBoard playerName={name} score={score} ></ScoreBoard>
        { state === 1 ? <PreGameBoard></PreGameBoard> : ''}
        { state === 2 ? <GameCheckBoard 
          score={score}
          setScore={setScore}
          move={move}
          setState={setState}
          /> : ''}
    </div>
  )
}