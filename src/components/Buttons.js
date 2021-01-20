import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  display: inline-block;
  color: white;
  font-size: ${props => props.fontSize ? props.fontSize+'rem' : '2rem'};
  padding: .8em 1.8em;
  cursor: pointer;
  border: 0px;
  border-radius: 8px;
  background-color: var(--gray);
  width: ${props => props.width ? props.width+'%' : ''};
  
  @media only screen and (max-width: 768px){
    padding: .5em 1.4em;
  }
`;

export default function Button ({ children, fontSize, width }){
  return (
    <ButtonStyle width={width} fontSize={fontSize}>
      { children }
    </ButtonStyle>
  )
}