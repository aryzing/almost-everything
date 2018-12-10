import React, { useEffect, useReducer, useState } from 'react';

import * as Table from './components/Table';
import { cardMapper, cityFilter, nameFilter, stageFilter } from './helpers';
import { getUsers } from './services/getUsers';
import { initialState, reducer } from './services/reducer';
import { ICandidate, THiringStage } from './types';

export const Board = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
      dispatch({ type: 'LOAD_CANDIDATES', payload: candidates });
    };

    operations();
  }, []);
  const [filterChannel, setBroadcast] = useState({} as BroadcastChannel);
  useEffect(() => {
    const bc = new BroadcastChannel('filter_settings');
    bc.onmessage = e => dispatch(e.data);
    setBroadcast(bc);
    const cleanup = () => {
      return bc.close();
    };
    return cleanup;
  }, []);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action = { type: 'SET_FILTER_CITY', payload: e.target.value };
    filterChannel.postMessage(action);
    dispatch(action);
  };

  const hanldeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action = { type: 'SET_FILTER_NAME', payload: e.target.value };
    filterChannel.postMessage(action);
    dispatch(action);
  };

  return (
    <>
      <input
        value={state && state.name}
        placeholder="name"
        onChange={hanldeNameChange}
      />
      <input
        value={state && state.city}
        placeholder="city"
        onChange={handleCityChange}
      />
      <Table.Container>
        <Table.HeaderApplied>Applied</Table.HeaderApplied>
        <Table.HeaderInterviewing>Interviewing</Table.HeaderInterviewing>
        <Table.HeaderHired>Hired</Table.HeaderHired>

        <Table.CandidatesApplied>
          {state &&
            state.candidates
              .filter(stageFilter('applied'))
              .filter(cityFilter(state && state.city))
              .filter(nameFilter(state && state.name))
              .map(cardMapper(dispatch))}
        </Table.CandidatesApplied>

        <Table.CandidatesInterviewing>
          {state &&
            state.candidates
              .filter(stageFilter('interviewing'))
              .filter(cityFilter(state && state.city))
              .filter(nameFilter(state && state.name))
              .map(cardMapper(dispatch))}
        </Table.CandidatesInterviewing>

        <Table.CandidatesHired>
          {state &&
            state.candidates
              .filter(stageFilter('hired'))
              .filter(cityFilter(state && state.city))
              .filter(nameFilter(state && state.name))
              .map(cardMapper(dispatch))}
        </Table.CandidatesHired>
      </Table.Container>
    </>
  );
};
