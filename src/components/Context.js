import React, { useState } from 'react';

const MyContext = React.createContext();

export function MyContextProvider({ children }){
  const [name, setName] = useState('');
  return(
    <MyContext.Provider value={[name, setName]}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContext;