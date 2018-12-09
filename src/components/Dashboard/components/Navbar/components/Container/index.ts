import styled from 'styled-components';

const Container = styled.div`
  /* as flex parent */
  display: flex;
  justify-content: center;

  /* as flex child */
  flex: 0 0 auto;

  /* remaining properties */
  height: 3rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid black;
`;

export default Container;
