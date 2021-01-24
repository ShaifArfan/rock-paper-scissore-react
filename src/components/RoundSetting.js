import React from 'react';
import styled from 'styled-components';
import Button from './Buttons';
import Selected from './Selected';

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

export default function RoundSetting({ setShowRound}){
  const rounds = [5, 10, 15];
  let selectedRoundNumber = getSelectedRound();
  let roundNumber = selectedRoundNumber;
  function handleClick(e, round){
    setSelectedRound(round);
    console.log(roundNumber, round)
    setShowRound(false);
  }
  function getSelectedRound (){
    if(localStorage.getItem('currentPlayer')){
      const data = JSON.parse(localStorage.getItem('currentPlayer'));
      return data.round;;
    }else {
      return rounds[0];
    }
  }
  function setSelectedRound(round){
    if(localStorage.getItem('currentPlayer')){
      const data = JSON.parse(localStorage.getItem('currentPlayer'));
      data.round = round;
      localStorage.setItem('currentPlayer', JSON.stringify(data))
    }
  }
  // useEffect(getDataFromLocalStorages,[])
  return(
    <RoundStyle>
      {rounds.map((round, i) => (
        <li key={i} onClick={(e)=> handleClick(e, round)} >
          <Button><span>{round < 10 ? `0${round}`: round } Round</span>
          {roundNumber === round ? <Selected /> : '' }
          </Button>
        </li>
      ))}
    </RoundStyle>
  )
} 