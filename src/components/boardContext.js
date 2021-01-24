import React, { useState } from 'react';

const BoardContext = React.createContext();

export function BoardContextProvider({ children }){
  const [move, setMove] = useState(null);
  const [state, setState] = useState(1);
  const [score, setScore] = useState([0,0]);
   return(
    <BoardContext.Provider 
      value={{move, setMove, state, setState, score, setScore}
      }>
      {children}
    </BoardContext.Provider>
   )
}
export default BoardContext;