/*
 *
 * Trivia reducer
 *
 */
import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, RESET_TIME_LEFT, DECREMENT_TIME_LEFT,
  TOOGLE_API_CALLING, UPDATE_QUESTION, UPDATE_RESPONSE,
} from './constants';

const initialState = fromJS({
  timer: {
    timeLeft: 0,
    period: 30, // in seconds, production is 1 hour
  },
  loading: false,
  question: {
    featuredImage: 'https://picsum.photos/100/100/?random',
    content: 'NA',
    answer: false,
  },
  choices: [true, false],
  response: null,
  // {
    // content: true, // user provided response
    // correct: false, // computed using choices and answers
  // },
});

function triviaReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case RESET_TIME_LEFT:
      return state.setIn(['timer', 'timeLeft'], action.period);
    case DECREMENT_TIME_LEFT: // decrement by 1 second
      return state.updateIn(['timer', 'timeLeft'], (timeLeft) => timeLeft - 1);
    case TOOGLE_API_CALLING:
      return state.set('loading', action.loading);
    case UPDATE_QUESTION:
      return state.merge(fromJS({ question: action.question, choices: action.choices }));
    case UPDATE_RESPONSE:
      return state.set('response', action.response);
    default:
      return state;
  }
}

export default triviaReducer;
