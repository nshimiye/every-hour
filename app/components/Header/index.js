import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/trivia">
            <FormattedMessage {...messages.trivia} />
          </HeaderLink>
          <HeaderLink to="/price-tracking">
            <FormattedMessage {...messages.priceTracking} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
