/*
 *
 * Trivia actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_QUESTION,
  RESET_TIME_LEFT,
  DECREMENT_TIME_LEFT,
} from './constants';

export function resetTimer(period) {
  return {
    type: RESET_TIME_LEFT,
    period
  };
}
export function decrementTimer() {
  return {
    type: DECREMENT_TIME_LEFT,
  };
}

export function fetchNextQuestion() {
  return {
    type: FETCH_QUESTION,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
