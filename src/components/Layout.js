import React from 'react';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  width: 90%;
  max-width: 1000px;
  height: auto;
  margin: 0 auto;
  padding:5rem 0; 
`;

export default function Layout ({ children}){
  return(
    <LayoutStyle>
      {children}
    </LayoutStyle>
  )
}