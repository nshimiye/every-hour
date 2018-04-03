import { createSelector } from 'reselect';

/**
 * Direct selector to the priceTracking state domain
 */
const selectPriceTrackingDomain = (state) => state.get('priceTracking');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PriceTracking
 */

const makeSelectPriceTracking = () => createSelector(
  selectPriceTrackingDomain,
  (substate) => substate.toJS()
);

export default makeSelectPriceTracking;
export {
  selectPriceTrackingDomain,
};
