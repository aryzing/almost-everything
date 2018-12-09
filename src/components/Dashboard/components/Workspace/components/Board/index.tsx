import React from 'react';

import * as Table from './components/Table';

export const Board = () => {
  return (
    <Table.Container>
      <Table.HeaderApplied>Applied</Table.HeaderApplied>
      <Table.HeaderInterviewing>Interviewing</Table.HeaderInterviewing>
      <Table.HeaderHired>Hired</Table.HeaderHired>

      <Table.CandidatesApplied>candidates...</Table.CandidatesApplied>
      <Table.CandidatesInterviewing>
        candidates int
      </Table.CandidatesInterviewing>
      <Table.CandidatesHired>can hired</Table.CandidatesHired>
    </Table.Container>
  );
};
