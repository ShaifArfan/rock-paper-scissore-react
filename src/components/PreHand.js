import React from 'react';
import styled from 'styled-components';
import HandImg from '../assets/images/pre-hand.png';

const HandStyle = styled.img`
  transform: ${({direction}) => direction === 'right' ? 'rotateY(180deg)' : '' };
`;

export default function PreHand({direction}){
  return(
    <div>
      <HandStyle direction={direction} src={HandImg} alt="Handimg"/>
    </div>
  )
}