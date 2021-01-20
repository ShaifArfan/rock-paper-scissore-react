import React from 'react';
import styled from 'styled-components';
import checkImg from '../assets/images/check.png';


const CheckStyle = styled.div`
  display: inline-block;
  max-width: 2.5rem;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export default function Selected(){
  return(
    <CheckStyle>
      <img src={checkImg} alt=""/>
    </CheckStyle>
  )
}