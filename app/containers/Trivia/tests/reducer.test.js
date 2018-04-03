
import { fromJS } from 'immutable';
import triviaReducer from '../reducer';

describe('triviaReducer', () => {
  it('returns the initial state', () => {
    expect(triviaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
