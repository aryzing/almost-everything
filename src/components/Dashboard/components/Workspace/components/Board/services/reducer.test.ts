import { initialState, reducer } from './reducer';

test('returns initial state when called with undefined state', () => {
  expect(reducer(undefined, { type: 'ANY', payload: 'ANY' })).toEqual(
    initialState,
  );
});
