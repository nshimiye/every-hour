/**
*
* TriviaCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import TriviaTimer from 'components/TriviaTimer';
import LoadingIndicator from 'components/LoadingIndicator';

// import styled from 'styled-components';
// #96CFEA,#F7B647,#E1EAC7,#6B705F,#5E9E4F,#96CFEA,#F7B647,#E1EAC7
import './styles.css';


class TriviaCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onFetchNextQuestion, timer, trivia } = this.props;
    return (
      <div className="page">
        <div className="header stats">
          <div className="menu correct">34</div>
          <div className="menu incorrect">56</div>
        </div>

        <div className="body">
          <div className="card-shadow-1"></div>
          <div className="card-shadow-2"></div>
          <div className="card card__product card__product--s150">
            {
              trivia.loading ?
                <div className="card__img">
                  <LoadingIndicator />
                </div> :
                <picture className="card__img">
                  <source srcSet="https://via.placeholder.com/100x100" media="(min-width: 900px)" />
                  <source srcSet="https://via.placeholder.com/100x100" media="(min-width: 0)" />
                  <img src="https://via.placeholder.com/100x100" alt="item of focus" />
                </picture>
            }
            <div className="card__body">
              <p>The question is easy</p>
            </div>
            <div className="card__footer">
              <div className="promo-selection" id="promoSelection">
                <button disabled={trivia.loading} className="btn">TRUE</button> &nbsp;
                <button disabled={trivia.loading} className="btn">FALSE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <TriviaTimer onFetchNextQuestion={onFetchNextQuestion} timer={timer} />
        </div>
      </div>
    );
  }
}

TriviaCard.propTypes = {
  onFetchNextQuestion: PropTypes.func,
  timer: PropTypes.shape({
    period: PropTypes.number.isRequired,
    timeLeft: PropTypes.number.isRequired,
  }),
  trivia: PropTypes.object,
};

export default TriviaCard;
