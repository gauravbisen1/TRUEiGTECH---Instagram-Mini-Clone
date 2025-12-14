const express = require('express');
const router = express.Router();
const { jsonAuthMiddleware, generateToken} = require ('./../middlewares/auth.middleware');
const {followUser,unfollowUser} = require('../controllers/user.controller')



//follow
router.post('/follow/:id',jsonAuthMiddleware, followUser)

//unfollow
router.post('/unfollow/:id',jsonAuthMiddleware, unfollowUser)

module.exports = router;