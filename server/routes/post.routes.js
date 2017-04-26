// SPIKE
  import { Router } from 'express';
  // import * as PostController from '../controllers/post.controller';
  import * as ProductTypeController from '../controllers/product_type_controller';
  const router = new Router();

  // Get all Posts
  // router.route('/posts').get(PostController.getPosts);
  // 
  // // Get one post by cuid
  // router.route('/posts/:cuid').get(PostController.getPost);
  //
  // // Add a new Post
  // router.route('/posts').post(PostController.addPost);
  //
  // // Delete a post by cuid
  // router.route('/posts/:cuid').delete(PostController.deletePost);

  router.route('/product-types').get(ProductTypeController.getProductTypes);

  export default router;
