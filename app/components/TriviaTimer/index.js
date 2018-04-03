/**
*
* TriviaTimer
*
*/

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';
import Button from 'components/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class TriviaTimer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { timer: { timeLeft }, onFetchNextQuestion } = this.props;
    return (
      <div>
        <Button
          onClick={onFetchNextQuestion}
        > 
          Next question in <span>{timeLeft}</span> 
        </Button>
      </div>
    );
  }
}

TriviaTimer.propTypes = {
  timer: PropTypes.shape({
    period: PropTypes.number.isRequired,
    timeLeft: PropTypes.number.isRequired,
  }),
  onFetchNextQuestion: PropTypes.func.isRequired,  
};

TriviaTimer.defaultProps = {
  timeLeft: 0
}
export default TriviaTimer;
