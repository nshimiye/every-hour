/**
 * TriviaQuestion
 */
import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
// import styled from 'styled-components';

class TriviaQuestion extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onEvaluateUserResponse, trivia } = this.props;
    const { question, response, loading } = trivia;
    return (<div className="body">
      <div className="card-shadow-1"></div>
      <div className="card-shadow-2"></div>
      <div className="card card__product card__product--s150">
        {
          loading ?
            <div className="card__img">
              <LoadingIndicator />
            </div> :
            <picture className="card__img">
              <source srcSet={question.featuredImage} media="(min-width: 900px)" />
              <source srcSet={question.featuredImage} media="(min-width: 0)" />
              <img src={question.featuredImage} alt="Featured" />
            </picture>
        }
        <div className="card__body">
          <p style={{ textAlign: 'center' }}>{question.content}</p>
          {/* <p>{question.answer}</p> */}
          {response && <p style={{ textAlign: 'center' }}>{response.correct ? 'Correct!!' : 'Wrong!!'}</p>}
          {response && <p style={{ textAlign: 'center' }}>{`The answer is "${question.answer.toString()}"`}</p>}
        </div>
        <div className="card__footer">
          <div className="promo-selection" id="promoSelection">
            <button onClick={() => onEvaluateUserResponse(question, { content: true })} disabled={loading} className="btn">TRUE</button> &nbsp;
            <button onClick={() => onEvaluateUserResponse(question, { content: false })} disabled={loading} className="btn">FALSE</button>
          </div>
        </div>
      </div>
    </div>);
  }
}

TriviaQuestion.propTypes = {
  trivia: PropTypes.object,
  onEvaluateUserResponse: PropTypes.func,
};

export default TriviaQuestion;
