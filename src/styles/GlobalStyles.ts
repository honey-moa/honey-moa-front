import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html,
  body {
    width: 100%;
    max-width: 100dvw;
    height: 100dvh;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  } 
`;
