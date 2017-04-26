// SPIKE
  /**
   * Root Component
   */
  import React from 'react';
  import { Provider } from 'react-redux';
  import { Router, browserHistory } from 'react-router';
  import IntlWrapper from 'components/intl_wrapper';

  // Import Routes
  import routes from './routes';

  // Base stylesheet
  require('main.css');
  // require('assets/bootstrap/css/bootstrap.css');
  // require('assets/bootstrap/css/bootstrap-theme.css');

  export default function Top(props) {
    return (
      <Provider store={props.store}>
        <IntlWrapper>
          <Router history={browserHistory}>
            {routes}
          </Router>
        </IntlWrapper>
      </Provider>
    );
  }

  Top.propTypes = {
    store: React.PropTypes.object.isRequired,
  };
