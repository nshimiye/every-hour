/**
 *
 * Trivia
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CenteredSection from './CenteredSection';

import LoadingIndicator from 'components/LoadingIndicator';

import TriviaCard from 'components/TriviaCard';
import TriviaStatistic from 'components/TriviaStatistic';
import TriviaQuestion from 'components/TriviaQuestion';
import TriviaTimer from 'components/TriviaTimer';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTrivia, { makeSelectTimer } from './selectors';
import { fetchNextQuestion } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class Trivia extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onFetchNextQuestion, timer, trivia } = this.props; 
    return (
      <TriviaCard >
        <Helmet>
          <title>Trivia</title>
          <meta name="description" content="Helping you enhance your general knowledge!" />
        </Helmet>
        <CenteredSection>
          <TriviaStatistic />

          {
            trivia.loading?
            <LoadingIndicator />:
            <TriviaQuestion />
          }

          <TriviaTimer onFetchNextQuestion={onFetchNextQuestion} timer={timer} />
        </CenteredSection>
      </TriviaCard>
    );
  }
}

Trivia.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  trivia: makeSelectTrivia(),
  timer: makeSelectTimer()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFetchNextQuestion: (evt) => dispatch(fetchNextQuestion()),    
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'trivia', reducer });
const withSaga = injectSaga({ key: 'trivia', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Trivia);
