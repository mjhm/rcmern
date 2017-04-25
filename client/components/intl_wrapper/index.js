// This is just the scaffolding to implement internationization.
// It allows for specific text to be specified by the `store.intl` and selected via
// the `FormattedMessage` (et. al.) components.
// This probably isn't needed right now but it's not in the way of anything either.

import React, { PropTypes } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

export function IntlWrapper(props) {
  return (
    <IntlProvider {...props.intl} >
      {props.children}
    </IntlProvider>
  );
}

IntlWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(IntlWrapper);
