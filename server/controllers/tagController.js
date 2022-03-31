const slugify = require("slugify");
const {tagModel} = require("../models/tagModels");
const {errorHandler} = require("../tools/dbError");


const createTagController = (req, res) => {
	const {name} = req.body;
	let slug = slugify(name).toLowerCase(); // change name 'a b' to 'a-b'

	let tag = new tagModel({name, slug});

	tag.save((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}
		res.json(data)
	})
}

const listTagsController = (req, res) => {
	tagModel.find({}).exec((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}

		return res.json(data);
	})
}

const readTagController = (req, res) => {
	const slug = req.params.slug.toLowerCase();

	tagModel.findOne({slug}).exec((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}
		res.json(data);
	})
}

const deleteTagController = (req, res) => {
	const slug = req.params.slug.toLowerCase();
	tagModel.findOneAndRemove({slug}).exec((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}
		res.json({
			message: 'tag deleted'
		});
	})
}


module.exports = {
	createTagController,
	listTagsController,
	readTagController,
	deleteTagController
}
