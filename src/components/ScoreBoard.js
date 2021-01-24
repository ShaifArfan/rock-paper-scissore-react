import React from 'react';
import styled from 'styled-components';

const ScoreBoardStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  width: 90%;
  background: var(--gray);
  font-size: 2rem;
  padding: 1em 2em;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap: 2rem;

  .score{
    opacity: 1!important;
    font-size: 3rem;
  }
  @media only screen and (max-width: 768px){
    font-size: 1.8rem;
    padding: .8em 1.5em;
    margin-top: 1em;
    .player p, .bot p{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .player p{
      flex-direction: column-reverse;
    }
  }
`;  

export default function ScoreBoard({playerName, score}){
  const playerScore = score[0];
  const botScore = score[1];
  return(
    <ScoreBoardStyle>
      <div className="player">
        <p>{playerName} <span className="score">{playerScore}</span></p>
      </div>
      <div>
        <p>Round-1</p>
      </div>
      <div className="bot"><p><span className="botScore score">{botScore}</span> Bot</p></div>
    </ScoreBoardStyle>
  )
}