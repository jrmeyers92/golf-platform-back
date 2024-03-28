const express = require('express');
const postsController = require('./../controllers/postController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(postsController.getAllPosts)
  .post(postsController.setPostUserIds, postsController.createPost);

router
  .route('/:id')
  .patch(authController.restrictTo('user', 'admin'), postsController.updatePost)
  .delete(
    authController.restrictTo('user', 'admin'),
    postsController.deletePost,
  );

module.exports = router;
