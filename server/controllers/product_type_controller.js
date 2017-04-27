import productTypes from '../models/product_types';

const getProductTypes = (req, res) => {
  console.log('productTypes', productTypes.toJSON());
  setTimeout((() => res.json(productTypes.toJSON())), 10);
};

export default { getProductTypes };
