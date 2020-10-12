import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Archivo', sans-serif;
  }

  html {
    -webkit-font-smoothing: antialiased;
    background: white
  }

  button {
    cursor: pointer
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
