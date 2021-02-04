import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Buttons';


const ExitPosition = styled.div`
  position: absolute;
  left:20px;
  top: 20px;
   @media only screen and (max-width: 768px){
    top: 5px;
    left: 5px;
  }
`;

const ExitStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    /* font-size: 1.3rem; */

`;


export default function ExitButton(){
  const history = useHistory();
  function handleClick(){
    console.log('test');
    history.push('/')
    localStorage.removeItem('currentPlayer');
  }
  return(
    <ExitPosition onClick={handleClick}>
        <Button fontSize="1.4">
          <ExitStyle className="exit-button" >
        <span>Exit</span>
          </ExitStyle>
        </Button>
    </ExitPosition>
  )
}