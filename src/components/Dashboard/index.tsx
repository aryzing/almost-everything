import React from 'react';

import { Navbar } from './components/Navbar';
import { Workspace } from './components/Workspace';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const NavbarContainer = styled.div`
  flex: 0 0 auto;
`;

const WorkspaceContainer = styled.div`
  flex: 1 1 auto;
  background-color: #e8e8e8;
`;

export const Dashboard = () => {
  return (
    <Container>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <WorkspaceContainer>
        <Workspace />
      </WorkspaceContainer>
    </Container>
  );
};
