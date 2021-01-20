import { createGlobalStyle } from "styled-components";
import font from '../assets/Roboto_Mono/RobotoMono-Regular.ttf';
const GlobalStyles = createGlobalStyle`

  :root{
    --white: white;
    --gray: #30363D;
    --black: #0D1117;
    --black-2: #20252B;
    --light-gray: #404853;
  }
  @font-face {
    font-family: RobotoMono;
    src: url(${font});
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: RobotoMono;
  }
  html{
    font-size: 10px;
    font-family: RobotoMono;
  }
  body{
    background-color: black;
    color: white;
    background-color: var(--black)
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: white;
  }
  button{
    outline: none
  }
`;

export default GlobalStyles;