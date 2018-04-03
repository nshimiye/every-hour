/**
*
* TriviaCard
*
*/

import React from 'react';
// import styled from 'styled-components';
// #96CFEA,#F7B647,#E1EAC7,#6B705F,#5E9E4F,#96CFEA,#F7B647,#E1EAC7
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class TriviaCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;
    return (
      <div style={{
        backgroundColor: '#96CFEA',
        height: '100%',
      }}>
        {children}
      </div>
    );
  }
}

TriviaCard.propTypes = {

};

export default TriviaCard;
