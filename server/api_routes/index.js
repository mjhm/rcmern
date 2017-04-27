// SPIKE
  import { Router } from 'express';
  import productTypeController from '../controllers/product_type_controller';

  const router = new Router();

  router.route('/product-types').get(productTypeController.getProductTypes);

  export default router;
