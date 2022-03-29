
const express = require('express');
const {blogController} = require("../controllers/blogController");


const blogRouter = express.Router();

blogRouter.get('/', blogController)
module.exports = {blogRouter};
