import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from './LogoTitle';

export default function HighScore(){
  return(
    <div>
      <LogoTitle title="High Score"></LogoTitle>
      <h1>THis is highScore Page</h1>
      <Link to="/">Home</Link>
    </div>
  )
}