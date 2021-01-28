import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import HandImg from './HandImg';
import gameLogic from '../utils/gameLogic';
import Button from './Buttons';
import BoardContext from './boardContext';
import MyContext from './Context';

const BoardLayout = styled.div`
margin-top:10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10rem;
  .resultHand{
    display: flex;
    gap: 5rem;
  }
`;



function checkMove(move, score, setScore){
  let playerScore = score.playerScore;
  let botScore = score.botScore;
  const result =  gameLogic(move.playerMove, move.botMove);
  if(result === 'win'){
    playerScore +=2;
  }else if(result === 'lose'){
    botScore += 2;
  }
  return {
    playerScore,
    botScore
  }
  // setScore({
  //   playerScore,
  //   botScore
  // });

}


export default function GameCheckBoard(){
  const {setGameState, move, score, setScore, setGameRound, gameRound} = useContext(BoardContext);
const { playerRound } = useContext(MyContext);

  // setScore(result)
  // console.log(result)
  
  useEffect(()=> {
    const result = checkMove(move, score, setScore);
    setScore(result);
    console.log('score updated')
  }, [])
  
  return(
    <>
      <BoardLayout>
        <div className="resultHand">
          <HandImg hand={move.playerMove}></HandImg>
          <HandImg hand={move.botMove} direction='right'></HandImg> 
        </div>
        <div onClick={(e)=> {
          if(playerRound <= gameRound ){
            setGameState (3)
          } else{
            setGameRound( preRound => preRound+1)
            setGameState(1);
          }
          }}>
          <Button>Next Round</Button>
        </div>
      </BoardLayout>
    </>
  )

}


