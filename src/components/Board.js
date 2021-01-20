import React, { useContext } from 'react';
import MyContext from './Context';
import ExitButton from './ExitButton';
import ScoreBoard from './ScoreBoard';


export default function Board(){
  const [name] = useContext(MyContext);
  return(
    <div>
      <ExitButton></ExitButton>
      <ScoreBoard playerName={name}></ScoreBoard>
      <h1>Player Name: {name}</h1>
    </div>
  )
}