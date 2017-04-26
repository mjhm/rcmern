// SPIKE
  import React, { PropTypes, Component } from 'react';
  import { connect } from 'react-redux';
  import { createFetchAction } from '../../actions/crud'

  import { Link } from 'react-router';

  class BuyPartsPage extends Component {
    componentDidMount() {
      this.props.dispatch(createFetchAction('product-types'));
    }

    // logo image
    // "-webkit-user-select: none;background-position: 0px 0px, 10px 10px;background-size: 20px 20px;background-image:linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);"

    render() {
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
