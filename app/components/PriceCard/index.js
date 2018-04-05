/**
*
* PriceCard
*
*/

import React from 'react';

import Button from 'components/Button';
// import styled from 'styled-components';

import './styles.css';

class PriceCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<div className="page">
      <div className="header stats">
        <div className="menu correct">34</div>
        <div className="menu incorrect">56</div>
      </div>

      <div className="body">
        <div className="card-shadow-1"></div>
        <div className="card-shadow-2"></div>
        <div className="card card__product card__product--s150">
          <picture className="card__img">
            <source srcSet="https://via.placeholder.com/100x100" media="(min-width: 900px)" />
            <source srcSet="https://via.placeholder.com/100x100" media="(min-width: 0)" />
            <img src="https://via.placeholder.com/100x100" alt="item of focus" />
          </picture>
          <div className="card__body">
            <p>The question is easy</p>
          </div>
          <div className="card__footer">
            <div className="promo-selection" id="promoSelection">
              <button className="btn">TRUE</button> &nbsp;
              <button className="btn">FALSE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Button>NEXT</Button>
      </div>
    </div>);
  }
}

PriceCard.propTypes = {

};

export default PriceCard;
