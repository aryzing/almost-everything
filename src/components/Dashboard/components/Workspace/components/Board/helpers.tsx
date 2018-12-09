import React, { Dispatch } from 'react';
import { Card } from './components/Card';
import { IAction } from './services/reducer';
import { ICandidate, THiringStage } from './types';

export const stageFilter = (stage: THiringStage) => (candidate: ICandidate) =>
  candidate.hiringStage === stage;

export const cityFilter = (city: string) => (candidate: ICandidate) =>
  candidate.location.city.toLowerCase().includes(city.toLocaleLowerCase());

export const nameFilter = (name: string) => (candidate: ICandidate) =>
  (candidate.name.first + ' ' + candidate.name.last)
    .toLocaleLowerCase()
    .includes(name.toLowerCase());

export const prevFactory = (
  dispatch: Dispatch<IAction>,
  hiringStage: THiringStage,
  candidateId: string,
) => {
  switch (hiringStage) {
    case 'applied': {
      return undefined;
    }
    case 'interviewing': {
      return () =>
        dispatch({
          payload: { candidateId, hiringStage: 'applied' },
          type: 'SET_CANDIDATE_STAGE',
        });
    }
    case 'hired': {
      return () =>
        dispatch({
          payload: {
            candidateId,
            hiringStage: 'interviewing',
          },
          type: 'SET_CANDIDATE_STAGE',
        });
    }
  }
};

export const nextFactory = (
  dispatch: Dispatch<IAction>,
  hiringStage: THiringStage,
  candidateId: string,
) => {
  switch (hiringStage) {
    case 'applied': {
      return () =>
        dispatch({
          payload: { candidateId, hiringStage: 'interviewing' },
          type: 'SET_CANDIDATE_STAGE',
        });
    }
    case 'interviewing': {
      return () =>
        dispatch({
          payload: { candidateId, hiringStage: 'hired' },
          type: 'SET_CANDIDATE_STAGE',
        });
    }
    case 'hired': {
      return undefined;
    }
  }
};

export const cardMapper = (dispatch: Dispatch<IAction>) => (
  candidate: ICandidate,
) => (
  <Card
    key={candidate.id.value}
    name={candidate.name}
    image={candidate.picture.medium}
    phone={candidate.phone}
    email={candidate.email}
    city={candidate.location.city}
    handlePrev={prevFactory(
      dispatch,
      candidate.hiringStage,
      candidate.id.value,
    )}
    handleNext={nextFactory(
      dispatch,
      candidate.hiringStage,
      candidate.id.value,
    )}
  />
);
