
const {categoryModel} = require('../models/categoryModels');
const slugify = require('slugify');
const {uniqueMessage, errorHandler} = require('../tools/dbError');

const createCategoryController = (req, res) => {
	const {name} = req.body;
	let slug = slugify(name).toLowerCase(); // change name 'a b' to 'a-b'

	let category = new categoryModel({name, slug});

	category.save((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}
		res.json(data)
	})
}

const listCategoriesController = (req, res) => {
	categoryModel.find({}).exec((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}

		return res.json(data);
	})
}

const readCategoryController = (req, res) => {
	const slug = req.params.slug.toLowerCase();

	categoryModel.findOne({slug}).exec((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}
		res.json(data);
	})
}

const deleteCategoryController = (req, res) => {
	const slug = req.params.slug.toLowerCase();
	categoryModel.findOneAndRemove({slug}).exec((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			})
		}
		res.json({
			message: 'category deleted'
		});
	})
}

module.exports = {createCategoryController, listCategoriesController,
	readCategoryController, deleteCategoryController
}
