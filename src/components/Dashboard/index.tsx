import React from 'react';

import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { Workspace } from './components/Workspace';

export const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <Workspace />
    </Container>
  );
};
