import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createFetchAction } from '../../actions/crud'

import { Link } from 'react-router';

class BuyPartsPage extends Component {
  componentDidMount() {
    this.props.dispatch(createFetchAction('product-types'));
  }

  render() {
    console.log('product-types props', this.props);
    return (
      <div>
        <h1>Buy Parts</h1>
        <Link to='/parts'>Buy Parts</Link><br/>
        <Link to='/wizard'>Repair Wizard</Link><br/>
        <Link to='/diy'>DIY Library</Link><br/>
        <h2>Product Types</h2>
          <ul>{
              this.props.productTypeList.map((ptype) => {
                return <li>{ptype.name} {ptype.use}</li>
              })
          }</ul>
      </div>
    );
  }
};

// Actions required to provide data for this component to render in server side.
BuyPartsPage.need = [() => { return createFetchAction('product-types'); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    productTypeList: state.api.productTypeList,
    productTypeMap: state.api.productTypeMap,
  };
}

BuyPartsPage.propTypes = {
  productTypeList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    use: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired,
  productTypeMap: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

BuyPartsPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(BuyPartsPage);
