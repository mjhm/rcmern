import ProductType from '../models/product_type';

export function getProductTypes(req, res) {
  ProductType.find().sort('_id').exec((err, productTypes) => {
    if (err) {
      res.status(500).send(err);
    }
    setTimeout((() => res.json(productTypes)), 10);
  });
}
