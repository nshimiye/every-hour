/**
 *
 * PriceTracking
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPriceTracking from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class PriceTracking extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>PriceTracking</title>
          <meta name="description" content="Description of PriceTracking" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

PriceTracking.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pricetracking: makeSelectPriceTracking(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'priceTracking', reducer });
const withSaga = injectSaga({ key: 'priceTracking', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PriceTracking);
