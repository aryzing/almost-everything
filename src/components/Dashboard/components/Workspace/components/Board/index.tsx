import React, { useEffect, useReducer } from 'react';

import { Card } from './components/Card';
import * as Table from './components/Table';
import { getUsers } from './services/getUsers';
import { reducer } from './services/reducer';
import { ICandidate, THiringStage } from './types';

export const Board = () => {
  const [state, dispatch]: [ICandidate[], any] = useReducer(reducer, []);
  useEffect(() => {
    const operations = async () => {
      const data = await getUsers();
      const candidates: ICandidate[] = data.map(candidate => {
        const hiringStage: THiringStage = 'applied';
        return {
          ...candidate,
          hiringStage,
        };
      });
      dispatch({ type: 'LOAD_DATA_FROM_API', payload: candidates });
    };

    operations();
  }, []);

  const candidateCardsByStage = (stage: THiringStage) =>
    state
      .filter(candidate => {
        return candidate.hiringStage === stage;
      })
      .map(candidate => (
        <Card
          key={candidate.id.value}
          name={candidate.name}
          image={candidate.picture.medium}
          phone={candidate.phone}
          email={candidate.email}
        />
      ));

  return (
    <Table.Container>
      <Table.HeaderApplied>Applied</Table.HeaderApplied>
      <Table.HeaderInterviewing>Interviewing</Table.HeaderInterviewing>
      <Table.HeaderHired>Hired</Table.HeaderHired>

      <Table.CandidatesApplied>
        {candidateCardsByStage('applied')}
      </Table.CandidatesApplied>

      <Table.CandidatesInterviewing>
        {candidateCardsByStage('interviewing')}
      </Table.CandidatesInterviewing>

      <Table.CandidatesHired>
        {candidateCardsByStage('hired')}
      </Table.CandidatesHired>
    </Table.Container>
  );
};
