import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from './Buttons';
import MyContext from './Context';
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
  const { playerRound, setPlayerRound } = useContext(MyContext);

  function handleClick(e, round){
    setPlayerRound(round);
    setShowRound(false);
  }

  return(
    <RoundStyle>
      {rounds.map((round, i) => (
        <li key={i} onClick={(e)=> handleClick(e, round)} >
          <Button><span>{round < 10 ? `0${round}`: round } Round</span>
          {playerRound === round ? <Selected /> : '' }
          </Button>
        </li>
      ))}
    </RoundStyle>
  )
} 