import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import BoardContext from './boardContext';
import MyContext from './Context';

const FinalStyled = styled.div`
  margin-top:10rem;
  font-size: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  .result{
    color:${({result})=> (result === 'win') ? 'yellowGreen' : 'crimson'} ;
    font-size: 10rem;
  }
`;

export default function FinalResult(){
  const {name, playerRound } = useContext(MyContext);
  const { score } = useContext(BoardContext);
  const currentPlayer = {
    name,
    score,
    round: playerRound
  }
  useEffect(() => {
    localResults();
  });

  function localResults () {
    const currentPlayerResult = currentPlayer;
    let topResults = '';
    if(localStorage.getItem('topResults')){
      topResults = JSON.parse(localStorage.getItem('topResults')); 
    }else{
      localStorage.setItem('topResults', '');
    }
    const newTopResults = [...topResults, currentPlayerResult];
    localStorage.setItem('topResults', JSON.stringify(newTopResults));
  } 

  function getResult (){
    let result = '';
    if(score.playerScore > score.botScore){
      result = 'win';
    }else if(score.playerScore < score.botScore){
      result = 'lose';
    }else if(score.playerScore === score.botScore){
      result = 'draw';
    }
    return result;
  }
  const result = getResult();

  return(
    <FinalStyled result={result}>
      <h2>you got <br/> <span className="result">{result}</span> </h2>

    </FinalStyled>
  )
}