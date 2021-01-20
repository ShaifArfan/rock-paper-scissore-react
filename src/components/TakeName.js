import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Buttons';
import MyContext from './Context';

const FormStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height:100%;
  width: 100%;
  background: #1C2431F2;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper{
    width: 90%;
    height: auto;
    max-width: 500px;
    background-color: var(--gray);
    padding: 10rem 5rem;
    border-radius: 8px;
    position: relative;
    form{
      text-align: center;
      input{
        width: 100%;
        height: 5rem;
        border-radius: 8px;
        outline: none;
        background: var(--black-2);
        border: 2px solid #ffffff91;
        color: white;
        padding: 1rem;
        font-size:2rem;
      }
      button{
        background-color: var(--black-2);
        margin-top: 3rem;
      }
    }
    .close{
      position: absolute;

      background:var(--light-gray);
      padding: 1rem;
      border-radius: 50%;
      display: flex; 
      align-items: center;
      justify-content: center;
      cursor: pointer;
      right: 10px;
      top: 10px;
      svg{
        max-width: 25px;
      }
    }
  }
`;

export default function TakeName({ setOverlay }){
  const [ name,  setName ] = useContext(MyContext);
  return(
    <FormStyle>
      <div className="wrapper">
        <form onSubmit={(e)=> {
          e.preventDefault();
          console.log(name);

        }}>  
          <label htmlFor="name">
            <input type="text" id="name" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <Link to='/board'>
              <Button fontSize="3" type="submit">Start</Button>
            </Link>
          </label>
        </form>
        <div className="close" onClick={()=> setOverlay(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        </div>
      </div>
    </FormStyle>
  )
}