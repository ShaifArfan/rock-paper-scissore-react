import React from 'react';
import RockImg from '../assets/images/rock-hand.png';
import PaperImg from '../assets/images/paper-hand.png';
import ScissorsImg from '../assets/images/scissors-hand.png';
import styled from 'styled-components';

const HandStyle = styled.div`
  max-width: 200px;
  cursor: pointer;
  transform: ${({dir}) => dir === 'right'? 'rotateY(180deg)': '' };
  @media only screen and (max-width: 768px){
    max-width: 100px;
  }
  img{
    pointer-events: none;
  }
`;



export default function HandImg ({ hand, direction}){
  
  let img = null;
  if(hand === "paper"){
    img = PaperImg;
  }else if(hand === "rock"){
    img = RockImg;
  }else if(hand === "scissors"){
    img = ScissorsImg;
  }
  return(
    <HandStyle dir={direction}>
      <img src={img} alt={hand}
       />
    </HandStyle>
  )
}