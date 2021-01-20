import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Button from './Buttons';
import styled from 'styled-components';
import RoundSetting from './RoundSetting';

const MenuStyle = styled.div`
  text-align: center;
  margin-top: 3rem;
  ul{
    max-width: 400px;
    margin: 0 auto;
    li{
      display: inline-block;
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;



export default function Menu({ setOverlay }){
  const [showRound, setShowRound ] = useState(false);

  return(
  <MenuStyle className="menu">
    <ul>
      <li onClick={()=> setOverlay(true)}>
        <Button width='100' fontSize="2.5" >New Game</Button>
      </li>
      <li onClick={()=> setShowRound(true)}>
        <Button width="100" fontSize="2.5">Round Setting</Button>
      </li>
      <li>
        <Link to="/high-score">
          <Button width="100" fontSize="2.5">High Score</Button>
        </Link>
      </li>
    </ul>
      {showRound ? <RoundSetting setShowRound={setShowRound} /> : ''}

  </MenuStyle>
  )
}