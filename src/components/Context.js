import React, { useState } from 'react';

const MyContext = React.createContext();

// function getLocalCurrent(){
//   const data = JSON.stringify(localStorage.getItem('currentPlayer'));
//   return data;
// }


export function MyContextProvider({ children }){
  const [name, setName] = useState('');
  const [playerRound, setPlayerRound] = useState(5);
  // console.log(name);
  return(
    <MyContext.Provider value={{name, setName, playerRound, setPlayerRound}}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContext;