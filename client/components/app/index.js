// SPIKE
  import React, { Component, PropTypes } from 'react';
  import { connect } from 'react-redux';

  // Import Style
  import styles from './stylesheet.css';

  // Import Components
  import Helmet from 'react-helmet';
  import DevTools from 'components/dev_tools';
  import Header from 'components/header';
  import Footer from 'components/footer';

  // Import Actions
  // import { switchLanguage } from 'modules/Intl/IntlActions';

  export class App extends Component {
    constructor(props) {
      super(props);
      this.state = { isMounted: false };
    }

    componentDidMount() {
      this.setState({isMounted: true}); // eslint-disable-line
    }

    toggleAddPostSection = () => {
      this.props.dispatch(toggleAddPost());
    };

    render() {
      return (
        <div>
          {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
          <div>
            <Helmet
              title={'Appliance Parts, Lawn Mower Parts, Heating & Cooling Parts. 365 day returns.'}
              titleTemplate="%s - titleTemplate"
              meta={[
                { charset: 'utf-8' },
                {
                  'http-equiv': 'X-UA-Compatible',
                  content: 'IE=edge',
                },
                {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                },
              ]}
            />
            <Header/>
            <div className={styles.container}>
              {this.props.children}
            </div>
            <Footer />
          </div>
        </div>
      );
    }
  }

  App.propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  };

  // Retrieve data from store as props
  function mapStateToProps(store) {
    return {
      intl: store.intl,
    };
  }

  export default connect(mapStateToProps)(App);
