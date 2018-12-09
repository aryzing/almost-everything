import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  /* fonts:
      font-family: 'Montserrat', sans-serif;
      font-family: 'Raleway', sans-serif;
  */
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600|Raleway:400,600');

  ${reset}

  /* other styles */
  html {
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
  }
  body {
    line-height: 1.6;
  }
  html,
  body,
  #root {
    height: 100%;
    margin: 0
  }
`;
