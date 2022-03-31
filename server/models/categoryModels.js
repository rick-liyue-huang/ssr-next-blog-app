
const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
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

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = {categoryModel};
