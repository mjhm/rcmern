// SPIKE
  import React, { PropTypes } from 'react';
  import { Link } from 'react-router';
  import { FormattedMessage } from 'react-intl';
  import { Grid, Row, Col, FormGroup, InputGroup, FormControl, Glyphicon,
    Button } from 'react-bootstrap';

  // Import Style
  import styles from './stylesheet.css';

  export function Header(props, context) {
    // const languageNodes = props.intl.enabledLanguages.map(
    //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
    // );
    console.log((typeof window === 'undefined') ? 'Server Render' : 'Client Render');
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12} sm={4}><Link to='/'><span className={styles['rcLogoSprite']}></span></Link></Col>
          <Col xs={12} sm={4}>
            <FormGroup>
              <InputGroup>
                <FormControl type="text" />
                <InputGroup.Button>
                  <Button><Glyphicon glyph="search" /></Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={12} sm={4}>
            <Row className={styles.menuText}>
              <Col xs={4}><span>Contact Us</span></Col>
              <Col xs={4}><span>My Account</span></Col>
              <Col xs={4}><span>Cart</span></Col>
            </Row>
          </Col>
        </Row>
      </Grid>

    );
  }

  Header.contextTypes = {
    router: React.PropTypes.object,
  };

  Header.propTypes = {
    // toggleAddPost: PropTypes.func.isRequired,
    // switchLanguage: PropTypes.func.isRequired,
    // intl: PropTypes.object.isRequired,
  };

  export default Header;
