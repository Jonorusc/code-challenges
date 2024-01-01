import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
  }

  html {
    font-size: 62.5%;
  }

  :root {
    --border: 66, 66, 66;
    --background: 15, 15, 15;
    --background-light: 15, 15, 15, 0.7;
    --primary: 236, 237, 238;
    --text-primary: 236, 237, 238;
    --text-secondary: 109, 109, 109;
    --primary-active: 233, 255, 26;

    --blue: 5, 162, 194;
    --purple: 155, 25, 194;
    --orange: 194, 103, 25;
    --pink: 204, 64, 144;
    --white: 255, 255, 255;
    --black: 0, 0, 0;
    --green: 5, 255, 0;
    --red: 255, 89, 100;
    --yellow: 255, 255, 153;
  }

  body {
    background-color: rgba(var(--background), 1);
    &::-webkit-scrollbar {
      height: 0;
    }
  }

  
  
`
