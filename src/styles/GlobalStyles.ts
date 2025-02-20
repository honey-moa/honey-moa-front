import { createGlobalStyle } from 'styled-components';

interface GlobalStylesProps {
  color: boolean;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`  
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
    background-color: ${({ color }) => (color ? '#212121' : '#FFFFFF')};
    width: 100%;
    height: auto;
    max-width: 100dvw;
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

export const breakpoints = {
  small: '@media (max-width: 600px)',
  medium: '@media (max-width: 960px)',
  large: '@media (max-width: 1280px)',
};
