import React, { useEffect, useState } from 'react';

const MyContext = React.createContext();

// function getLocalCurrent(){
//   const data = JSON.stringify(localStorage.getItem('currentPlayer'));
//   return data;
// }


export function MyContextProvider({ children }){
  const [name, setName] = useState('');
  useEffect(()=>{
    if(localStorage.getItem('currentPlayer')){
      const data = JSON.parse(localStorage.getItem('currentPlayer'));
      setName(data.name);
    }else{
      localStorage.setItem('currentPlayer', '');
    }
    }, [])
  // console.log(name);
  return(
    <MyContext.Provider value={[name, setName]}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContext;