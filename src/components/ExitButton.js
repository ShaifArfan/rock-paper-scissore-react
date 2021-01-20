import React from 'react';
import { Link } from 'react-router-dom';
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
 svg{
   max-width: 30px;
 }
 @media only screen and (max-width: 768px){
   font-size: 1.5rem;
   svg{
     max-width: 20px;
   }
 }
`;


export default function ExitButton(){
  return(
    <ExitPosition>
      <Link to="/">
        <Button>
          <ExitStyle className="exit-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        <span>Exit</span>
          </ExitStyle>
        </Button>
      </Link>
    </ExitPosition>
  )
}