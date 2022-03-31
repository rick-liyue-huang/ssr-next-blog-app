
const express = require('express');
const {
	createTagController,
	listTagsController,
	readTagController,
	deleteTagController
} = require('../controllers/tagController');
const {runValidation} = require('../validators');
const {tagCreatorValidator} = require('../validators/tag');
const jwt = require("express-jwt");
const {adminMiddleware} = require("../controllers/authController");

const tagRouter = express.Router();

tagRouter.post('/tag',
	tagCreatorValidator, runValidation,
	jwt({
		secret: process.env.JWT_SECRET,
		algorithms: ['HS256']
	})
	// keep the admin can create category
	, adminMiddleware, createTagController);

tagRouter.get('/tags', listTagsController)
tagRouter.get('/tag/:slug', readTagController)
tagRouter.delete('/tag/:slug', jwt({
		secret: process.env.JWT_SECRET,
		algorithms: ['HS256']
	})
	// keep the admin can create category
	, adminMiddleware, deleteTagController);




module.exports = {tagRouter};
