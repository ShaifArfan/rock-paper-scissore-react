import React, { useState } from 'react';
import LogoTitle from './LogoTitle';
import Menu from './Menu';
import TakeName from './TakeName';


export default function Home (){
  const [overlay, setOverlay ] = useState(false);
  return(
    <div>
        <LogoTitle></LogoTitle>
        <Menu setOverlay={setOverlay}></Menu>
      {overlay ?  <TakeName setOverlay={setOverlay}></TakeName> : ''}
    </div>
        
  )
} 