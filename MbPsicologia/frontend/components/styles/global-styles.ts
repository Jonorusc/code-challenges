import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    &::-webkit-scrollbar {
      height: 0;
    }
  }

  :root {
    --background: #0F0F0F; 
    --background-light: #0F0F0FB2;
    --primary: #ECDEEE;
    --primary-active: #E9FF1A;

    --blue: #05A2C2;
    --purple: #9B19C2;
    --orange: #C26719;
    --pink: #CC4090;
    --white: #FFFFFF;
    --black: #000000;
    --green: #05FF00;
    --red: #FF5964;
    --yellow: #FFFF99;
  }
  
`
