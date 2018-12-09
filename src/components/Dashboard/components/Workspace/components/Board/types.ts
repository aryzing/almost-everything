import { IPerson } from '../../../../../../types/randomUser';

export type THiringStage = 'applied' | 'interviewing' | 'hired';

export interface ICandidate extends IPerson {
  hiringStage: THiringStage;
}
