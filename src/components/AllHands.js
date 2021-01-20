import React from 'react';
import styled from 'styled-components';
import HandImg from './HandImg';

const AllHandStyle = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;


export default function AllHands(){
  return(
    <AllHandStyle>
      <HandImg hand="rock"></HandImg>
      <HandImg hand="paper"></HandImg>
      <HandImg hand="scissors"></HandImg>
    </AllHandStyle>
  )
}