import React, { useContext } from 'react';
import RockImg from '../assets/images/rock-hand.png';
import PaperImg from '../assets/images/paper-hand.png';
import ScissorsImg from '../assets/images/scissors-hand.png';
import styled from 'styled-components';
import BoardContext from './boardContext';
import useBoard from '../utils/useBoard';

const HandStyle = styled.div`
  max-width: 200px;
  cursor: pointer;
  transform: ${({dir}) => dir === 'right'? 'rotateY(180deg)': '' };
  @media only screen and (max-width: 768px){
    max-width: 100px;
  }
`;



export default function HandImg ({ hand, direction}){
  const { setMove, move} = useContext(BoardContext);
  const { state, setState } = useBoard();

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
      <img src={img} alt={hand} onClick={()=> {
        setMove(hand);
        setState(state+1);
        console.log(state)
      }} />
    </HandStyle>
  )
}