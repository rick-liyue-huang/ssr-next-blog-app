
const express = require('express');
const {signupController, signinController, signoutController} = require("../controllers/authController");
const {runValidation} = require("../validators");
const {userSignupValidator, userSigninValidator} = require("../validators/auth");
const jwt = require("express-jwt");
const authRouter = express.Router();

authRouter.post('/signup', userSignupValidator, runValidation, signupController);
authRouter.post('/signin', userSigninValidator, runValidation, signinController);
authRouter.get('/signout', signoutController);

authRouter.get('/secret',
	jwt({
		secret: process.env.JWT_SECRET,
		algorithms: ['HS256']
	}),
	(req, res) => {
		res.json({
			message: 'you go to secret page'
		})
})

module.exports = {authRouter};
