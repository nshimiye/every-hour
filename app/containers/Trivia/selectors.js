import { createSelector } from 'reselect';

/**
 * Direct selector to the trivia state domain
 */
const selectTriviaDomain = (state) => state.get('trivia');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Trivia
 */

const makeSelectTrivia = () => createSelector(
  selectTriviaDomain,
  (substate) => substate.toJS(),
);
const makeSelectTimer = () => createSelector(
  selectTriviaDomain,
  (substate) => substate.get('timer').toJS(),
);
export {
  selectTriviaDomain,
  makeSelectTimer,
};
export default makeSelectTrivia;
