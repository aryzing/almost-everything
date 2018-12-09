import React, { useEffect, useReducer } from 'react';

import { IPerson } from '../../../../../../types/randomUser';
import { Card } from './components/Card';
import * as Table from './components/Table';

type THiringStage = 'applied' | 'interviewing' | 'hired';

interface ICandidate extends IPerson {
  hiringStage: THiringStage;
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA_FROM_API': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const Board = () => {
  const [state, dispatch]: [ICandidate[], any] = useReducer(reducer, []);
  useEffect(() => {
    const operations = async () => {
      const body = await fetch('https://randomuser.me/api/?nat=gb&results=5');
      const data = (await body.json()).results as IPerson[];
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
  return (
    <Table.Container>
      <Table.HeaderApplied>Applied</Table.HeaderApplied>
      <Table.HeaderInterviewing>Interviewing</Table.HeaderInterviewing>
      <Table.HeaderHired>Hired</Table.HeaderHired>

      <Table.CandidatesApplied>
        {state
          .filter(candidate => {
            const applied: THiringStage = 'applied';
            return candidate.hiringStage === applied;
          })
          .map(candidate => (
            <Card
              key={candidate.id.value}
              name={candidate.name}
              image={candidate.picture.medium}
              phone={candidate.phone}
              email={candidate.email}
            />
          ))}
      </Table.CandidatesApplied>

      <Table.CandidatesInterviewing>
        candidates int
      </Table.CandidatesInterviewing>
      <Table.CandidatesHired>can hired</Table.CandidatesHired>
    </Table.Container>
  );
};
