import React from 'react';

import logo from '../../../../assets/logo.png';
import Container from './components/Container';
import Img from './components/Img';

const Navbar = () => {
  return (
    <Container>
      <Img src={logo} />
    </Container>
  );
};

export default Navbar;
