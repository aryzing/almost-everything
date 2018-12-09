import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  /* fonts:
      font-family: 'Montserrat', sans-serif;
      font-family: 'Raleway', sans-serif;
  */
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600|Raleway');

  ${reset}

  /* other styles */
  html {
    font-size: 16px;
  }
  html,
  body,
  #root {
    height: 100%;
    margin: 0
  }
`;
