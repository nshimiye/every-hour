/**
*
* TriviaCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import TriviaStatistic from 'components/TriviaStatistic';
import TriviaQuestion from 'components/TriviaQuestion';
import TriviaTimer from 'components/TriviaTimer';

// import styled from 'styled-components';
// #96CFEA,#F7B647,#E1EAC7,#6B705F,#5E9E4F,#96CFEA,#F7B647,#E1EAC7
import './styles.css';

class TriviaCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onFetchNextQuestion, onEvaluateUserResponse, timer, trivia } = this.props;
    return (<div className="page">
      {/* <div className="header stats"> */}
      <TriviaStatistic />
      {/* </div> */}

      <TriviaQuestion trivia={trivia} onEvaluateUserResponse={onEvaluateUserResponse} />

      <div className="footer">
        <TriviaTimer onFetchNextQuestion={onFetchNextQuestion} timer={timer} />
      </div>
    </div>);
  }
}

TriviaCard.propTypes = {
  onFetchNextQuestion: PropTypes.func,
  onEvaluateUserResponse: PropTypes.func,
  timer: PropTypes.shape({
    period: PropTypes.number.isRequired,
    timeLeft: PropTypes.number.isRequired,
  }),
  trivia: PropTypes.object,
};

export default TriviaCard;
