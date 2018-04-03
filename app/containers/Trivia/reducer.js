/*
 *
 * Trivia reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, FETCH_QUESTION, RESET_TIME_LEFT, DECREMENT_TIME_LEFT, TOOGLE_API_CALLING,
} from './constants';

const initialState = fromJS({
  timer: {
    timeLeft: 0,
    period: 5, // in seconds, production is 1 hour
  },
  loading: false
});

function triviaReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case RESET_TIME_LEFT:
      return state.setIn(['timer', 'timeLeft'], action.period);
    case DECREMENT_TIME_LEFT:
      // decrement by 1 second
      return state.updateIn(['timer', 'timeLeft'], timeLeft => timeLeft - 1);
    case TOOGLE_API_CALLING:
      return state.set('loading', action.loading);
    default:
      return state;
  }
}

export default triviaReducer;
