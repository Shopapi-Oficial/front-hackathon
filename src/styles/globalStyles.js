import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Archivo', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer
  }
`;

export default GlobalStyles;
