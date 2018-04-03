/**
 * TriviaQuestion
 */

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class TriviaQuestion extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div >
        <br />
        <br />
        <br />
        <FormattedMessage {...messages.header} />
        <br />
        <br />
        <FormattedMessage {...messages.choices} />
      </div>
    );
  }
}

TriviaQuestion.propTypes = {

};

export default TriviaQuestion;
