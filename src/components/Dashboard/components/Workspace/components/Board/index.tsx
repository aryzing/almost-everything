import React from 'react';

import { Card } from './components/Card';
import * as Table from './components/Table';

export const Board = () => {
  return (
    <Table.Container>
      <Table.HeaderApplied>Applied</Table.HeaderApplied>
      <Table.HeaderInterviewing>Interviewing</Table.HeaderInterviewing>
      <Table.HeaderHired>Hired</Table.HeaderHired>

      <Table.CandidatesApplied>
        <Card
          name={{ first: 'John', last: 'Doe' }}
          image="https://randomuser.me/api/portraits/women/51.jpg"
          phone="+4415264898"
          email="john.doe@gmail.com"
        />
      </Table.CandidatesApplied>

      <Table.CandidatesInterviewing>
        candidates int
      </Table.CandidatesInterviewing>
      <Table.CandidatesHired>can hired</Table.CandidatesHired>
    </Table.Container>
  );
};
