import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';


const LogoStyle = styled.div`
  width: 100%;
  text-align: center;
  img{
    max-width: 150px;
  }
`;

const TitleStyles = styled.div`
  font-size: 2.5rem;
  text-align: center;
`;

export default function LogoTitle({ title }){
  return(
    <>
      <LogoStyle className="logo">
        <img src={logo} alt="Logo"/>
      </LogoStyle>
      <TitleStyles className="title">
        <h1>{title ? title : 'Rock Paper Scissors'}</h1>
      </TitleStyles>
    </>
  )
} 