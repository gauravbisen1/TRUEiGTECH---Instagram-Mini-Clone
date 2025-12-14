const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const {registerUser,loginUser} = require('../controllers/auth.controller')

//signup
router.post('/signup', registerUser);

//login
router.post('/login', loginUser)

module.exports = router;