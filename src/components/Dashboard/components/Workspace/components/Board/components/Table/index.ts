import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-areas:
    'empty1 headerApplied     headerInterviewing     headerHired     empty3'
    'empty2 candidatesApplied candidatesInterviewing candidatesHired empty4';
  grid-template-rows: auto auto;
  grid-template-columns: auto 350px 350px 350px auto;
`;

const HeaderCommon = styled.div`
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const HeaderApplied = styled(HeaderCommon)`
  grid-area: headerApplied;
`;
export const HeaderInterviewing = styled(HeaderCommon)`
  grid-area: headerInterviewing;
`;
export const HeaderHired = styled(HeaderCommon)`
  grid-area: headerHired;
`;

export const CandidatesApplied = styled.div`
  grid-area: candidatesApplied;
`;
export const CandidatesInterviewing = styled.div`
  grid-area: candidatesInterviewing;
`;
export const CandidatesHired = styled.div`
  grid-area: candidatesHired;
`;
