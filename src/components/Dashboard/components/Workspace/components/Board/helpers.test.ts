import { ILocation } from '../../../../../../types/randomUser';
import { cityFilter, stageFilter } from './helpers';
import { ICandidate } from './types';

test('stageFilter', () => {
  const candidate: Partial<ICandidate> = {
    hiringStage: 'hired',
  };
  expect(stageFilter('hired')(candidate as ICandidate)).toBe(true);
});

test('cityFilter', () => {
  const candidate: Partial<ICandidate> = {
    location: {
      city: 'London',
    } as ILocation,
  };
  expect(cityFilter('lon')(candidate as ICandidate)).toBe(true);
  expect(cityFilter('don')(candidate as ICandidate)).toBe(true);
  expect(cityFilter('')(candidate as ICandidate)).toBe(true);
  expect(cityFilter('abc')(candidate as ICandidate)).toBe(false);
});
