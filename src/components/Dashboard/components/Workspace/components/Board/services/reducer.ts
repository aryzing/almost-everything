import { ICandidate } from '../types';

export interface IState {
  candidates: ICandidate[];
  name: string;
  city: string;
}

export interface IAction {
  type: string;
  payload: any;
}

export const initialState = {
  candidates: [],
  city: '',
  name: '',
};

export const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case 'LOAD_CANDIDATES': {
      return {
        ...state,
        candidates: action.payload,
      };
    }
    case 'SET_FILTER_NAME': {
      return {
        ...state,
        name: action.payload,
      };
    }
    case 'SET_FILTER_CITY': {
      return {
        ...state,
        city: action.payload,
      };
    }
    case 'SET_CANDIDATE_STAGE': {
      const foundCandidate = state.candidates.find(
        candidate => candidate.id.value === action.payload.candidateId,
      );
      if (foundCandidate) {
        const updatedCandidate: ICandidate = {
          ...foundCandidate,
          hiringStage: action.payload.hiringStage,
        };
        const updatedCandidates = [
          updatedCandidate,
          ...state.candidates.filter(
            c => c.id.value !== action.payload.candidateId,
          ),
        ];
        return {
          ...state,
          candidates: updatedCandidates,
        };
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
};
