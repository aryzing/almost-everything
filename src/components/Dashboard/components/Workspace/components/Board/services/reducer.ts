import { ICandidate } from '../types';

export interface IState {
  candidates: ICandidate[];
  name: string;
  city: string;
}

export const initialState = {
  candidates: [],
  city: '',
  name: '',
};

export const reducer = (state, action) => {
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
    default: {
      return state;
    }
  }
};
