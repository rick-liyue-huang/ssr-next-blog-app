
const mongoose = require('mongoose');
const crypto = require('crypto');

const {Schema} = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		trim: true,
		required: true,
		max: 36,
		unique: true,
		index: true,
		lowercase: true
	},
	name: {
		type: String,
		trim: true,
		required: true,
		max: 26
	},
	email: {
		type: String,
		trim: true,
		required: true,
		unique: true,
		lowercase: true
	},
	profile: {
		type: String,
		required: true
	},
	hashed_password: {
		type: String,
		required: true
	},
	salt: String,
	about: {
		type: String
	},
	role: {
		type: Number,
		default: 0
	},
	photo: {
		data: Buffer,
		contentType: String
	},
	resetPasswordLink: {
		data: String,
		default: ''
	}
}, {timestamps: true});

const userModel = mongoose.model('User', userSchema);

module.exports = {userModel}
