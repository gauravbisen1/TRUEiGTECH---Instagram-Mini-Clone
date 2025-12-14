const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Post = require('../models/post.model');
const { jsonAuthMiddleware } = require('../middlewares/auth.middleware')
const {createPost,getPost,likePost,unlikePost, comment} = require('../controllers/post.controller')

//create post
router.post('/',jsonAuthMiddleware, createPost);

//get post 
router.get('/', jsonAuthMiddleware, getPost);

//like
router.put('/:id/like',jsonAuthMiddleware, likePost);

//unlike
router.put('/:id/unlike',jsonAuthMiddleware, unlikePost);

//comment
router.post('/:id/comment', jsonAuthMiddleware, comment);

module.exports = router;
