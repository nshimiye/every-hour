
import { fromJS } from 'immutable';
import priceTrackingReducer from '../reducer';

describe('priceTrackingReducer', () => {
  it('returns the initial state', () => {
    expect(priceTrackingReducer(undefined, {})).toEqual(fromJS({}));
  });
});
