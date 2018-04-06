/*
 *
 * Trivia actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_QUESTION,
  UPDATE_QUESTION,
  EVALUATE_RESPONSE,
  UPDATE_RESPONSE,
  RESET_TIME_LEFT,
  DECREMENT_TIME_LEFT,
} from './constants';

export function resetTimer(period) {
  return {
    type: RESET_TIME_LEFT,
    period,
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

export function updateStoredQuestion({ question, choices }) {
  return {
    type: UPDATE_QUESTION,
    question,
    choices,
  };
}
export function evaluateUserResponse(question, response) {
  return {
    type: EVALUATE_RESPONSE,
    question,
    response,
  };
}
export function updateStoredResponse(response) {
  return {
    type: UPDATE_RESPONSE,
    response,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
