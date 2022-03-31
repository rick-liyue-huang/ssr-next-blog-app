
const express = require('express');
const profileRouter = express.Router();
const {authMiddleware, adminMiddleware} = require('../controllers/authController');
const {read} = require('../controllers/userController');
const jwt = require("express-jwt");

profileRouter.get('/profile',
	jwt({
		secret: process.env.JWT_SECRET,
		algorithms: ['HS256']
	})
	, authMiddleware, read);




module.exports = {profileRouter};
