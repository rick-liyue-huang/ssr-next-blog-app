
const mongoose = require('mongoose');
const {Schema} = mongoose;

const tagSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		max: 26
	},
	slug: {
		type: String,
		unique: true,
		index: true
	},
}, {timestamps: true});

const tagModel = mongoose.model('Tag', tagSchema);

module.exports = {tagModel};
