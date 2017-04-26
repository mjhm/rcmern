// SPIKE
  /**
   * Client entry point
   */
  import React from 'react';
  import { render } from 'react-dom';
  import { AppContainer } from 'react-hot-loader';
  import Top from './top';
  import { configureStore } from './store';

  // Initialize store
  const store = configureStore(window.__INITIAL_STATE__);
  const mountApp = document.getElementById('root');

  render(
    <AppContainer>
      <Top store={store} />
    </AppContainer>,
    mountApp
  );

  // For hot reloading of react components
  if (module.hot) {
    module.hot.accept('./top', () => {
      // If you use Webpack 2 in ES modules mode, you can
      // use <Top /> here rather than require() a <NextTop />.
      const NextTop = require('./top').default; // eslint-disable-line global-require
      render(
        <AppContainer>
          <NextTop store={store} />
        </AppContainer>,
        mountApp
      );
    });
  }
