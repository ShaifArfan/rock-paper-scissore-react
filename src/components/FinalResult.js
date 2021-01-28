import React, { useContext } from 'react';
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
  const { score } = useContext(BoardContext);
  const { name } = useContext(MyContext);
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