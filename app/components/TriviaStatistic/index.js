/**
*
* TriviaStatistic
*
*/
import React from 'react';
// import styled from 'styled-components';

class TriviaStatistic extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<div className="header stats">
      <div className="menu correct">34</div>
      <div className="menu incorrect">56</div>
    </div>);
  }
}

TriviaStatistic.propTypes = {

};

export default TriviaStatistic;
