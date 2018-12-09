import React from 'react';
import styled from 'styled-components';

import logo from '../../../../assets/logo.png';
import Img from './components/Img';

const Container = styled.div`
  /* as flex parent */
  display: flex;
  justify-content: center;

  /* remaining properties */
  height: 3rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid black;
`;

export default Container;

export const Navbar = () => {
  return (
    <Container>
      <Img src={logo} />
    </Container>
  );
};
