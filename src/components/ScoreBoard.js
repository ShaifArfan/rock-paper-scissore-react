import React from 'react';
import styled from 'styled-components';

const ScoreBoardStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  width: 90%;
`;  

export default function ScoreBoard({playerName}){
  return(
    <ScoreBoardStyle>
      <div className="player">
        <span>{playerName}: <span className="score">00</span></span>
      </div>
      <div></div>
      <div></div>
    </ScoreBoardStyle>
  )
}