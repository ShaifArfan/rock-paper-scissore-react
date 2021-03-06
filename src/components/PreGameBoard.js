import React  from 'react';
import styled from 'styled-components';
import AllHands from './AllHands';
import Button from './Buttons';
import PreHand from './PreHand';

const PreHandStyle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-top: 10rem;
  img{
    width: 100%;
    object-fit: contain;
  }
`;

const ChooseBarStyle = styled.div`
text-align: center;
margin-top: 10rem;
  button{
    cursor:auto; 
  }

@media only screen and (max-width: 768px){
  margin-top: 5rem;
  button{
    font-size: 2rem;
  }
}
`;

export default function PreGameBoard (){
  return(
    <>
      <PreHandStyle className="pre-hand">
        <PreHand></PreHand>
        <PreHand direction="right"></PreHand>
      </PreHandStyle>
      <ChooseBarStyle className="choose-bar">
        <Button fontSize="3">Choose Your Move</Button>
      </ChooseBarStyle>
      <AllHands></AllHands>
    </>

  )
}