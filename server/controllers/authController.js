
const {userModel} = require('../models/userModel');
const shortId = require('shortid');
const JWT = require('jsonwebtoken');
const jwt = require('express-jwt');
const dotenv = require('dotenv');
dotenv.config();

const signupController = (req, res) => {

	// console.log(req.body);
	userModel.findOne({ email: req.body.email }).exec((err, user) => {
		if (user) {
			return res.status(400).json({
				error: 'Email is taken'
			});
		}

		const { name, email, password } = req.body;
		let username = shortId.generate();
		let profile = `${process.env.CLIENT_URL}/profile/${username}`;

		let newUser = new userModel({ name, email, password, profile, username });
		newUser.save((err, success) => {
			if (err) {
				return res.status(400).json({
					error: err
				});
			}
			// res.json({
			//     user: success
			// });
			res.json({
				message: 'Sign up success! Please sign in.'
			});
		});
	});
}

const signinController = (req, res) => {

	const { email, password } = req.body;
	// check if user exist
	userModel.findOne({ email }).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'User with that email does not exist. Please signup.'
			});
		}
		// authenticate
		if (!user.authenticate(password)) {
			return res.status(400).json({
				error: 'Email and password do not match.'
			});
		}
		// generate a token and send to client
		const token = JWT.sign(
			{ _id: user._id },
			process.env.JWT_SECRET,
			{ expiresIn: '1d' }
		);

		res.cookie('token', token, { expiresIn: '1d' });
		const { _id, username, name, email, role } = user;
		return res.json({
			token,
			user: { _id, username, name, email, role }
		});
	});

}

const signoutController =  (req, res) => {
	res.clearCookie('token');
	res.json({
		message: 'Signout success'
	});
};

/**
 * @desc add directly in route
 * @type {(function(*, *, *): (*|undefined))|*}
 */
exports.requireSignin = jwt({
	secret: process.env.JWT_SECRET,
	algorithms: ['HS256']
})

module.exports = {
	signupController, signinController,
	signoutController};
