import React, { useState } from 'react';

const BoardContext = React.createContext();

export function BoardContextProvider({ children }){
  const [move, _setMove] = useState({
      playerMove: null,
      botMove: null,
  });
  function setMove (newMoves){
      _setMove(oldMoves => {
          return{
              ...oldMoves,
              ...newMoves
          }
      })
  }
  const [score, _setScore] = useState({
        playerScore: 0,
        botScore: 0
    });
    function setScore(newScore) {
        _setScore(oldScore => {
            return {
                ...oldScore,
                ...newScore
            }
        })
    }
    const [gameState, setGameState] = useState(1);
    const [gameRound, setGameRound] = useState(1);

   return(
    <BoardContext.Provider 
      value={{gameRound, setGameRound, move, setMove, gameState, setGameState, score, setScore}
      }>
      {children}
    </BoardContext.Provider>
   )
}
export default BoardContext;