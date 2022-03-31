
const express = require('express');
const {
	createCategoryController,
	listCategoriesController,
	readCategoryController,
	deleteCategoryController
} = require('../controllers/categoryController');
const {runValidation} = require('../validators');
const {categoryCreatorValidator} = require('../validators/category');
const jwt = require("express-jwt");
const {adminMiddleware} = require("../controllers/authController");

const categoryRouter = express.Router();

categoryRouter.post('/category',
	categoryCreatorValidator, runValidation,
	jwt({
		secret: process.env.JWT_SECRET,
		algorithms: ['HS256']
	})
	// keep the admin can create category
	, adminMiddleware, createCategoryController);

categoryRouter.get('/categories', listCategoriesController)
categoryRouter.get('/category/:slug', readCategoryController)
categoryRouter.delete('/category/:slug', jwt({
		secret: process.env.JWT_SECRET,
		algorithms: ['HS256']
	})
	// keep the admin can create category
	, adminMiddleware, deleteCategoryController);




module.exports = {categoryRouter};
