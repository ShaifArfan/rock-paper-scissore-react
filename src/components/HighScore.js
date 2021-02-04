import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Buttons';
import ExitButton from './ExitButton';
import LogoTitle from './LogoTitle';
import Selected from './Selected';

const HighScoreItemsStyle = styled.div`
    margin-top:5rem;
  .item{
    width: 500px;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 8px;
    transition: .3s ease background-color;
    /* background-color: red; */
    &:hover{
      background-color: var(--gray);
      box-shadow: 0px 0px 15px 10px #0000004a;
    }
    p{
      display: flex;
      justify-content: space-between;
      font-size: 2rem;
      text-align: center;
    }
  }
`;

const RoundStyle = styled.ul`
  margin-top: 5rem!important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  li{
    width: fit-content!important;
    margin-bottom: 0!important;
    button{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }
`;

export default function HighScore(){
  const topResults = JSON.parse(localStorage.getItem('topResults'));
  const rounds = getRounds();
  const [ selectedRound, setSelectedRound ] = useState(rounds[0]);
  const filteredResult = getRoundBaseResult(selectedRound);


  function getRounds(){
    const rounds = [];
    const allRounds = topResults.map(result => result.round);
    allRounds.forEach(round => {
      if(!rounds.includes(round)){
        rounds.push(round)
      }
    });
    return rounds;
  } 

  function getRoundBaseResult (round){
    return topResults.filter(result => round === result.round);
  }

  function compare( a, b ) {
    if ( a.score.playerScore < b.score.playerScore ){
      return 1;
    }
    if ( a.score.playerScore >  b.score.playerScore ){
      return -1;
    }
    return 0;
  }

  function handleClick(round){
    setSelectedRound(round);
  }

  topResults.sort(compare);
  console.log({selectedRound, rounds})
  return(
    <div>
      <ExitButton></ExitButton>
      <LogoTitle title="High Score"></LogoTitle>
      <RoundStyle>
        {rounds.map((round, index) => (
          <li className="round-item" key={index} onClick={()=> {
            handleClick(round)
          }}>
            <Button>
              <span>{round < 10 ? `0${round}`: round } Round</span>
                {selectedRound === round ? <Selected /> : '' }
            </Button>
          </li>
        ))}
      </RoundStyle>
      <HighScoreItemsStyle className="all-items">
        {filteredResult.map((result, index) => (
          <div className="item" key={index}>
              <p>
                <span>{result.name}</span><span>{result.score.playerScore}</span></p>
            </div>
          
          ))}
      </HighScoreItemsStyle>
    </div>
  )
}